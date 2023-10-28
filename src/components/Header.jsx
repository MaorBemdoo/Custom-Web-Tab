import React from 'react'
import {AddCircleOutline, Search, GitHub, Twitter, LinkedIn, Mail} from '@mui/icons-material'
import { useState, useEffect, useRef } from 'react'
import axios from "axios"

const Header = ({className}) => {
  const [searchInput, setSearchInput] = useState('')
  const [{activeNav1, activeNav2}, setActive] = useState({activeNav1: false, activeNav2: false})
  const [weather, setWeather] = useState(null)
  const [position, setPosition] = useState(null)
  const [placeholder, setPlaceholder] = useState("Search...")
  const placeholders = [
    "Richest person in the world", "Latest news", "Netnaija", "Best footballer", "Highest paid coding jobs", "ChatGPT", "Bemdoo Maor", "Search..."
  ]

  const emptyInputHan = (e) => {
    if(searchInput.trim() == ""){
      e.preventDefault()
    };
    setSearchInput('')
  }

  const mouseE = () => {
    setActive({activeNav1: true, activeNav2})
    document.getElementById("q").focus()
  }

  useEffect(() => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            // Extract the latitude and longitude from the position object
            setPosition({
              lat: pos.coords.latitude,
              lon: pos.coords.longitude
            });
          },
          (err) => {
            console.log(err.message);
          }
        )
      } else{
        console.log("Your browser does not have geolocation");
      }
  }, [])

  useEffect(() => {
    if (position !== null){
      const options = {
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather',
        params: {
                  lat: position.lat,
                  lon: position.lon,
                  appid: 'e57e805d2df3972b41f79017285ea712',
                  units: 'metric'
                },
      };
      const testFunc = (options) => {
        const link = document.createElement("a")
        link.href = `https://api.openweathermap.org/data/2.5/weather?lat=${options.params.lat}&lon=${options.params.lon}&units=${options.params.units}&appid=${options.params.appid}`
        link.target = "_blank"
        link.click()
      }
      axios.request(options)
        .then(res => {
          console.log(res.data);
          setWeather(res.data)
        })
        .catch(err => {
          console.error(err);
        })
      // testFunc(options)
    }
  }, [position])

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomidx = Math.floor(Math.random() * placeholders.length)
      const randomPlaceholder = placeholders[randomidx]
      if(activeNav1){
        setPlaceholder(randomPlaceholder)
      } else{
        if(placeholder.length >= 7){
          setPlaceholder(randomPlaceholder.slice(0, 7) + "...")
        }
      }
    }, 10000);
    return () => clearInterval(intervalId)
  }, [activeNav1])

  return (
    <>
      <header className={className}>
        <nav className={activeNav1 ? "activeNav1" : ""}>
          <form action='https://google.com/search' onMouseEnter={mouseE} onMouseLeave={() => setActive({activeNav1: false, activeNav2})} onSubmit={emptyInputHan}>
            <input type="search" placeholder={placeholder} name="q" id="q" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} onFocus={() => setActive({activeNav1: true, activeNav2})}/>
            <button><Search/></button>
          </form>
        </nav>
        <nav className={activeNav2 ? "activeNav2": ""}>
          <AddCircleOutline onClick={() => setActive({activeNav1, activeNav2: !activeNav2})}/>
          <ul>
            <li><div>
              <a href='https://github.com/MaorBemdoo'><GitHub sx={{fill: "black"}}/></a>
              <a href='https://twitter.com/BemdooMaor'><Twitter sx={{fill: "lightblue"}}/></a>
              <a href='https://www.linkedin.com/in/bemdoo-maor-449698279/'><LinkedIn sx={{fill: "blue"}}/></a>
              <a href='https://mail.google.com/mail/u/0/#inbox'><Mail sx={{fill: "red"}}/></a>
            </div></li>
            <li><a href='https://api-ninjas.com/api'>List of apis(API ninjas)</a></li>
            <li><a href=''>Link2</a></li>
          </ul>
        </nav>
        <nav>
          <div>
            <img src={weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather && weather.weather[0].main}/>
            {weather && Math.round(weather.main.temp)}&deg;C
          </div>
          <p>{weather && weather.weather[0].description}</p>
        </nav>
      </header>
    </>
  )
}

export default Header