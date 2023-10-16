import React from 'react'

const Header = ({className}) => {
  return (
    <header className={className}>
      <nav>
        <form target='_blank'>
          <input type="search"/>
          <input type="submit"/>
        </form>
      </nav>
      <nav></nav>
    </header>
  )
}

export default Header