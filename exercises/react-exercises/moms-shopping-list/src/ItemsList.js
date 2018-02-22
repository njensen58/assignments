import React from 'react';
import Item from './Item';

class ItemList extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(){
        
    }

    render(){
        const mappedItems = this.props.itemsArr.map((item, i) => {
            return (
                <Item value={item} key={item + '-' + i} index={i + 1}/>
            )
        })
        return (
            <div>
                <h1>Shopping List</h1>
                <h2>~ {this.props.value}</h2>
                <div>
                    {mappedItems}
                </div>
            </div>
        )
    }
}


export default ItemList;
