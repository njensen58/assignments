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
        // move to next card in shuffled this.props.cards array
        if(this.state.i < this.props.cards.length - 1){
            this.setState(prevState => ({
                chosenCard: this.props.cards[this.state.i],
                i: prevState.i + 1
            }))
        } else {
        // set counter back to 0 to start at beginning of this.props.cards array again
            this.setState({
                i: 0,
                chosenCard: this.props.cards[this.state.i]
            })
        }
    }

    render() {
        const currentDeck = this.props.decks.find(deck => deck._id === this.props.deck)
        return (
            <div className="cards-container">
                <Toggle render={({ isToggled, toggle }) =>
                    <div>
                    <React.Fragment>
                        <div>
                            <button onClick={ ()=> this.props.backToDecks( this.props.deck ) }>Back to Decks</button>
                            <button onClick={ toggle }>{ isToggled ? "close" : "Add New Card" }</button>
                        </div>
                            <Form
                                 reset
                                 inputs={{ englishWord: '', foreignWord: '', language: '', difficulty: '' }}
                                 render={ props => <AddNewCardForm {...props} isToggled={ isToggled } toggle={ toggle}/> }
                                 submit={ inputs => this.handleAddCard( inputs ) }
                                 isToggled={ isToggled }
                            />
                    </React.Fragment>
                    <h1>{ currentDeck.subject }</h1>
                    <Card 
                        {...this.state.chosenCard } 
                        generateCard={ this.generateCard } 
                        i={this.state.i}
                        currentDeck={ currentDeck }/>
                    </div>
                }/>  
            </div>
        )
    }
}

// { this.props.cards.map(card => <Card key={card._id} {...card} />) }

export default withRouter(connect(state=>state, { addCard } )(CardContainer))
