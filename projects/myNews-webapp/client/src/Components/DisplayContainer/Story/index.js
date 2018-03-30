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
                <div>
                    <h1>{this.props.title}</h1>
                </div>
                <div className="storyImgContainer">
                    <img src={this.props.urlToImage} alt={this.props.title} />
                </div>
                <div className="timeContainer">
                    <span>{moment().format('MMM Do YYYY',this.props.publishedTime)}</span>
                </div>
                <div>
                    <p>{this.props.description}</p>
                </div>
                <div>
                    <a href={this.props.url}>Go to story</a> - <span>{this.props.source}</span>
                </div>
            </div>
        )
    }
}

export default Story;
