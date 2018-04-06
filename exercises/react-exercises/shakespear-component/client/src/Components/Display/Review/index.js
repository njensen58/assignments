import React from 'react';
import config from '../../../config';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import moment from 'moment';
import FaStar from 'react-icons/lib/fa/star';
import axios from 'axios';

class Review extends React.Component {
    constructor(){
        super();
        this.state = {
            reviewBody: ''
        }
    }

    componentDidMount(){
        const header = {Authorization: config.TOKEN};
        axios.get(`http://shakespeare.podium.co/api/reviews/${this.props.id}`, {headers: header}).then(response => {
            this.setState({
                reviewBody: response.data.data.body
            })
        })
    }


    render(){

        const myPaper = {
            margin: '10px',
            padding: '10px'
        }

        return (
            <MuiThemeProvider>
                <Paper zDepth={2} style={myPaper}>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <span>{moment().format('MMM Do YYYY', this.props.date)}</span>
                    </div>
                    <div style={{display: 'inline-block'}}>
                        <h1 style={{fontWeight: '300', letterSpacing: '1px'}}>{this.props.author}</h1>
                    </div>
                    <span><FaStar style={{color: 'gold', paddingRight: '5px'}}/>{this.props.rating}</span>
                    <div>
                        <p>{this.state.reviewBody}</p>
                    </div>
                </Paper>
            </MuiThemeProvider>
        )
    }
}

export default Review;
