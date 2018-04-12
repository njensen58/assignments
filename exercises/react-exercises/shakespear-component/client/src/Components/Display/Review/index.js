import React from 'react';
import config from '../../../config';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import moment from 'moment';
import FaStar from 'react-icons/lib/fa/star';
import axios from 'axios';
import Stars from './Stars';

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
            margin: '10px 10px',
            padding: '5px 10%'
        }

        return (
            <MuiThemeProvider>
                <Paper zDepth={2} style={myPaper} rounded={true}>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <span style={{fontSize: '13px'}}>
                            {moment().format('MMM Do YYYY', this.props.date)}
                        </span>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <h1 style={{
                                fontWeight: '300',
                                letterSpacing: '1px',
                                marginTop: '5px',
                                borderBottom: '1px solid black',
                                fontSize: '26px'
                            }}>{this.props.author}
                        </h1>
                        <Stars rating={Math.floor(this.props.rating)}/>
                    </div>
                    <div>
                        <p style={{margin: '0 0 10px 0'}}>{this.state.reviewBody}</p>
                    </div>
                </Paper>
            </MuiThemeProvider>
        )
    }
}

export default Review;
