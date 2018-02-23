import React from 'react'
import DjBoard from './DjBoard';
import DjButtons from './DjButtons';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            isBtnOneOn: false,
            isBtnTwoOn: false
        }
    this.handleBtnOne = this.handleBtnOne.bind(this);
    this.handleBtnTwo = this.handleBtnTwo.bind(this);
    }

    handleBtnOne(){
        this.setState(prevState => {
            return {
                isBtnOneOn: !(prevState.isBtnOneOn) ? true : false
            }
        })
    }

    handleBtnTwo(){
        this.setState(prevState => {
            return {
                isBtnTwoOn: !(prevState.isBtnTwoOn) ? true : false
            }
        })
    }

    render(){
        const btnOneColors = {
            backgroundColor: this.state.isBtnOneOn ? 'black' : 'white',
            color: this.state.isBtnOneOn ? 'white' : 'black'
        }
        const btnTwoColors = {
            backgroundColor: this.state.isBtnTwoOn ? 'purple' : 'white',
            color: this.state.isBtnTwoOn ? 'white' : 'black'
        }
        return (
            <div>
                <DjBoard
                    isBtnOneOn={this.state.isBtnOneOn}
                    isBtnTwoOn={this.state.isBtnTwoOn}
                    btnOneColors={btnOneColors}
                    btnTwoColors={btnTwoColors}
                />
                <DjButtons
                    handleBtnOne={this.handleBtnOne}
                    handleBtnTwo={this.handleBtnTwo}
                />
            </div>
        )
    }
}

export default App;
