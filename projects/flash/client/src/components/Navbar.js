import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = props => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/decks">Decks</Link>
        </div>
    )
}

export default Navbar
