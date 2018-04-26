import React from 'react';

// I used a ternary on the thumbnail because not all of the results provide one, and it throws and error.
// So i check if there is a thumbnail property, and if so I render the smallThumbnail.

const Book = ({title, author, description, pageCount, thumbnail}) => {
    console.log(thumbnail)
    return (
        <div>
            <h1>{title}</h1>
            <p>{author}</p>
            <p>{description}</p>
            <p>{pageCount}</p>
            {(thumbnail) ?
                <img src={thumbnail.smallThumbnail} alt="" width="50"/> :
                null
            }
        </div>
    )
}

export default Book;
