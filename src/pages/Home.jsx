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

      {visible.length ? (
        <section className="grid">
          {visible.map((l) => <ListingCard key={l.id} listing={l} />)}
        </section>
      ) : (
        <p className="empty">No hay alojamientos que coincidan con tu búsqueda.</p>
      )}
    </main>
  )
}
