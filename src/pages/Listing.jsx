import { Link, useParams } from 'react-router-dom'
import Icon from '../icons'
import { listings } from '../data/listings'

export default function Listing() {
  const { id } = useParams()
  const l = listings.find((x) => x.id === Number(id))

  if (!l) {
    return (
      <main className="detail">
        <p className="empty">Producto no encontrado.</p>
        <Link to="/" className="link">Volver al inicio</Link>
      </main>
    )
  }

  return (
    <main className="detail">
      <Link to="/" className="back"><Icon name="back" size={18} /> Volver</Link>
      <h1>{l.title}</h1>
      <div className="detail-meta">
        <span className="rating"><Icon name="star" size={14} filled />{l.rating} · {l.reviews} valoraciones</span>
        <span>{l.location}, España</span>
        <button className="ghost"><Icon name="share" size={16} /> Compartir</button>
      </div>

      <div className="gallery">
        <div className="gallery-main" style={{ backgroundImage: `url("${l.image}")` }} />
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className={`gallery-image gallery-image-${n}`} style={{ backgroundImage: `url("${l.image}")` }} />
        ))}
      </div>

      <div className="detail-cols">
        <section>
          <div className="product-title-row">
            <div>
              <span className="condition-tag detail-condition">{l.condition}</span>
              <h2>{l.title}</h2>
              <p className="muted">{l.location}, España · Vendido por <strong>{l.seller}</strong></p>
            </div>
            <button className="ghost share-mobile"><Icon name="share" size={16} /> Compartir</button>
          </div>
          <hr />
          <p>{l.description}</p>
          <h3>Detalles del producto</h3>
          <ul className="spec-list">
            {l.specs.map((spec) => <li key={spec}><Icon name="check" size={17} />{spec}</li>)}
          </ul>
          <div className="seller-card">
            <div className="seller-avatar">{l.seller.charAt(0).toUpperCase()}</div>
            <div><strong>{l.seller}</strong><p className="muted">Vendedor de la comunidad · {l.reviews} valoraciones</p></div>
            <Icon name="verified" size={21} />
          </div>
        </section>

        <aside className="booking">
          <p className="detail-price"><strong className="price">{l.price} €</strong></p>
          <div className="purchase-info">
            <span><Icon name="package" size={17} /> {l.shipping}</span>
            <span><Icon name="shield" size={17} /> Compra protegida</span>
          </div>
          <button className="primary">Comprar ahora <Icon name="arrow" size={18} /></button>
          <button className="secondary">Enviar mensaje al vendedor</button>
          <p className="muted small">Paga de forma segura. Tu dinero está protegido.</p>
        </aside>
      </div>
    </main>
  )
}
