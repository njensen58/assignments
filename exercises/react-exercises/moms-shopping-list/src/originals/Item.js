import React from 'react';

class Item extends React.Component{



    render(){
        return (
            <div>
                <button
                    onClick={this.props.handleDelete.bind(this)}> X
                </button>
                {this.props.index + '. ' + this.props.value}
            </div>
        )
    }
}

export default Item;
