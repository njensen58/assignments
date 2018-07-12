import React, { Component } from 'react'

class Card extends Component {
    render(){
        const { englishWord, foreignWord } = this.props
        return (
            <div>
                <h1>{ englishWord }</h1>
                <h1>{ foreignWord }</h1>
            </div>
        )
    }
}

export default Card;
