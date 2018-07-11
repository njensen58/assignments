import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDecks } from '../redux/decks'
import { getCards } from '../redux/flashcards'
import CardContainer from './CardContainer'
import Toggle from '../shared/Toggle'
import Deck from './Deck'

// Map out the user's decks, when the user clicks a deck, it toggles the cardContainer while calling getCards( id ) of the deck requested.

class DeckContainer extends Component {
    constructor(){
        super();
        this.state = {
            deckChosen: false
        }
    }
    componentDidMount(){
        this.props.getDecks()
    }

    loadCards = id => {
        this.props.getCards( id )
        this.setState({ deckChosen: true })
    }

    render(){
        const { decks } = this.props
        return (
            <div>
                { !this.state.deckChosen
                    ?   <div>
                            <h2>Your Decks</h2>
                            { decks.map(deck => <Deck {...deck} key={ deck._id } loadCards={ this.loadCards }/>) }
                        </div>
                    :   <CardContainer />
                }
            </div>
        )
    }
}


export default connect(state=>state, { getDecks, getCards })(DeckContainer)
