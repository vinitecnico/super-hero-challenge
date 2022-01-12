import React from 'react'
import SearchField from '../search-field'
import './styles.scss'

const Header = () => {
  return (
    <header>
      <nav className="col-md-10">
        <SearchField />
      </nav>
    </header>
  )
}

export default Header
