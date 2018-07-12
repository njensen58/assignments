import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addCard } from '../redux/flashcards'
import Form from '../shared/Form'
import Toggle from '../shared/Toggle'
import AddNewCardForm from './AddNewCardForm'
import Card from './Card'

class CardContainer extends Component {
    constructor(){
        super();
        this.state = {
            chosenCard: {
                englishWord: '',
                foreignWord: '',
                language: '',
                deck: '',
                difficulty: '',
                learned: null
            },
            i: 0
        }
    }

    handleAddCard = newCard => {
        newCard.deck = this.props.deck
        this.props.addCard( newCard )
    }

    generateCard = () => {
        if(this.state.i < this.props.cards.length - 1){
            this.setState(prevState => ({
                chosenCard: this.props.cards[this.state.i],
                i: prevState.i + 1
            }))
        } else {
            this.setState({
                i: 0,
                chosenCard: this.props.cards[this.state.i]
            })
        }
    }

    render() {
        const currentDeck = this.props.decks.find(deck => deck._id === this.props.deck)
        return (
            <div>
                <Toggle render={({ isToggled, toggle }) =>
                    <React.Fragment>
                        <button onClick={ ()=> this.props.backToDecks( this.props.deck ) }>Back to Decks</button>
                        <button onClick={ toggle }>{ isToggled ? "close" : "Add New Card" }</button>
                        { isToggled &&
                            <Form
                                 reset
                                 inputs={{ englishWord: '', foreignWord: '', language: '', difficulty: '' }}
                                 render={ props => <AddNewCardForm {...props}/> }
                                 submit={ inputs => this.handleAddCard( inputs ) }
                            />
                        }
                    </React.Fragment>
                }/>
                <button onClick={ this.generateCard }>New Card</button>
                <h1>{ currentDeck.subject }</h1>
                <Card {...this.state.chosenCard } />
            </div>
        )
    }
}

// { this.props.cards.map(card => <Card key={card._id} {...card} />) }

export default withRouter(connect(state=>state, { addCard } )(CardContainer))
