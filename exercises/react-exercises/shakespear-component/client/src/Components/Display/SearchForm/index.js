import React from 'react';


class SearchForm extends React.Component {
    render(){
        return (
            <div>
                <form>
                    <input
                        type="text"
                        onChange={this.props.handleChange}
                        value={this.props.value}
                        placeholder="Search by Name"
                        name="input"
                    />
                    <input type="text"
                        type="number"
                        onChange={this.props.handleChange}
                        value={this.props.ratingInput}
                        name="ratingInput"
                        placeholder="Search by Rating"
                        min="0"
                        max="5"
                    />
                </form>
                <button onClick={this.props.handleSort}>Sort</button>
            </div>
        )
    }
}

export default SearchForm;
