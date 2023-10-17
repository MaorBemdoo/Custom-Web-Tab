import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'

const Header = ({className}) => {
  const [searchInput, setSearchInput] = useState('')
  const [active, setActive] = useState(false)

  return (
    <header className={className}>
      <nav className={active ? "active" : ""}>
        <form target='_blank' action='https://google.com/search' onFocus={() => setActive(true)} onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
          <input type="search" placeholder="Search..." name="q" id="q" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
          <button><SearchIcon/></button>
        </form>
      </nav>
      <nav>

      </nav>
    </header>
  )
}

export default Header