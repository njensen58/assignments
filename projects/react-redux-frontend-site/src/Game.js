import React from 'react';
import { connect } from 'react-redux';
import { getQuestion } from './redux';
import QuestionDisplay from './QuestionDisplay';


class Game extends React.Component {
    constructor(){
        super();
        this.state = {
            onCurrentQ: true,
            currentCat: 'general'
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleCorrect = this.handleCorrect.bind(this);
        this.handleIncorrect = this.handleIncorrect.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        if(this.props.question.length === 0){
            this.props.getQuestion(this.state.currentCat);
        }
    }

    handleClick(){
        if(this.props.question.length === 1){
            this.props.question.splice(0, 1);
            this.props.getQuestion(this.state.currentCat);
            this.setState({
                onCurrentQ: true
            })
        }
    }

    handleChange(e){
        this.setState({
            currentCat: e.target.value
        })
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
                <div className="catSelectDiv">

                </div>
                <div className="newQuestionBtn">
                    <div>
                    <p>Select Category</p>
                    <select
                        value={this.state.currentCat}
                        onChange={this.handleChange}
                    >
                        <option value="general">General Knowledge</option>
                        <option value="film">Film</option>
                        <option value="tv">TV</option>
                        <option value="history">History</option>
                        <option value="celeb">Celebrities</option>
                        <option value="geo">Geography</option>
                        <option value="sports">Sports</option>
                    </select>
                    </div>
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
