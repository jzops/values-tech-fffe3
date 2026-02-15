export function Logo({ className = 'h-8' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* V mark - bold geometric */}
      <path
        d="M4 8L16 32L28 8"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Dot accent */}
      <circle cx="16" cy="36" r="2.5" fill="#FF6B35" />
      
      {/* Text: values */}
      <text
        x="38"
        y="27"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="22"
        fontWeight="700"
        fill="currentColor"
        letterSpacing="-0.02em"
      >
        values
      </text>
      
      {/* .tech in accent color */}
      <text
        x="118"
        y="27"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="22"
        fontWeight="700"
        fill="#FF6B35"
        letterSpacing="-0.02em"
      >
        .tech
      </text>
    </svg>
  )
}

export function LogoMark({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8 8L20 32L32 8"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="20" cy="36" r="2.5" fill="#FF6B35" />
    </svg>
  )
}
