import React from 'react'

const Deck = props => {
    const { subject, _id, loadCards } = props
    return (
        <div className="deck-container">
            <h3>{ subject[0].toUpperCase() + subject.slice(1) }</h3>
            <button onClick={ ()=> loadCards( _id ) }>Load Deck</button>
        </div>
    )
}

export default Deck
