const skills = [
  "Performance Science",
  "Sports Rehabilitation",
  "Sports Nutrition",
  "Endurance Analytics",
  "Return-to-Performance",
  "Injury Prevention",
]

export default function Ticker() {
  const repeated = [...skills, ...skills, ...skills, ...skills]

  return (
    <div className="bg-[#3D7A57] h-11 flex items-center overflow-hidden">
      <div
        className="flex items-center whitespace-nowrap"
        style={{ animation: "tickerSlide 40s linear infinite" }}
      >
        {repeated.map((skill, i) => (
          <span
            key={i}
            className="flex items-center gap-6 px-6 text-white/90 text-[11px] tracking-[0.22em] uppercase"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {skill}
            <span className="text-white/35 text-base leading-none">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
