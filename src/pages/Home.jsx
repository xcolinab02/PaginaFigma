import { useState } from 'react'
import Icon from '../icons'
import ListingCard from '../components/ListingCard'
import { categories, listings } from '../data/listings'

export default function Home({ query }) {
  const [category, setCategory] = useState('all')
  const q = query.trim().toLowerCase()
  const visible = listings.filter(
    (l) =>
      (category === 'all' || l.category === category) &&
      (!q || `${l.title} ${l.location}`.toLowerCase().includes(q))
  )

  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" /> EL MERCADO GAMER, A TU MANERA</span>
          <h1>Tu próxima partida<br />empieza <span>aquí.</span></h1>
          <p>Encuentra ese juego que te falta o dale una segunda vida a tu setup.</p>
          <a href="#productos" className="hero-cta">Explorar productos <span>↘</span></a>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-product"><Icon name="gamepad" size={116} /></div>
          <span className="hero-spark spark-one">✳</span>
          <span className="hero-spark spark-two">✦</span>
          <span className="hero-float">GG<br /><small>GOOD GEAR</small></span>
        </div>
      </section>

      <nav className="categories" aria-label="Categorías">
        {categories.map((c) => (
          <button
            key={c.id}
            className={category === c.id ? 'active' : ''}
            onClick={() => setCategory(c.id)}
          >
            <Icon name={c.icon} />
            <span>{c.label}</span>
          </button>
        ))}
      </nav>

      <section className="section-heading" id="productos">
        <div>
          <p className="eyebrow">SEGUNDA MANO, PRIMERA ELECCIÓN</p>
          <h2>Descubre tu próximo <span>upgrade</span></h2>
        </div>
        <span className="result-count">{visible.length} productos</span>
      </section>

      {visible.length ? (
        <section className="grid">
          {visible.map((l) => <ListingCard key={l.id} listing={l} />)}
        </section>
      ) : (
        <p className="empty">No hay productos que coincidan con tu búsqueda. Prueba con otra categoría o palabra.</p>
      )}
    </main>
  )
}
