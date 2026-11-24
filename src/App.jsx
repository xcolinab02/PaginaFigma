import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Listing from './pages/Listing'

export default function App() {
  const [query, setQuery] = useState('')
  return (
    <>
      <Header query={query} onQuery={setQuery} />
      <Routes>
        <Route path="/" element={<Home query={query} />} />
        <Route path="/producto/:id" element={<Listing />} />
        <Route path="/alojamiento/:id" element={<Listing />} />
        <Route path="*" element={<Home query={query} />} />
      </Routes>
      <footer className="footer">© PixelMarket · Compra, vende y vuelve a jugar.</footer>
    </>
  )
}
