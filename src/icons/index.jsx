// Todos los iconos de la interfaz viven aquí.
// Para usar los tuyos (p. ej. exportados de Inkscape): importa el SVG como
// componente o pega su <path> en el objeto `paths` con el mismo nombre.
// Los iconos usan currentColor, así que heredan el color del texto.
const paths = {
  logo: <path d="M12 3c-2 4-5 7-5 11a5 5 0 0 0 10 0c0-4-3-7-5-11Z" />,
  gamepad: <><path d="M6.5 9h11a4.5 4.5 0 0 1 4.4 5.4l-.5 2.4a2.8 2.8 0 0 1-4.7 1.4l-2-1.8h-5.4l-2 1.8a2.8 2.8 0 0 1-4.7-1.4l-.5-2.4A4.5 4.5 0 0 1 6.5 9Z" /><path d="M8 12v4m-2-2h4m6-1h.01M18 15h.01" /></>,
  plus: <path d="M12 5v14m-7-7h14" />,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  heart: <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" />,
  star: <path d="m12 3 2.7 5.5 6 .9-4.4 4.2 1 6-5.3-2.8L6.7 19.6l1-6L3.3 9.4l6-.9L12 3Z" />,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></>,
  home: <path d="M4 11 12 4l8 7v9H4v-9Z" />,
  beach: <path d="M3 19h18M12 19V9M5 9a7 7 0 0 1 14 0H5Z" />,
  mountain: <path d="m3 19 6-11 4 7 3-4 5 8H3Z" />,
  pool: <path d="M3 17c2 0 2-1.5 4.5-1.5S10 17 12 17s2.5-1.5 4.5-1.5S19 17 21 17M8 14V6a2 2 0 0 1 4 0M14 14V6a2 2 0 0 1 4 0" />,
  city: <path d="M4 20V8h6v12M10 20V4h10v16M7 11h0M7 15h0M14 8h2M14 12h2M14 16h2" />,
  cabin: <path d="M3 12 12 4l9 8M6 10v10h12V10M10 20v-5h4v5" />,
  grid: <><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="4" width="6" height="6" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1" /><rect x="14" y="14" width="6" height="6" rx="1" /></>,
  console: <><rect x="3" y="6" width="18" height="12" rx="3" /><path d="M7 10v4m-2-2h4m7-1h.01M18 13h.01" /></>,
  game: <><path d="M7 4h10l4 4v11H3V8l4-4Z" /><path d="M8 4v5h8V4m-5 9v3" /></>,
  controller: <><path d="M6.5 9h11a4.5 4.5 0 0 1 4.4 5.4l-.5 2.4a2.8 2.8 0 0 1-4.7 1.4l-2-1.8h-5.4l-2 1.8a2.8 2.8 0 0 1-4.7-1.4l-.5-2.4A4.5 4.5 0 0 1 6.5 9Z" /><path d="M8 12v4m-2-2h4m6-1h.01M18 15h.01" /></>,
  headphones: <><path d="M3 13v-2a9 9 0 0 1 18 0v2" /><path d="M5 13h2v7H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2Zm14 0h-2v7h2a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2Z" /></>,
  monitor: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8m-4-4v4" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  verified: <><path d="m12 3 2.2 1.2 2.5.1 1.2 2.2 2 1.5-.5 2.5.5 2.5-2 1.5-1.2 2.2-2.5.1L12 18l-2.2-1.2-2.5-.1-1.2-2.2-2-1.5.5-2.5-.5-2.5 2-1.5 1.2-2.2 2.5-.1L12 3Z" /><path d="m9 11 2 2 4-4" /></>,
  package: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="M3 8v9l9 5 9-5V8m-9 5v9" /></>,
  shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></>,
  arrow: <><path d="M5 12h14m-6-6 6 6-6 6" /></>,
  back: <path d="m15 5-7 7 7 7" />,
  share: <path d="M12 15V4m0 0L8 8m4-4 4 4M5 13v7h14v-7" />,
}

export default function Icon({ name, size = 22, filled = false, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  )
}
