import React from 'react';

const SearchBar = (props) => {
    return (
        <div>
            <input
                type="text"
                onChange={props.onUserInput}
                name="filterText"
                value={props.filterText}
                placeholder="Search"
                style={{
                    padding: '10px',
                    width: '200px',
                    borderRadius: '10px',
                    outline: 'none',
                    fontSize: '16px',
                    letterSpacing: '2px',
                    color: '#333',
                    margin: '20px',
                    textAlign: 'center',
                    fontWeight: 'lighter'
                }}
            />
        </div>
    )
}

export default SearchBar;
