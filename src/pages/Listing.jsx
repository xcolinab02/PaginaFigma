import { Link, useParams } from 'react-router-dom'
import Icon from '../icons'
import { cover } from '../components/ListingCard'
import { listings } from '../data/listings'

export default function Listing() {
  const { id } = useParams()
  const l = listings.find((x) => x.id === Number(id))

  if (!l) {
    return (
      <main className="detail">
        <p className="empty">Alojamiento no encontrado.</p>
        <Link to="/" className="link">Volver al inicio</Link>
      </main>
    )
  }

  return (
    <main className="detail">
      <Link to="/" className="back"><Icon name="back" size={18} /> Volver</Link>
      <h1>{l.title}</h1>
      <div className="detail-meta">
        <span className="rating"><Icon name="star" size={14} filled />{l.rating} · {l.reviews} reseñas</span>
        <span>{l.location}</span>
        <button className="ghost"><Icon name="share" size={16} /> Compartir</button>
      </div>

      <div className="gallery">
        <div className="gallery-main" style={{ background: cover(l.hue) }} />
        {[1, 2, 3, 4].map((n) => (
          <div key={n} style={{ background: cover(l.hue + n * 25) }} />
        ))}
      </div>

      <div className="detail-cols">
        <section>
          <h2>Alojamiento en {l.location}</h2>
          <p className="muted">{l.guests} huéspedes · {l.beds} camas · {l.baths} baños</p>
          <hr />
          <p>{l.description}</p>
        </section>

        <aside className="booking">
          <p><strong className="price">{l.price} €</strong> <span className="muted">noche</span></p>
          <div className="fields">
            <label>Llegada<input type="date" /></label>
            <label>Salida<input type="date" /></label>
          </div>
          <button className="primary">Reservar</button>
          <p className="muted small">Aún no se te cobrará nada</p>
        </aside>
      </div>
    </main>
  )
}
