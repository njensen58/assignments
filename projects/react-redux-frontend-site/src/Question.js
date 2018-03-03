import React from 'react';
const decode = require('unescape')

function Question(props){
        const incorrectBtnsStyle = {
            backgroundColor: props.info.onCurrentQ ? '' : 'red'
        }

        const question = decode(props.question).includes('&') ? decode(props.question.replace(/&#039;/gi, "'"), 'all') : decode(props.question)

        const correctAnswer = decode(props.correct_answer).includes('&') ? decode(props.correct_answer.replace(/&#039;/gi, "'"), 'all') : decode(props.correct_answer)

        const incorrectAnswersArr = props.incorrect_answers.map(answer => {
            return (
                <button
                    style={incorrectBtnsStyle}
                    onClick={props.handleIncorrect}
                    key={answer + 1}
                >
                    {decode(answer).includes('&') ? decode(answer.replace(/&#039;/gi, "'"), 'all') : decode(answer)}
                </button>
            )
        })
        const randomNum = Math.floor(Math.random() * 4);
        const correctAnswerBtn = <button onClick={props.handleCorrect}>{correctAnswer}</button>
        incorrectAnswersArr.splice(randomNum, 0, correctAnswerBtn);



        return (
            <div>
                { props.info.onCurrentQ ?
                    <div>
                        <div className="questionDiv">
                            <p className="questionStyle">{question}</p>
                        </div>

                        <div className="answersDiv">
                            {incorrectAnswersArr}
                        </div>
                    </div>
                :
                    <div className="correctAnswerScreen">
                        <img src="https://i.imgur.com/hbgtV4y.gif" alt="Correct Answer" width="500px"></img>
                    </div>
                }
            </div>
        )
    }


export default Question;
