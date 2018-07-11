import React from 'react'

const AddNewCardForm = props => {
    const { handleSubmit, inputs, handleChange } = props
    return (
        <form onSubmit={ handleSubmit }>
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
                <option default value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
            </select>
            <button>Submit</button>
        </form>
    )
}

export default AddNewCardForm
