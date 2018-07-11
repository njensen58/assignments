import React from 'react'

const Deck = props => {
    const { subject, _id, loadCards } = props
    return (
        <div>
            <h3>{ subject }</h3>
            <button onClick={ ()=> loadCards( _id ) }>Load Deck</button>
        </div>
    )
}

export default Deck
