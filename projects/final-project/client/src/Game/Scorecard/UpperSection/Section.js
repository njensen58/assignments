import React from 'react';



class Section extends React.Component{
    constructor(){
        super();
        this.state = {
            isSelected: false
        }
        this.handleSelected = this.handleSelected.bind(this);
    }

    handleSelected(){
        this.props.calculateValue();
        this.setState(prevState => ({
            isSelected: prevState.isSelected ? false : true
        }))
    }

    render(){
        const selected = {
            backgroundColor: this.state.isSelected && this.props.value > 0 ? 'dodgerblue' : 'white',
            width: '50px',
            height: '50px',
            border: '1px solid black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '3px',
            margin: '2px'
        }

        return (
            <div style={selected} onClick={this.handleSelected}>
            {!this.state.isSelected ?
                <div>

                </div>
            :
                <div>
                    {this.props.value > 0 ?
                        this.props.value
                    :
                        ''
                    }
                </div>
            }
            </div>
        )
    }
}

export default Section;
