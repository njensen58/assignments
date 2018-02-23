import React from 'react';
import PropTypes from 'prop-types';

function BlogPost(props){
  return (
    <div className="blogPostContainer">
      <h3 className="blogTitle">{props.title}</h3>
      <h5 className="blogSubtitle">{props.subtitle}</h5>
      <h6 className="blogCredits">Posted by <span className="blogHighlights">{props.author}</span> on {props.postDate}</h6>
    </div>
  )
}

BlogPost.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.postDate
}

export default BlogPost;
