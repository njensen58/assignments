import React from 'react';


function UglyThingsDisplay(props){
    const mappedThings = props.uglyThings.map(thing => {
        return(
                <h1>{thing.title}</h1>
        )
    })
    return (
        <div>
            {mappedThings}
        </div>
    )
}

export default UglyThingsDisplay;
