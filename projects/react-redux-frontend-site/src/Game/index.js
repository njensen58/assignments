import React from 'react';
import { connect } from 'react-redux';
import { getQuestion } from '../redux';
import GameControls from './GameControls';
import QuestionDisplay from './QuestionDisplay';


class Game extends React.Component {
    constructor(){
        super();
        this.state = {
            onCurrentQ: true,
            currentCat: 'general',
            wrong: true,
            randomNum: 0
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleCorrect = this.handleCorrect.bind(this);
        this.handleIncorrect = this.handleIncorrect.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        if(this.props.question.length === 0){
            this.props.getQuestion(this.state.currentCat);
            this.setState({
                randomNum: Math.floor(Math.random() * 4)
            })
        }
    }

    handleClick(){
        if(this.props.question.length === 1){
            this.props.question.splice(0, 1);
                this.setState({
                    onCurrentQ: true,
                    wrong: true,
                    randomNum: Math.floor(Math.random() * 4)
                })
            this.props.getQuestion(this.state.currentCat);
        }
    }

    handleChange(e){
        this.setState({
            currentCat: e.target.value,
            wrong: true,
            randomNum: Math.floor(Math.random() * 4)
        })
        this.props.getQuestion(e.target.value);
    }

    handleCorrect(){
        if(this.state.wrong === true){
            this.setState({
                onCurrentQ: false
            })
        }
    }

    handleIncorrect(currentAnswers){
        if(this.state.wrong === true){
            this.setState({
                wrong: false
            })
        }
    }

    render(){
        return (
            <div className="gameContainerDiv">
                <div className="mobileControls">
                <GameControls
                    info={this.state}
                    handleChange={this.handleChange}
                    handleClick={this.handleClick}
                />
                </div>
                <div className="mobileQuestions">
                <QuestionDisplay
                    question={this.props.question}
                    info={this.state}
                    handleCorrect={this.handleCorrect}
                    handleIncorrect={this.handleIncorrect}
                />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {question: state}
}

export default connect(mapStateToProps, { getQuestion })(Game);
