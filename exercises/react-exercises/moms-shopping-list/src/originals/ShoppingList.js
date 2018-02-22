import React from 'react';
import ListForm from './ListForm';
import ItemsList from './ItemsList';

class ShoppingList extends React.Component {
    constructor(){
        super();
        this.state = {
            value: '',
            items: []
        }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.state.value !== ''){
            this.setState((prevState)=> ({
                value: '',
                items: [...prevState.items, prevState.value]
            }))
        }
    }

    handleChange(e){
        this.setState({
            value: e.target.value
        })
    }

    render(){
        return (
            <div>
                <div>
                    <ListForm
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                        value={this.state.value}
                    />
                </div>
                <div>
                    <ItemsList
                        itemsArr={this.state.items}
                        value={this.state.value}
                    />
                </div>
            </div>
        )
    }
}



export default ShoppingList
;
