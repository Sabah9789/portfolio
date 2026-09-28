

export function ContourArt({ className = "" }: { className?: string }) {
  const rings = Array.from({ length: 11 }, (_, i) => i);
  return (
    <svg
      viewBox="0 0 600 700"
      fill="none"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <g stroke="currentColor" strokeWidth="0.6" opacity="0.5">
        {rings.map((i) => (
          <path
            key={`a${i}`}
            d={`M ${120 - i * 9} ${250 + i * 6}
                C ${150 - i * 10} ${150 - i * 12}, ${330 + i * 14} ${120 - i * 10}, ${380 + i * 16} ${250 - i * 4}
                C ${430 + i * 14} ${370 + i * 12}, ${300 + i * 6} ${470 + i * 14}, ${200 - i * 6} ${430 + i * 10}
                C ${130 - i * 10} ${400 + i * 8}, ${100 - i * 8} ${330 + i * 6}, ${120 - i * 9} ${250 + i * 6} Z`}
          />
        ))}
      </g>
      <g stroke="currentColor" strokeWidth="0.5" opacity="0.28">
        {rings.slice(0, 7).map((i) => (
          <ellipse
            key={`b${i}`}
            cx={420}
            cy={560}
            rx={40 + i * 22}
            ry={26 + i * 14}
            transform={`rotate(-18 420 560)`}
          />
        ))}
      </g>
      <g stroke="currentColor" strokeWidth="0.4" opacity="0.2">
        <line x1="0" y1="140" x2="600" y2="140" />
        <line x1="0" y1="420" x2="600" y2="420" />
        <line x1="160" y1="0" x2="160" y2="700" />
        <line x1="440" y1="0" x2="440" y2="700" />
      </g>
      <path
        className="trace-line"
        d="M 40 640 C 180 560, 190 380, 300 300 C 400 228, 470 250, 560 120"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeDasharray="6 7"
        opacity="0.8"
      />
      <g fill="currentColor">
        {[
          [300, 300],
          [188, 396],
          [470, 246],
          [420, 560],
        ].map(([cx, cy]) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="9" className="marker-pulse" opacity="0.2" />
            <circle cx={cx} cy={cy} r="2.6" />
          </g>
        ))}
      </g>
    </svg>
  );
}

export function GridField({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`grid-paper ${className}`} />;
}

export function InstallationMap({ className = "" }: { className?: string }) {
  const lat = [80, 180, 280, 380, 480];
  const lon = [120, 320, 520, 720, 920, 1120];
  return (
    <svg
      viewBox="0 0 1240 560"
      fill="none"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke="currentColor" strokeWidth="0.4" opacity="0.22">
        {lat.map((y) => (
          <line key={`y${y}`} x1="0" y1={y} x2="1240" y2={y} />
        ))}
        {lon.map((x) => (
          <line key={`x${x}`} x1={x} y1="0" x2={x} y2="560" />
        ))}
      </g>
      <g stroke="currentColor" strokeWidth="0.6" opacity="0.45" className="drift-slow">
        {Array.from({ length: 9 }, (_, i) => (
          <path
            key={i}
            d={`M ${-40 + i * 6} ${200 + i * 16}
                C ${220 + i * 18} ${90 + i * 10}, ${520 - i * 12} ${320 + i * 12}, ${760 + i * 14} ${210 + i * 10}
                C ${940 + i * 10} ${140 + i * 8}, ${1080} ${260 + i * 14}, ${1280} ${180 + i * 12}`}
          />
        ))}
      </g>
      <path
        className="trace-line"
        d="M 120 470 L 330 360 L 520 392 L 730 240 L 940 286 L 1120 150"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.85"
      />
      <g fill="currentColor">
        {[
          [120, 470],
          [330, 360],
          [520, 392],
          [730, 240],
          [940, 286],
          [1120, 150],
        ].map(([cx, cy]) => (
          <g key={`${cx}`}>
            <circle cx={cx} cy={cy} r="12" className="marker-pulse" opacity="0.18" />
            <circle cx={cx} cy={cy} r="3" />
          </g>
        ))}
      </g>
      <g
        fill="currentColor"
        opacity="0.55"
        fontSize="9"
        letterSpacing="2"
        fontFamily="var(--font-sans)"
      >
        <text x="128" y="494">31°00′N</text>
        <text x="738" y="226">LAYER 02 — ROUTES</text>
        <text x="1010" y="304">SAMPLE Ø 248</text>
      </g>
    </svg>
  );
}
