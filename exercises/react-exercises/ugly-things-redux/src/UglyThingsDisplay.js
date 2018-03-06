import React from 'react';
import { connect } from 'react-redux';
import UglyThing from './UglyThing';


function UglyThingsDisplay(props){
    let mappedEntries = props.entries.map((entry, i) => {
        const imgStyle = {
            backgroundImage: `url(${entry.imgUrl})`,
            backgroundSize: 'cover',
            width: '250px',
            height: '250px',
            borderRadius: '5px'
        }
        return (
            <UglyThing
                title={entry.title}
                description={entry.description}
                imgStyle={imgStyle}
                key={entry.title + '-' + i}
                handleImgRemove={props.handleImgRemove}
                id={entry + '-' + i}
            />
        )
    });

    return (
        <div className="thingsDisplayContainer">
            {mappedEntries}
        </div>
    )
}

export default connect(state=>state, {})(UglyThingsDisplay);
