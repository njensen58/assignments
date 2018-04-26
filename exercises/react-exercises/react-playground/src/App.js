import React from 'react';
import Book from './Book';

// I used the node.js native 'fetch' for the api request.  It's just like axios.get, except you have
// to turn the response into JSON by using .json() before you are able to use it.

class App extends React.Component {
    state = {
        data: []
    }

    getData = () => {
        fetch ('https://www.googleapis.com/books/v1/volumes?q=golden&key=AIzaSyA3ib7OFX6-fUqJzf3mHWyit8ZjuXo-AYk')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: res.items
                })
            })
    }

    render(){
        const mappedData = this.state.data.map(book => {
            return (
                <Book
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    description={book.volumeInfo.description}
                    pageCount={book.volumeInfo.pageCount}
                    thumbnail={book.volumeInfo.imageLinks}
                    >
                </Book>
            )
        })
        return (
            <div>
                <h1>ALL THE BOOKS!</h1>
                <button onClick={this.getData}>Get Data</button>
                {mappedData}
            </div>
        )
    }
}

export default App;
