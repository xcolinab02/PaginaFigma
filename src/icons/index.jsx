// Todos los iconos de la interfaz viven aquí.
// Para usar los tuyos (p. ej. exportados de Inkscape): importa el SVG como
// componente o pega su <path> en el objeto `paths` con el mismo nombre.
// Los iconos usan currentColor, así que heredan el color del texto.
const paths = {
  logo: <path d="M12 3c-2 4-5 7-5 11a5 5 0 0 0 10 0c0-4-3-7-5-11Z" />,
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
