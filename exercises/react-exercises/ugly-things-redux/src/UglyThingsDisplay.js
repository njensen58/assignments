import React from 'react';
import { connect } from 'react-redux';
import UglyThing from './UglyThing';


class UglyThingsDisplay extends React.Component {
    render(){
        let mappedEntries = this.props.entries.map((entry, i) => {
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
                    info={this.state}
                    key={entry + '-' + i}
                    handleImgRemove={this.props.handleImgRemove}
                />
            )
        });

        return (
            <div className="thingsDisplayContainer">
                {mappedEntries}
            </div>
        )
    }
}

export default connect(state=>state, {})(UglyThingsDisplay);
