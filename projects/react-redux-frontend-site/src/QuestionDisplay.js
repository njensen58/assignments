import React from 'react';
import Question from './Question';


function QuestionDisplay(props){
    const mappedQuestion = props.question.map((question,i) =>{
        return (
            <Question
                question={question.question}
                correct_answer={question.correct_answer}
                incorrect_answers={question.incorrect_answers}
                handleCorrect={props.handleCorrect}
                handleIncorrect={props.handleIncorrect}
                info={props.info}
                key={question + i}
            />
        )
    })

    return (
        <div>
            {mappedQuestion}
        </div>
    )
}

export default QuestionDisplay;
