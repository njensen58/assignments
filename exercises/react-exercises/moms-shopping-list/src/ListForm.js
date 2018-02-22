import React from 'react';



class ListForm extends React.Component {
    render(){
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input
                        type="text"
                        onChange={this.props.handleChange}
                        value={this.props.value}/>
                    <button>Add New Item</button>
                </form>
            </div>
        )
    }
}


export default ListForm;
