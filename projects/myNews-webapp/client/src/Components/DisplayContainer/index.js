import React from 'react';
import Story from './Story';
import {connect} from 'react-redux';
import {getTopStories, getSearchStories, getSourceStories} from '../../redux/News';
import SearchForm from './SearchForm';
import DrawerUndockedExample from './Drawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './displayStyle.css';

class DisplayContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            stories: [],
            sidebar: false
        }
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.updateDisplay = this.updateDisplay.bind(this);
        this.updateDisplayOnSearch = this.updateDisplayOnSearch.bind(this);
        this.updateDisplayOnSourceSelect = this.updateDisplayOnSourceSelect.bind(this);
    }

    componentDidMount(){
        this.props.getTopStories().then(() => {
            this.setState({
                stories: this.props.news.news
            })
        })
    }

    updateDisplay(){
        this.props.getTopStories().then(() => {
            this.setState({
                stories: this.props.news.news
            })
        })
    }

    updateDisplayOnSearch(userInput){
        this.props.getSearchStories(userInput).then(()=>{
            this.setState({
                stories: this.props.news.news
            })
        })
    }

    updateDisplayOnSourceSelect(source){
        this.props.getSourceStories(source).then(()=>{
            this.setState({
                stories: this.props.news.news
            })
        })
    }

    toggleSidebar(){
        this.setState(prevState => ({
            sidebar: !prevState.sidebar ? true : false
        }))
    }


    render(){
        const mappedStories = this.state.stories.map(story => {
            return (
                <Story
                    author={story.author}
                    title={story.title}
                    description={story.description}
                    url={story.url}
                    urlToImage={story.urlToImage}
                    publishedTime={story.publishedAt}
                    source={story.source.name}
                    key={story.title + story.author}
                />
            )
        })


        let auth = this.props.user.isAuthenticated;

        return (
            <div className="displayDiv">
                <div>
                    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                        <DrawerUndockedExample updateDisplay={this.updateDisplay} updateDisplayOnSourceSelect={this.updateDisplayOnSourceSelect}/>
                    </MuiThemeProvider>
                </div>
                <div className="searchFormDiv">
                    { auth ? <SearchForm updateDisplay={this.updateDisplayOnSearch}/> : null }
                </div>
                <div className="displayContainer">
                    <h1 className="displayHeadTitle">Top Stories</h1>
                    {mappedStories}
                </div>
            </div>
        )
    }
}

export default connect(state=>state, {getTopStories, getSearchStories, getSourceStories})(DisplayContainer);
