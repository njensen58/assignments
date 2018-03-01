import React from 'react';


class TodoComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            isEditing: false,
            newTitle: '',
            newDescription: '',
            newPrice: ''
        }
        this.handleToggleEdit = this.handleToggleEdit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleToggleEdit(){
        this.setState(prevState => {
            return {isEditing: true}
        })
    }

    handleEdit(){
        this.setState(prevState => {
            return {isEditing: false}
        })
        this.props.edit({
            title: this.state.newTitle,
            description: this.state.newDescription,
            price: this.state.newPrice
        }, this.props.info._id)
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        const completed = {
            opacity: this.props.info.completed ? '.2' : '1'
        }

        return (
            <div>
            { this.state.isEditing === false ?
                <div className="todoContainer">
                    <div className="todoTitle">
                        <h1 style={completed}>{this.props.info.title}</h1>
                    </div>
                    <div className="todoDescriptionDiv">
                        <h3 style={completed}>{this.props.info.description}</h3>
                        <p style={completed}>{this.props.info.price}</p>
                    </div>
                    <div className="imgDiv">
                        <img src={this.props.info.imgUrl} className="images" alt={this.props.info.title} style={completed}/>
                    </div>
                    <div>
                        <button onClick={this.handleToggleEdit}>Edit</button>
                    </div>
                    <div className="checkboxDiv">
                        { this.props.info.completed ?
                            <button
                                className="checkboxDiv2"
                                onClick={()=>this.props.handleComplete(this.props.info._id)}>Undo</button>
                        :
                            <button
                                onClick={()=>this.props.handleComplete(this.props.info._id)}>Complete</button>
                        }
                    </div>
                    <div className="delBtnDiv">
                         <button
                             onClick={()=>this.props.deleteTodo(this.props.info._id)}
                             className="delBtn">X</button>
                    </div>
                </div>
            :
                <div>
                    <form className="todoContainer">
                        <input
                            type="text"
                            name="newTitle"
                            value={this.state.newTitle}
                            onChange={this.handleChange}
                            placeholder="New Title"
                        />
                        <input
                            type="text"
                            placeholder="New Description"
                            value={this.state.newDescription}
                            onChange={this.handleChange}
                            name="newDescription"
                        />
                        <input
                            type="number"
                            placeholder="New Price"
                            name="newPrice"
                            value={this.state.newPrice}
                            onChange={this.handleChange}
                        />
                        <div>
                            <button onClick={this.handleEdit}>Save</button>
                        </div>
                    </form>
                </div>
            }
            </div>
        )
    }
}

export default TodoComponent;
