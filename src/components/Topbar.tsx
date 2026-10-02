import { useEffect, useState } from 'react'
import { announcements } from '../data/content'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function Topbar() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % announcements.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <button
          type="button"
          className="topbar__arrow"
          aria-label="Aviso anterior"
          onClick={() =>
            setIndex((current) => (current - 1 + announcements.length) % announcements.length)
          }
        >
          <FaChevronLeft />
        </button>
        <p className="topbar__message" key={index} aria-live="polite">
          {announcements[index]}
        </p>
        <button
          type="button"
          className="topbar__arrow"
          aria-label="Próximo aviso"
          onClick={() => setIndex((current) => (current + 1) % announcements.length)}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  )
}

export default Topbar
