export default function ArrowUp() {
  return (
    <svg
      className="arrow"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradiente" x1="0%" y1="0%" x2="250%" y2="0%">
          <stop
            offset="0%"
            style={{ stopColor: 'var(--blue-primary-color)' }}
          />
          <stop
            offset="100%"
            style={{ stopColor: 'var(--blue-secondary-color)' }}
          />
        </linearGradient>
      </defs>
      <path
        d="M12.25 10.25L8 5.75L3.75 10.25"
        stroke="url(#gradiente)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
