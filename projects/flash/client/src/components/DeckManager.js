import React, { Component } from 'react'
import { getDecks } from '../redux/decks'
import { connect } from 'react-redux'

class DeckManager extends Component {
    componentDidMount(){
        this.props.getDecks()
    }
    render(){
        return (
            <div>
                { this.props.decks.map(deck => <div><h3>{ deck.subject }</h3></div>) }
            </div>
        )
    }
}

export default connect(state=>state, { getDecks })(DeckManager)
