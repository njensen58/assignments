import React from 'react'

const AddNewCardForm = props => {
    const { handleSubmit, inputs, handleChange, isToggled, toggle } = props
    const toggleStyle = {
        transform: isToggled ? 'translateX(0px)' : 'translateX(100vw)'
    }

    return (
        <div>
        <form onSubmit={ handleSubmit } className="add-card-form" style={ toggleStyle }>
            <input
                type="text"
                onChange={ handleChange }
                value={ inputs.englishWord }
                name="englishWord"
                placeholder="English Word"/>
            <input
                type="text"
                onChange={ handleChange }
                value={ inputs.foreignWord }
                name="foreignWord"
                placeholder="Foreign Word"/>
            <input
                type="text"
                onChange={ handleChange }
                value={ inputs.language }
                name="language"
                placeholder="Language"/>
            <select name="difficulty" onChange={ handleChange }>
                <option>- Difficulty -</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
            </select>
            <button>Submit</button>
            { isToggled && <button onClick={ toggle }> Cancel </button> }
        </form>
        
        </div>
    )
}

export default AddNewCardForm
