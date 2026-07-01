import { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import type { LucideIcon } from "lucide-react";

export interface PersonaItem {
  id: string;
  label: string;
  problem: string;
  icon: LucideIcon;
}

const MAX_VISIBLE = 7;
const HALF = 3;

const CARD_W = 11;  // rem
const CARD_H = 16;  // rem

const FAN_POSITIONS = [
  { rot: -20, scale: 0.78, x: -20, y: 5.0, zIndex: 1 },
  { rot: -13, scale: 0.85, x: -14, y: 2.8, zIndex: 2 },
  { rot: -6,  scale: 0.93, x: -7,  y: 0.8, zIndex: 3 },
  { rot:  0,  scale: 1.0,  x:  0,  y: 0.0, zIndex: 10 },
  { rot:  6,  scale: 0.93, x:  7,  y: 0.8, zIndex: 3 },
  { rot: 13,  scale: 0.85, x: 14,  y: 2.8, zIndex: 2 },
  { rot: 20,  scale: 0.78, x: 20,  y: 5.0, zIndex: 1 },
];

function getResponsiveMultiplier(width: number) {
  if (width < 480) return 0.3;
  if (width < 640) return 0.42;
  if (width < 768) return 0.55;
  if (width < 1024) return 0.78;
  return 1.0;
}

function getHeightMultiplier(width: number) {
  let idealPx: number;
  if (width < 480) idealPx = 22 * 16;
  else if (width < 640) idealPx = 26 * 16;
  else if (width < 768) idealPx = 28 * 16;
  else if (width < 1024) idealPx = 34 * 16;
  else idealPx = 38 * 16;
  const available = window.innerHeight * 0.7;
  if (available >= idealPx) return 1;
  return available / idealPx;
}

function getSlotConfig(totalCards: number, slot: number) {
  if (totalCards >= MAX_VISIBLE) return FAN_POSITIONS[slot];
  const center = totalCards >> 1;
  const distance = totalCards > 1 ? (slot - center) / center : 0;
  const absDistance = Math.abs(distance);
  return {
    rot: distance * 20,
    scale: 1.0 - 0.22 * absDistance * absDistance,
    x: distance * 20,
    y: absDistance * absDistance * 5.0,
    zIndex: 10 - Math.abs(slot - center),
  };
}

export default function PersonaFanCarousel({ personas, trigger = true }: { personas: PersonaItem[]; trigger?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const hasEntered = useRef(false);
  const directionRef = useRef<"left" | "right" | null>(null);
  const prevVisible = useRef<Set<number>>(new Set());

  const totalCards = personas.length;
  const needsPagination = totalCards > MAX_VISIBLE;
  const [centerIndex, setCenterIndex] = useState(needsPagination ? HALF : totalCards >> 1);

  const getVisibleMap = useCallback((center: number) => {
    const map = new Map<number, number>();
    if (!needsPagination) {
      personas.forEach((_, i) => map.set(i, i));
      return map;
    }
    for (let slot = 0; slot < MAX_VISIBLE; slot++) {
      map.set(((center + slot - HALF) % totalCards + totalCards) % totalCards, slot);
    }
    return map;
  }, [totalCards, needsPagination, personas]);

  const cycle = useCallback((direction: "left" | "right") => {
    if (isAnimating.current || !needsPagination) return;
    isAnimating.current = true;
    directionRef.current = direction;
    setCenterIndex(prev =>
      direction === "right" ? (prev + 1) % totalCards : (prev - 1 + totalCards) % totalCards
    );
  }, [totalCards, needsPagination]);

  useEffect(() => {
    if (!trigger && !hasEntered.current) return;
    const container = containerRef.current;
    if (!container || !totalCards) return;

    const cardElements = Array.from(container.querySelectorAll<HTMLElement>(".fan-card"));
    if (!cardElements.length) return;

    const visibleMap = getVisibleMap(centerIndex);
    const previouslyVisible = prevVisible.current;
    const direction = directionRef.current;
    const isFirstMount = !hasEntered.current;
    const multiplier = getResponsiveMultiplier(window.innerWidth);
    const hMult = getHeightMultiplier(window.innerWidth);
    const slotCount = needsPagination ? MAX_VISIBLE : totalCards;
    const config = (slot: number) => getSlotConfig(slotCount, slot);

    if (isFirstMount) isAnimating.current = true;

    let completedCount = 0;
    const visibleCount = visibleMap.size;
    const onCardDone = () => {
      if (++completedCount >= visibleCount) {
        isAnimating.current = false;
        if (isFirstMount) hasEntered.current = true;
      }
    };

    cardElements.forEach((card, cardIndex) => {
      const slot = visibleMap.get(cardIndex);
      const wasVisible = previouslyVisible.has(cardIndex);

      if (slot !== undefined) {
        const { x, y, rot, scale, zIndex } = config(slot);
        const target = { x: `${x * multiplier}rem`, y: `${y * hMult}rem`, rotation: rot, scale, opacity: 1, zIndex };

        if (isFirstMount) {
          gsap.set(card, { x: 0, y: `${10 * hMult}rem`, rotation: 0, scale: 0.5, opacity: 0 });
          gsap.to(card, { ...target, duration: 1.2, ease: "elastic.out(1.05,.78)", delay: 0.2 + slot * 0.06, onComplete: onCardDone });
        } else if (!wasVisible) {
          const enterX = direction === "right" ? 40 : -40;
          gsap.set(card, { x: `${enterX}rem`, y: `${y * hMult}rem`, rotation: direction === "right" ? 30 : -30, scale: 0.5, opacity: 0 });
          gsap.to(card, { ...target, duration: 0.6, ease: "power2.out", onComplete: onCardDone });
        } else {
          gsap.to(card, { ...target, duration: 0.5, ease: "power2.out", onComplete: onCardDone });
        }
      } else if (wasVisible) {
        const exitX = direction === "right" ? -40 : 40;
        gsap.to(card, { x: `${exitX}rem`, opacity: 0, scale: 0.5, rotation: direction === "right" ? -30 : 30, duration: 0.4, ease: "power2.in", zIndex: 0 });
      } else if (isFirstMount) {
        gsap.set(card, { opacity: 0, scale: 0.3, x: 0, y: 0, zIndex: 0 });
      }
    });

    prevVisible.current = new Set(visibleMap.keys());

    // Hover interactions
    const visibleEntries: { el: HTMLElement; slot: number }[] = [];
    cardElements.forEach((el, i) => {
      const slot = visibleMap.get(i);
      if (slot !== undefined) visibleEntries.push({ el, slot });
    });
    visibleEntries.sort((a, b) => a.slot - b.slot);

    let activeSlot: number | null = null;
    let leaveTimer: ReturnType<typeof setTimeout> | null = null;
    const centerSlot = visibleEntries.length >> 1;

    const updateHoverLayout = (hoveredSlot: number | null) => {
      const mult = getResponsiveMultiplier(window.innerWidth);
      const hM = getHeightMultiplier(window.innerWidth);
      visibleEntries.forEach(({ el, slot }) => {
        const base = config(slot);
        let targetX = base.x * mult;
        let targetY = base.y * hM;
        let targetRot = base.rot;
        let targetScale = base.scale;
        let delay = 0;

        if (hoveredSlot !== null) {
          const distance = Math.abs(slot - hoveredSlot);
          delay = distance * 0.02;
          if (slot === hoveredSlot) {
            targetY -= 2.5 * hM;
            targetScale *= 1.08;
          } else {
            const normalized = centerSlot > 0 ? (slot - centerSlot) / centerSlot : 0;
            const pushStrength = 8 * (1 - Math.abs(normalized)) * (1 + 0.2 * Math.max(0, 3 - distance));
            if (slot < hoveredSlot) { targetX -= pushStrength * mult; targetRot -= 3 / (distance + 1); }
            else { targetX += pushStrength * mult; targetRot += 3 / (distance + 1); }
            if (slot === visibleEntries.length - 1 && hoveredSlot < centerSlot) targetY -= 1 * hM;
            if (slot === 0 && hoveredSlot > centerSlot) targetY -= 1 * hM;
          }
        } else {
          delay = Math.abs(slot - centerSlot) * 0.02;
        }

        gsap.to(el, { x: `${targetX}rem`, y: `${targetY}rem`, rotation: targetRot, scale: targetScale, duration: 0.5, delay, ease: "elastic.out(1,.75)", overwrite: "auto" });
        gsap.set(el, { zIndex: base.zIndex });
      });
    };

    const enterHandlers = visibleEntries.map(({ el, slot }) => {
      const handler = () => {
        if (isAnimating.current) return;
        if (leaveTimer) { clearTimeout(leaveTimer); leaveTimer = null; }
        if (activeSlot !== slot) { activeSlot = slot; updateHoverLayout(slot); }
      };
      el.addEventListener("mouseenter", handler);
      return { el, handler };
    });

    const onMouseLeave = () => {
      if (isAnimating.current) return;
      if (leaveTimer) clearTimeout(leaveTimer);
      leaveTimer = setTimeout(() => { activeSlot = null; updateHoverLayout(null); }, 50);
    };
    container.addEventListener("mouseleave", onMouseLeave);

    const onResize = () => { if (!isAnimating.current) updateHoverLayout(activeSlot); };
    window.addEventListener("resize", onResize);

    return () => {
      enterHandlers.forEach(({ el, handler }) => el.removeEventListener("mouseenter", handler));
      container.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
      if (leaveTimer) clearTimeout(leaveTimer);
    };
  }, [centerIndex, totalCards, getVisibleMap, needsPagination, trigger]);

  if (!totalCards) return null;

  const chevron = (dir: "left" | "right") => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points={dir === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6"} />
    </svg>
  );

  return (
    <div className="w-full">
      {/* Fan stage */}
      <div
        ref={containerRef}
        className="relative w-full overflow-visible"
        style={{ height: `${CARD_H + 10}rem` }}
      >
        {personas.map((persona, index) => {
          const Icon = persona.icon;
          return (
            <div
              key={persona.id}
              className="fan-card absolute"
              style={{
                width: `${CARD_W}rem`,
                height: `${CARD_H}rem`,
                top: "50%",
                left: "50%",
                marginTop: `-${CARD_H / 2}rem`,
                marginLeft: `-${CARD_W / 2}rem`,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(199,161,76,0.18)",
                borderRadius: "var(--radius-md)",
                padding: "1.25rem",
                display: "flex",
                flexDirection: "column",
                backdropFilter: "blur(6px)",
                boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
                cursor: "default",
              }}
            >
              {/* Gold icon */}
              <div style={{ marginBottom: "0.75rem" }}>
                <Icon size={17} style={{ color: "var(--color-gold)" }} strokeWidth={1.75} />
              </div>

              {/* Label */}
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  color: "#FFFFFF",
                  lineHeight: 1.3,
                  letterSpacing: "0.01em",
                  marginBottom: "0.6rem",
                }}
              >
                {persona.label}
              </h3>

              {/* Gold accent rule */}
              <div
                style={{
                  width: "24px",
                  height: "1.5px",
                  background: "var(--color-gold)",
                  opacity: 0.5,
                  marginBottom: "0.6rem",
                  flexShrink: 0,
                }}
              />

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.73rem",
                  color: "rgba(255,255,255,0.48)",
                  lineHeight: 1.6,
                  flex: 1,
                  overflow: "hidden",
                }}
              >
                {persona.problem}
              </p>
            </div>
          );
        })}
      </div>

      {/* Pagination dots — only shown when totalCards > 7 */}
      {needsPagination && (
        <div className="flex items-center justify-center gap-4 mt-4 z-30">
          <button
            onClick={() => cycle("left")}
            aria-label="Previous"
            className="flex items-center justify-center w-10 h-10 rounded-full"
            style={{ border: "1.5px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.55)" }}
          >
            {chevron("left")}
          </button>
          <div className="flex items-center gap-2">
            {personas.map((_, i) => (
              <span
                key={i}
                className="rounded-full transition-all duration-300"
                style={{
                  width: "6px", height: "6px",
                  background: i === centerIndex ? "var(--color-gold)" : "rgba(255,255,255,0.2)",
                  transform: i === centerIndex ? "scale(1.3)" : "scale(1)",
                }}
              />
            ))}
          </div>
          <button
            onClick={() => cycle("right")}
            aria-label="Next"
            className="flex items-center justify-center w-10 h-10 rounded-full"
            style={{ border: "1.5px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.55)" }}
          >
            {chevron("right")}
          </button>
        </div>
      )}
    </div>
  );
}
