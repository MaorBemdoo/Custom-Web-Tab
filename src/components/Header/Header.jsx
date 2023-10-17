import React from 'react'
import {Search, WbCloudy} from '@mui/icons-material'
import { useState } from 'react'

const Header = ({className}) => {
  const [searchInput, setSearchInput] = useState('')
  const [active, setActive] = useState(false)

  return (
    <header className={className}>
      <nav className={active ? "active" : ""}>
        <form target='_blank' action='https://google.com/search' onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
          <input type="search" placeholder="Search..." name="q" id="q" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} onFocus={() => setActive(true)}/>
          <button><Search/></button>
        </form>
      </nav>
      <nav>
        <div>
          <WbCloudy/>
          43&deg;C
        </div>
        <p>Mostly cloudy</p>
      </nav>
    </header>
  )
}

export default Header