// Minimal line icons, drawn on a 24×24 grid with a thin stroke
const paths = {
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V5l8-2v18M12 21V9l8 2v10M2 21h20" />
      <path d="M7 8h2M7 12h2M7 16h2M15 14h2M15 17h2" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </>
  ),
  seal: (
    <>
      <circle cx="12" cy="10" r="6" />
      <path d="m9 15-1.5 6L12 19l4.5 2L15 15" />
      <path d="m9.5 10 1.8 1.8L15 8.2" />
    </>
  ),
  home: (
    <>
      <path d="M3 11 12 4l9 7" />
      <path d="M5 10v10h14V10M10 20v-6h4v6" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="m7 15 4-4 3 3 6-7" />
    </>
  ),
};

function Icon({ name, className = 'h-6 w-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export default Icon;
