import React, { Component } from 'react'
import { connect } from 'react-redux'
import { resetCards, addCard } from '../redux/flashcards'
import Form from '../shared/Form'
import AddNewCardForm from './AddNewCardForm'

class CardContainer extends Component {
    componentWillUnmount(){
        this.props.resetCards()
    }

    handleAddCard = newCard => {
        newCard.deck = this.props.cards[0].deck
        this.props.addCard( newCard )
    }

    render(){
        return (
            <div>
                <Form
                    reset
                    inputs={{ englishWord: '', foreignWord: '', language: '', difficulty: '' }}
                    render={ props => <AddNewCardForm {...props}/> }
                    submit={inputs => this.handleAddCard( inputs )}
                />
                {this.props.cards.map(card => <h1 key={card._id}>{ card.englishWord } - { card.foreignWord }</h1>)}
            </div>
        )
    }
}
        // )

export default connect(state=>state, { resetCards, addCard } )(CardContainer)
