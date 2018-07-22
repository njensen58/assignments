import React, { Component } from 'react'
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
                    <div className="card-face" onClick={ this.toggle }>
                    { !this.state.toggled
                        ?   <div>
                                <span> Tap to flip </span>
                                <h1 onClick={ this.toggle }>{ englishWord }</h1>
                            </div>
                        :   <div>
                                <span> Tap to flip </span>
                                <h1 onClick={ this.toggle }>{ foreignWord }</h1>
                            </div>
                    }
                    </div>
                </Paper>
                <div className="new-cardbtn-container">
                    <button onClick={ this.newCard }>New Card</button>
                </div>
            </React.Fragment>
        )
    }
}

export default Card;
