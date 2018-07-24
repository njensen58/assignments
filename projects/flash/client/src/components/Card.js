import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper';

class Card extends Component {
    constructor(){
        super()
        this.state = {
            toggled: false
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            toggled: !prevState.toggled
        }))
    }

    newCard = () => {
        this.setState({ toggled: false })
        this.props.generateCard()
    }

    render(){
        const { englishWord, foreignWord } = this.props
        return (
            <React.Fragment>
                <Paper className="card-container" onClick={ this.toggle }>
                    <div className="card-face">
                    { !this.state.toggled
                        ?   <div onClick={ this.toggle }>
                                <span> Tap to flip </span>
                                <h1>{ englishWord }</h1>
                            </div>
                        :   <div onClick={ this.toggle }>
                                <span> Tap to flip </span>
                                <h1>{ foreignWord }</h1>
                            </div>
                    }
                        <p>{ `${this.props.i === 0 ? this.props.cards.length : this.props.i} / ${this.props.cards.length}` }</p>
                    </div>
                </Paper>
                <div className="new-cardbtn-container">
                    <button onClick={ this.newCard }>New Card</button>
                </div>
            </React.Fragment>
        )
    }
}

export default connect(state=>state, {} )(Card);
