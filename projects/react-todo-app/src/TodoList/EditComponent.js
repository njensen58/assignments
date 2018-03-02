import React from 'react';


function EditComponent(props){
    return (
        <div>
            <form className="todoContainer">
                <input
                    type="text"
                    name="newTitle"
                    value={props.info.newTitle}
                    onChange={props.handleChange}
                    placeholder="New Title"
                />
                <input
                    type="text"
                    placeholder="New Description"
                    value={props.info.newDescription}
                    onChange={props.handleChange}
                    name="newDescription"
                />
                <input
                    type="number"
                    placeholder="New Price"
                    name="newPrice"
                    value={props.info.newPrice}
                    onChange={props.handleChange}
                />
                <div>
                    <button onClick={props.handleEdit}>Save</button>
                </div>
            </form>
        </div>
    )
}

export default EditComponent;
