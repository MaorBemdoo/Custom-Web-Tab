import React from 'react'
import {AddCircleOutline, Search, WbCloudyOutlined, GitHub, Twitter, LinkedIn, Mail} from '@mui/icons-material'
import { useState } from 'react'

const Header = ({className}) => {
  const [searchInput, setSearchInput] = useState('')
  const [active, setActive] = useState(false)

  const emptyInputHan = (e) => {
    if(searchInput.trim() == ""){
      e.preventDefault()
    };
    setSearchInput('')
  }

  const mouseE = () => {
    setActive(true)
    document.getElementById("q").focus()
  }

  return (
    <header className={className}>
      <nav className={active ? "active" : ""}>
        <form target='_blank' action='https://google.com/search' onMouseEnter={mouseE} onMouseLeave={() => setActive(false)} onSubmit={emptyInputHan}>
          <input type="search" placeholder="Search..." name="q" id="q" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} onFocus={() => setActive(true)}/>
          <button><Search/></button>
        </form>
      </nav>
      <nav>
        <AddCircleOutline/>
        <ul>
          <li><div>
            <a href='https://github.com/MaorBemdoo'><GitHub sx={{fill: "black"}}/></a>
            <a href='https://twitter.com/BemdooMaor'><Twitter sx={{fill: "lightblue"}}/></a>
            <a href='https://www.linkedin.com/in/bemdoo-maor-449698279/'><LinkedIn sx={{fill: "blue"}}/></a>
            <a href='https://mail.google.com/mail/u/0/#inbox'><Mail sx={{fill: "red"}}/></a>
          </div></li>
          <li><a href=''>Link1</a></li>
          <li><a href=''>Link2</a></li>
        </ul>
      </nav>
      <nav>
        <div>
          <WbCloudyOutlined/>
          43&deg;C
        </div>
        <p>Mostly cloudy</p>
      </nav>
    </header>
  )
}

export default Header