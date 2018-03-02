import React from 'react';
import { connect } from 'react-redux';
import { getQuestion } from './redux';
import QuestionDisplay from './QuestionDisplay';


class Game extends React.Component {
    constructor(){
        super();
        this.state = {}
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        if(this.props.question.length === 0){
            this.props.getQuestion();
        }
    }

    handleClick(){
        if(this.props.question.length === 1){
            this.props.question.splice(0, 1);
            this.props.getQuestion();
        }
    }

    render(){
        return (
            <div className="gameContainerDiv">
                <QuestionDisplay
                    question={this.props.question}/>
                <div>
                    <button onClick={this.handleClick}>New Question</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {question: state}
}

export default connect(mapStateToProps,{ getQuestion })(Game);
