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
      <div className="card-media" style={{ backgroundImage: `url("${listing.image}")` }}>
        <Link to={`/producto/${listing.id}`} className="card-link" aria-label={listing.title} />
        <span className="condition-tag">{listing.condition}</span>
        <button
          className={`like ${liked ? 'on' : ''}`}
          onClick={() => setLiked(!liked)}
          aria-label={liked ? 'Quitar de favoritos' : 'Guardar en favoritos'}
          aria-pressed={liked}
        >
          <Icon name="heart" size={24} filled={liked} />
        </button>
      </div>
      <div className="card-body">
        <div className="card-row">
          <strong>{listing.title}</strong>
          <span className="rating"><Icon name="star" size={14} filled />{listing.rating}</span>
        </div>
        <p className="muted">{listing.location} · {listing.seller}</p>
        <p className="price-line"><strong>{listing.price} €</strong> <span className="shipping-note">{listing.shipping}</span></p>
      </div>
    </article>
  )
}
