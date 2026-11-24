import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../icons'

export function cover(hue) {
  return `linear-gradient(135deg, hsl(${hue} 70% 72%), hsl(${(hue + 40) % 360} 65% 48%))`
}

export default function ListingCard({ listing }) {
  const [liked, setLiked] = useState(false)
  return (
    <article className="card">
      <div className="card-media" style={{ background: cover(listing.hue) }}>
        <Link to={`/alojamiento/${listing.id}`} className="card-link" aria-label={listing.title} />
        <button
          className={`like ${liked ? 'on' : ''}`}
          onClick={() => setLiked(!liked)}
          aria-label="Guardar en favoritos"
          aria-pressed={liked}
        >
          <Icon name="heart" size={24} filled={liked} />
        </button>
      </div>
      <div className="card-body">
        <div className="card-row">
          <strong>{listing.location}</strong>
          <span className="rating"><Icon name="star" size={14} filled />{listing.rating}</span>
        </div>
        <p className="muted">{listing.title}</p>
        <p><strong>{listing.price} €</strong> <span className="muted">noche</span></p>
      </div>
    </article>
  )
}
