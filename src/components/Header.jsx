import { Link } from 'react-router-dom'
import Icon from '../icons'

export default function Header({ query, onQuery }) {
  return (
    <header className="header">
      <Link to="/" className="brand">
        <Icon name="gamepad" size={28} />
        <span>pixel<span className="brand-accent">market</span></span>
      </Link>

      <form className="searchbar" onSubmit={(e) => e.preventDefault()}>
        <input
          aria-label="Buscar productos"
          placeholder="Busca juegos, consolas y más..."
          value={query}
          onChange={(e) => onQuery(e.target.value)}
        />
        <button type="submit" aria-label="Buscar"><Icon name="search" size={18} /></button>
      </form>

      <div className="header-actions">
        <button className="ghost sell-button"><Icon name="plus" size={17} /> Vender</button>
        <button className="ghost round" aria-label="Favoritos"><Icon name="heart" size={19} /></button>
        <button className="profile" aria-label="Menú de usuario">
          <Icon name="menu" size={18} />
          <Icon name="user" size={26} />
        </button>
      </div>
    </header>
  )
}
