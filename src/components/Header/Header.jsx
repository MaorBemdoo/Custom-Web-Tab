import React from 'react'
import SearchIcon from '@mui/icons-material/Search'

const Header = ({className}) => {
  return (
    <header className={className}>
      <nav>
        <form target='_blank' action='https://google.com/search'>
          <input type="search" name="q" id="q"/>
          <SearchIcon />
        </form>
      </nav>
      <nav>

      </nav>
    </header>
  )
}

export default Header