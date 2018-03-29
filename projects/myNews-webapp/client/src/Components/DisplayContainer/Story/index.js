import React from 'react';
const moment = require('moment');


class Story extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return (
            <div className="storyContainer">
                <div className="timeContainer">
                    <p>{moment().format('MMM Do YYYY',this.props.publishedTime)}</p>
                </div>
                <div>
                    <img src={this.props.urlToImage} alt={this.props.title} />
                </div>
                <div>
                    <h1>{this.props.title}</h1>
                </div>
                <p>{this.props.description}</p>
                <a href={this.props.url}>Go to story</a> - <span>{this.props.source}</span>
            </div>
        )
    }
}

export default Story;
