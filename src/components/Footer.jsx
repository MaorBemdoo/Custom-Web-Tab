import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

const Footer = ({className}) => {

    const [quote, setQuote] = useState('')

    useEffect(() => {
        axios.get(
            "https://api.api-ninjas.com/v1/facts",{
            headers: {
                'X-Api-Key': 'Cy+7uXo9HGLpNBQ7gABM1w==8jZVKOP7GuIV73zT'
            }}
        )
            .then(res => {
                console.log(res.data[0].fact);
                setQuote(res.data[0].fact)
            })
            .catch(err => {
                // console.log(err.message);
                setQuote(err.message)
            })
    }, [])

    return (
        <footer className={className}>
            <p>“{quote}”</p>
        </footer>
    )
}

export default Footer