import React from 'react';
import config from '../../config';
import Review from './Review';
import SearchForm from './SearchForm';
const axios = require('axios');



class Display extends React.Component {
    constructor(){
        super();
        this.state = {
            reviews: [],
            input: '',
            ratingInput: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        const header = {Authorization: config.TOKEN};
        axios.get('http://shakespeare.podium.co/api/reviews', {headers: header}).then(response => {
            this.setState({reviews: response.data.data})
        })
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){

        const mappedReviews = this.state.reviews
            .filter(review => review.author
            .toLowerCase()
            .slice(0, this.state.input.length) === this.state.input.toLowerCase())
            .filter(review => review.rating.toString().slice(0, this.state.ratingInput.length) === this.state.ratingInput.toString())
            .map(review => {
            return (
                <Review
                    author={review.author}
                    rating={review.rating}
                    date={review.publish_date}
                    id={review.id}
                    key={review.id + review.publish_date}
                />
            )
        })

        return (
            <div className="displayContainer">
                <div>
                    {mappedReviews}
                </div>
                <div className="displayFormContainer">
                    <SearchForm
                        value={this.state.input}
                        handleChange={this.handleChange}
                        ratingInput={this.state.ratingInput}
                    />
                </div>
            </div>
        )
    }
}

export default Display;
