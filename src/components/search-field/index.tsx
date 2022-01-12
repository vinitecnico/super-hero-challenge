import React, { useState, useRef } from 'react'
import { useParams, useNavigate   } from 'react-router-dom'
import searchIcon from '../../assets/images/search.svg'
import './styles.scss'

const SearchField: React.FC = () => {
  const buttonRef = useRef(null)
  const { heroName } = useParams()
  const navigate = useNavigate();
  const [search, setSearch] = useState(heroName || '')

  const handleChange = (e: any) => {
    setSearch(e.target.value)
  }

//   const handleKeyUp = (e: any) => {
//     if (e.key === "Enter") buttonRef.current && buttonRef?.current?.click();
//   }

  const handleSearch = () => {
    navigate(`/hero-list/${encodeURIComponent(search || '')}`)
  }

  return (
    <section className="search-field">
      <input
        className="search-field-input"
        placeholder="encontre seu personagem favorito"
        type="text"
        value={search}
        // onKeyUp={handleKeyUp}
        onChange={handleChange}
      />
      <button ref={buttonRef} onClick={handleSearch} className="search-field-button" disabled={!search}>
        <img src={searchIcon} alt="Buscar herói" title="Buscar herói" />
      </button>
    </section>
  )
}

export default SearchField
