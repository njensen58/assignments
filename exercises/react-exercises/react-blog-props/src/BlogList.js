import React from 'react';
import BlogPost from './BlogPost';

const blogPosts = [
  {
    title: "Man must explore, and this is exploration at its greatest",
    subtitle: "Problems look mighty small from 150 miles up",
    author: "Start React",
    date: "September 24, 2018"
  },
  {
    title: "I believe every human has a finite number of heartbeats.  I don't intend to waste any of mine.",
    subtitle: "",
    author: "Start React",
    date: "September 18, 2018"
  },
  {
    title: "Since science has not yet mastered prophecy",
    subtitle: "We predict too much for the next year and yet far too little for the next ten.",
    author: "Start React",
    date: "August 24, 2018"
  },
  {
    title: "Failure is not an option",
    subtitle: "Many say exploration is part of our destiny, but it's actually our duty to future generations.",
    author: "Start React",
    date: "August 24, 2018"
  }
]


class BlogList extends React.Component {
  render(){
    const mappedPosts = blogPosts.map((post, index) => {
      return (
        <BlogPost
          title={post.title}
          subtitle={post.subtitle || ''}
          author={post.author}
          postDate={post.date}
          key={post.title + '-' + index}
        />
      )
    })
    return (
      <div className="blogListContainer">
        {mappedPosts}
      </div>
    )
  }
}

export default BlogList;
