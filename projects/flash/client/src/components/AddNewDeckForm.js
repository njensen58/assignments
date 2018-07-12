import React from 'react'

const AddNewDeckForm = props => {
    const { handleChange, handleSubmit, inputs } = props
    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                onChange={ handleChange }
                value={ inputs.subject}
                name="subject"
                placeholder="Deck Subject"/>
            <button>Add New Deck</button>
        </form>
    )
}

export default AddNewDeckForm;
