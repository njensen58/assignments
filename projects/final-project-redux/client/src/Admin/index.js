import React from 'react';
import { connect } from 'react-redux';
import { getHigh } from '../redux/highscores';
import Highscore from './Highscore';
import Sidebar from './Sidebar';
import './adminStyles.css';


class Admin extends React.Component{
    constructor(){
        super();
        this.state = {
            highscores: [],
            showSidebar: false
        }
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    componentDidMount(){
        this.props.getHigh().then(() => {
            this.props.highscores.highscores.sort((a, b) => Number(b.score) - Number(a.score))
            this.setState({
                highscores: this.props.highscores.highscores
            })
        })
    }

    toggleSidebar(){
        this.setState(prevState => ({
            showSidebar: !prevState.showSidebar ? true : false
        }))
    }

    render(){
        const mappedScores = this.state.highscores.map(score => {
            return (
                <Highscore
                    key={score._id}
                    name={score.name}
                    score={score.score}
                />
            )
        })

        const sideBar = {
            width: this.state.showSidebar ? '23%' : '20px',
            position: 'fixed',
            height: '100%',
            right: '0',
            backgroundColor: '#333',
            gridColumn: '1',
            transition: 'ease-out .4s'
        }

        return (
            <div className="adminPageContainer">
                <div style={sideBar}>
                { !this.state.showSidebar ?
                    <button onClick={this.toggleSidebar}><i className="ion-ios-arrow-right"></i></button>
                :
                    <button onClick={this.toggleSidebar}><i className="ion-ios-arrow-left"></i></button>
                }
                    <Sidebar
                        toggleSidebar={this.toggleSidebar}
                    />
                </div>
                <div className="highscoresContainer">
                    {mappedScores}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        highscores: state.highscores
    }
}

export default connect(mapStateToProps, { getHigh })(Admin);
