import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'
import DeckContainer from './components/DeckContainer'
import Navbar from './components/Navbar'
import Home from './components/Home'
import DeckManager from './components/DeckManager'


const App = props => {
    return (
        <div>
            <Navbar />
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route path="/decks" component={ DeckContainer } />
                    <Route path="/deckmanager" component={ DeckManager } />
                </Switch>
        </div>
    )
}

export default withRouter(connect(state=>state, {} )(App))
