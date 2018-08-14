import React from 'react'
import { Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import AuthContainer from './components/Auth'
import GameBoard from './components/GameBoard'
import Navbar from './components/Navbar'
import HighScores from './components/HighScores'
import Stats from './components/Stats'

const App = props => {
    const { user } = props
    return (
        <div>
            <Navbar />
            { !user.isAuthenticated 
                ? <AuthContainer /> 
                :   <Switch>
                        <Route exact path="/" component={ GameBoard }/> 
                        <Route path="/highscores" component={ HighScores }/>
                        <Route path="/stats" component={ Stats }/>
                    </Switch>
            }
        </div>
    )
}

export default connect(state=>({user: state.user}), {})(App)