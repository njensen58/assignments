import React from 'react';
import config from '../../config';
import Review from './Review';
const axios = require('axios');



class Display extends React.Component {
    constructor(){
        super();
        this.state = {
            reviews: []
        }
    }

    componentDidMount(){
        const header = {Authorization: config.TOKEN};
        axios.get('http://shakespeare.podium.co/api/reviews', {headers: header}).then(response => {
            this.setState({reviews: response.data.data})
        })
    }

    render(){

        const mappedReviews = this.state.reviews.map(review => {
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
                    <form>
                        <input type="text"/>
                        <button>Search</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Display;
