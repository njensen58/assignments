import React from 'react';

function FormComponent(props){
    return (
        <div className="todoFormDiv">
            <form onSubmit={props.handleSubmit} className="todoForm" autoComplete="off">
                <label><input
                    type="text"
                    onChange={props.handleChange}
                    value={props.data.title}
                    placeholder="Title"
                    name="title"
                /></label>
                <label><input
                    type="text"
                    onChange={props.handleChange}
                    value={props.data.description}
                    placeholder="Description"
                    name="description"
                /></label>
                <label><input
                    type="text"
                    onChange={props.handleChange}
                    value={props.data.price}
                    placeholder="Price"
                    name="price"
                /></label>
                <label><input
                    type="text"
                    onChange={props.handleChange}
                    value={props.data.imgUrl}
                    placeholder="ImgUrl"
                    name="imgUrl"
                /></label>
                <div className="submitBtnDiv">
                    <button className="submitBtn">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent;
