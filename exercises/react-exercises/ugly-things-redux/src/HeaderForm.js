import React from 'react';


function HeaderForm(props){
    return (
        <div>
            <form
                onSubmit={props.handleSubmit}>
                <div className="formContainer">
                    <input
                        type="text"
                        name="title"
                        value={props.info.title}
                        onChange={props.handleChange}
                        placeholder="Title"
                    />
                    <input
                        type="text"
                        name="imgUrl"
                        value={props.info.imgUrl}
                        onChange={props.handleChange}
                        placeholder="Image URL"
                    />
                    <input
                        type="text"
                        name="description"
                        value={props.info.description}
                        onChange={props.handleChange}
                        placeholder="Description"
                    />
                </div>
                <div className="btnDiv">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default HeaderForm;
