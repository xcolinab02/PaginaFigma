import { Link } from 'react-router-dom'
import Icon from '../icons'

export default function Header({ query, onQuery }) {
  return (
    <header className="header">
      <Link to="/" className="brand">
        <Icon name="logo" size={30} filled />
        <span>stayly</span>
      </Link>

      <form className="searchbar" onSubmit={(e) => e.preventDefault()}>
        <input
          aria-label="Buscar destino"
          placeholder="Busca un destino o alojamiento"
          value={query}
          onChange={(e) => onQuery(e.target.value)}
        />
        <button type="submit" aria-label="Buscar"><Icon name="search" size={18} /></button>
      </form>

      <div className="header-actions">
        <button className="ghost">Pon tu casa en Stayly</button>
        <button className="ghost round" aria-label="Idioma"><Icon name="globe" size={18} /></button>
        <button className="profile" aria-label="Menú de usuario">
          <Icon name="menu" size={18} />
          <Icon name="user" size={26} />
        </button>
      </div>
    </header>
  )
}
