import React from 'react';
import Item from './Item';

class ItemList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: this.props.itemsArr
        }
    this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(id){
        this.setState((prevState) => ({
            items: prevState.items.filter(item => item !== id)
        }))
    }

    render(){
        const mappedItems = this.props.itemsArr.map((item, i) => {
            return (
                <Item
                    value={item}
                    key={item + '-' + i}
                    index={i + 1}
                    handleDelete={this.handleDelete}
                />
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
