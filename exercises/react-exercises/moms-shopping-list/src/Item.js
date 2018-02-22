import React from 'react';

class Item extends React.Component{
    render(){
        return (
            <div>
                <h4><button onClick={this.props.handleDelete}> X </button>{this.props.index + '. ' + this.props.value}</h4>
            </div>
        )
    }
}

export default Item;
