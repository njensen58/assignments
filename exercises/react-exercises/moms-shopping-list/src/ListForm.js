import React from 'react';


function ListForm(props){
        return (
            <div className="itemFormContainer">
                <form onSubmit={props.handleSubmit}>
                    <input
                        type="text"
                        onChange={props.handleChange}
                        value={props.value}/>
                    <button>Add New Item</button>
                </form>
            </div>
        )
    }



export default ListForm;
