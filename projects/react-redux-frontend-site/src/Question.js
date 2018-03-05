import React from 'react';
const decode = require('unescape')

function Question(props){
        const incorrectBtnsStyle = {
            backgroundColor: props.info.wrong ? '' : '#b24c4c',
            color: props.info.wrong ? '' : 'white'
        }
        const correctBtnStyle = {
            backgroundColor: props.info.wrong ? '' : '#32b274',
            color: props.info.wrong ? '' : 'white'
        }

        const question = decode(props.question).includes('&') ? decode(props.question.replace(/&#039;/gi, "'"), 'all') : decode(props.question)

        const correctAnswer = decode(props.correct_answer).includes('&') ? decode(props.correct_answer.replace(/&#039;/gi, "'"), 'all') : decode(props.correct_answer)

        const incorrectAnswersArr = props.incorrect_answers.map((answer, i) => {
            return (
                <button
                    style={incorrectBtnsStyle}
                    onClick={()=>props.handleIncorrect(currentAnswersArr)}
                    key={answer + '-' + i}
                >
                    {decode(answer).includes('&') ? decode(answer.replace(/&#039;/gi, "'"), 'all') : decode(answer)}
                </button>
            )
        })


        const correctAnswerBtn = <button onClick={props.handleCorrect} style={correctBtnStyle}>{correctAnswer}</button>

        incorrectAnswersArr.splice(props.info.randomNum, 0, correctAnswerBtn)

        let currentAnswersArr = incorrectAnswersArr;

        return (
            <div>
                { props.info.onCurrentQ ?
                    <div>
                        <div className="questionDiv">
                            <p className="questionStyle">{question}</p>
                        </div>

                        <div className="answersDiv">
                            {currentAnswersArr}
                        </div>
                    </div>
                :
                    <div className="correctAnswerScreen">
                        <i className="ion-thumbsup"></i> Correct! <i className="ion-happy-outline"></i>
                    </div>
                }
            </div>
        )
    }


export default Question;
