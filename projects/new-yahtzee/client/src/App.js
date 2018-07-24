import React from 'react'
import { Switch, Route} from 'react-router-dom'
import AuthContainer from './components/AuthContainer'
import GameBoard from './components/GameBoard'

const App = () => {
    return (
        <div>
            New Yahtzee
            <Switch>
                <Route exact path="/" component={ AuthContainer }/>
                <Route path="/game" component={ GameBoard }/>
            </Switch>
        </div>
    )
}

export default App