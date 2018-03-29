import React from 'react';

class SearchForm extends React.Component {
    constructor(){
        super();
        this.state = {
            input: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    clearInputs(){
        this.setState({
            input: ''
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.clearInputs();
    }

    render(){
        return (
            <div className="searchFormContainer">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Search"
                        value={this.state.input}
                        onChange={this.handleChange}
                        name="input"
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default SearchForm;
