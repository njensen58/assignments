import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'
import DeckContainer from './components/DeckContainer'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'

const App = props => {
    return (
        <div>
            <Navbar />
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route path="/decks" component={ DeckContainer } />
                </Switch>
            <Footer />
        </div>
    )
}

export default withRouter(connect(state=>state, {} )(App))
