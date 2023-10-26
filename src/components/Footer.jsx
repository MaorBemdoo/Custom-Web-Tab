import React from 'react'
import {useState, useEffect} from 'react'

const Footer = ({className}) => {

    const [quote, setQuote] = useState('')

    return (
        <footer className={className}>
            <p>{quote}</p>
        </footer>
    )
}

export default Footer