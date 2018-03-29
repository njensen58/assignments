import React from 'react';
import Story from './Story';
import {connect} from 'react-redux';
import {getTopStories} from '../../redux/TopStories';
import SearchForm from './SearchForm';
import './displayStyle.css';

class DisplayContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            stories: []
        }
    }

    componentDidMount(){
        this.props.getTopStories().then(() => {
            this.setState({
                stories: this.props.topStories
            })
        })
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
            <div>
                <div>
                    { auth ? <SearchForm /> : null }
                </div>
                <h1>Top Stories</h1>
                <div className="displayContainer">
                    {mappedStories}
                </div>
            </div>
        )
    }
}

export default connect(state=>state, {getTopStories})(DisplayContainer);
