import React from 'react';


function TodoForm(props){
    return (
        <div>
            <form onSubmit={props.handleSubmit} className="todoForm">
                <label><input
                    type="text"
                    onChange={props.handleChange}
                    value={props.title}
                    placeholder="Title"
                    name="title"
                /></label>
                <label><input
                    type="text"
                    onChange={props.handleChange}
                    value={props.description}
                    placeholder="Description"
                    name="description"
                /></label>
                <label><input
                    type="text"
                    onChange={props.handleChange}
                    value={props.price}
                    placeholder="Price"
                    name="price"
                /></label>
                <label><input
                    type="text"
                    onChange={props.handleChange}
                    value={props.imgUrl}
                    placeholder="ImgUrl"
                    name="imgUrl"
                /></label>
                <button>Submit</button>
            </form>
        </div>
    )
}


export default TodoForm;
