import React from 'react'
import { Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import AuthContainer from './components/Auth'
import GameBoard from './components/GameBoard'
import Navbar from './components/Navbar'


const App = props => {
    const { user } = props
    return (
        <div>
            <Navbar />
            { !user.isAuthenticated 
                ? <AuthContainer /> 
                :   <Switch>
                        <Route path="/" component={ GameBoard }/> 
                    </Switch>
            }
        </div>
    )
}

export default connect(state=>({user: state.user}), {})(App)