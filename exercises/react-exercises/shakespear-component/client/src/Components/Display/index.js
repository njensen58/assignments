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

    handleSort = () => {
        this.setState(prevState => ({
            reviews: prevState.reviews.sort((a, b) => b.rating - a.rating)
        }))
    }

    render(){

        const mappedReviews = this.state.reviews
            .filter(review => review.author
            .toLowerCase()
            .slice(0, this.state.input.length) === this.state.input.toLowerCase())
            .filter(review =>
                this.state.ratingInput.length > 0 ?
                review.rating.toString().slice(0, 1) === this.state.ratingInput.toString()
                :
                review.rating)
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
                        handleSort={this.handleSort}
                    />
                </div>
            </div>
        )
    }
}

export default Display;
