import React from 'react';
const decode = require('unescape')

function Question(props){
    let question = decode(props.question).includes('&') ? decode(props.question.replace(/&#039;/gi, "'"), 'all') : decode(props.question)

    let correctAnswer = decode(props.correct_answer).includes('&') ? decode(props.correct_answer.replace(/&#039;/gi, "'"), 'all') : decode(props.correct_answer)

    let incorrectAnswersArr = props.incorrect_answers.map(answer => {
        return (
            <div className="incorrectAnswerStyle">
                {decode(answer).includes('&') ? decode(answer.replace(/&#039;/gi, "'"), 'all') : decode(answer)}
            </div>
        )
    })

    let randomNum = Math.floor(Math.random() * 4);

    return (
        <div>
            <div className="questionDiv">
                <p className="questionStyle">{question}</p>
            </div>

            <div className="answersDiv">
                <button>x{correctAnswer}</button>
                <button>{incorrectAnswersArr[0]}</button>
                <button>{incorrectAnswersArr[1]}</button>
                <button>{incorrectAnswersArr[2]}</button>
            </div>

        </div>
    )
}

export default Question;
