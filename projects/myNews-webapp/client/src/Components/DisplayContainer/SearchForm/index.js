import React from 'react';
import {connect} from 'react-redux';
import {getSearchStories} from '../../../redux/News'

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
        if(this.state.input.length > 0){
                this.props.updateDisplay(this.state.input);
                this.clearInputs();
            }
        }


    render(){
        return (
            <div className="searchFormContainer">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Search All News"
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

export default connect(state=>state, {getSearchStories})(SearchForm);
