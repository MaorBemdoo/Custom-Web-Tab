import React from 'react'

const Header = ({className}) => {
  return (
    <header className={className}>
      <nav>
        <form target='_blank' action='https://google.com/search'>
          <input type="search" name="q" id="q"/>
          <input type="submit"/>
        </form>
      </nav>
      <nav>
        
      </nav>
    </header>
  )
}

export default Header