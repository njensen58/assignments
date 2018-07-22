import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDecks, addDeck } from '../redux/decks'
import { getCards, resetCards } from '../redux/flashcards'
import CardContainer from './CardContainer'
import AddNewDeckForm from './AddNewDeckForm'
// import Toggle from '../shared/Toggle'
import Form from '../shared/Form'
import Deck from './Deck'


class DeckContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            deckChosen: false,
            deckID: ''
        }
    }

    componentDidMount(){
        // Grab the new deck if one is not chosen, or reload current chosen deck
        !this.state.deckChosen && this.props.getDecks()
        //this.props.cards.length > 0 && this.setState({ deckChosen: true })
    }

    loadCards = deckID => {
        // Only get a new deck if a different deck is chosen
        if(deckID !== this.state.deckID){
            this.deckID = deckID
            this.props.resetCards()
            this.props.getCards( deckID )
            this.setState({ deckChosen: true })
        } else {
            this.props.history.push('/decks')
            this.setState({ deckChosen: true })
        }
    }

    backToDecks = id => {
        this.setState({
            deckChosen: false,
            deckID: id
        })
    }

    render(){
        const { decks } = this.props
        return (
            <div className="decks-container">
                { !this.state.deckChosen
                    ?   <div>
                            <Form
                                reset
                                inputs={{ subject: '' }}
                                render={ props => <AddNewDeckForm {...props}/> }
                                submit={inputs => this.props.addDeck( inputs )}
                            />
                            <div>
                                <h2> Decks </h2>
                                 { decks.map(deck => <Deck {...deck} key={ deck._id } loadCards={ this.loadCards }/>) }
                            </div>
                        </div>

                    :   <CardContainer deck={ this.deckID } backToDecks={ this.backToDecks }/>
                }
            </div>
        )
    }
}


export default connect(state=>state, { getDecks, getCards, resetCards, addDeck })(DeckContainer)
