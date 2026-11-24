// Datos de ejemplo. Sustitúyelos por los tuyos.
// `hue` genera el degradado de la imagen; cambia `image` por una URL para usar fotos.
export const categories = [
  { id: 'all', label: 'Todos', icon: 'home' },
  { id: 'beach', label: 'Playa', icon: 'beach' },
  { id: 'mountain', label: 'Montaña', icon: 'mountain' },
  { id: 'pool', label: 'Piscina', icon: 'pool' },
  { id: 'city', label: 'Ciudad', icon: 'city' },
  { id: 'cabin', label: 'Cabañas', icon: 'cabin' },
]

export const listings = [
  { id: 1, title: 'Casa frente al mar', location: 'Cádiz, España', category: 'beach', price: 140, rating: 4.9, reviews: 212, hue: 200, guests: 6, beds: 3, baths: 2, description: 'Despierta con el sonido de las olas. Terraza amplia, cocina equipada y acceso directo a la playa.' },
  { id: 2, title: 'Cabaña entre pinos', location: 'Navacerrada, España', category: 'cabin', price: 95, rating: 4.8, reviews: 134, hue: 150, guests: 4, beds: 2, baths: 1, description: 'Un refugio de madera con chimenea, rodeado de bosque y senderos para caminar.' },
  { id: 3, title: 'Ático con vistas', location: 'Barcelona, España', category: 'city', price: 180, rating: 4.7, reviews: 98, hue: 20, guests: 3, beds: 1, baths: 1, description: 'Ático luminoso en el centro, con terraza privada y todo a pocos minutos a pie.' },
  { id: 4, title: 'Villa con piscina', location: 'Marbella, España', category: 'pool', price: 260, rating: 4.95, reviews: 301, hue: 175, guests: 8, beds: 4, baths: 3, description: 'Villa de diseño con piscina infinita, jardín mediterráneo y zona de barbacoa.' },
  { id: 5, title: 'Chalet alpino', location: 'Sierra Nevada, España', category: 'mountain', price: 120, rating: 4.6, reviews: 76, hue: 230, guests: 5, beds: 3, baths: 2, description: 'A pie de pista, con sauna y salón acogedor para después de esquiar.' },
  { id: 6, title: 'Estudio junto a la playa', location: 'Valencia, España', category: 'beach', price: 85, rating: 4.5, reviews: 59, hue: 190, guests: 2, beds: 1, baths: 1, description: 'Estudio sencillo y luminoso a dos minutos del paseo marítimo.' },
  { id: 7, title: 'Loft industrial', location: 'Madrid, España', category: 'city', price: 110, rating: 4.7, reviews: 143, hue: 330, guests: 4, beds: 2, baths: 1, description: 'Loft de techos altos en el corazón de la ciudad, rodeado de cafés y galerías.' },
  { id: 8, title: 'Casa rural con piscina', location: 'Ronda, España', category: 'pool', price: 130, rating: 4.8, reviews: 87, hue: 45, guests: 6, beds: 3, baths: 2, description: 'Casa de piedra con piscina y vistas al valle, ideal para desconectar.' },
]
