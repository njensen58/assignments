import React from 'react';
import { connect } from 'react-redux';
import { getQuestion } from './redux';
import QuestionDisplay from './QuestionDisplay';


class Game extends React.Component {
    constructor(){
        super();
        this.state = {
            onCurrentQ: true
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleCorrect = this.handleCorrect.bind(this);
        this.handleIncorrect = this.handleIncorrect.bind(this);
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
            this.setState({
                onCurrentQ: true
            })
        }
    }

    handleCorrect(){
        this.setState({
            onCurrentQ: false
        })
    }

    handleIncorrect(){

    }

    render(){
        return (
            <div className="gameContainerDiv">
                <div className="newQuestionBtn">
                    <button onClick={this.handleClick}>New Question</button>
                </div>
                <QuestionDisplay
                    question={this.props.question}
                    info={this.state}
                    handleCorrect={this.handleCorrect}
                    handleIncorrect={this.handleIncorrect}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {question: state}
}

export default connect(mapStateToProps,{ getQuestion })(Game);
