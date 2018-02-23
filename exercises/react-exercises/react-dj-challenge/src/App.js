import React from 'react'
import DjBoard from './DjBoard';
import DjButtons from './DjButtons';



class App extends React.Component {
    constructor(){
        super();
        this.state = {
            colorGrid: {
                one: 'white',
                two: 'white',
                three: 'white',
                four: 'white'
            },
            text: {
                one: 'white',
                two: 'white',
                three: 'white',
                four: 'white'
            }
        }
    this.handleBtnOne = this.handleBtnOne.bind(this);
    this.handleBtnTwo = this.handleBtnTwo.bind(this);
    this.handleBtnThree = this.handleBtnThree.bind(this);
    this.handleBtnFour = this.handleBtnFour.bind(this);
    }

    handleBtnOne(){
        this.setState(prevState => {
            if(prevState.colorGrid.one === 'white'){
                return {
                    colorGrid: {
                        one: 'black',
                        two: 'black',
                        three: 'black',
                        four: 'black'
                    },
                    text: {
                        one: 'black',
                        two: 'black',
                        three: 'black',
                        four: 'black'
                    }
                }
            } else {
                return {
                    colorGrid: {
                        one: 'white',
                        two: 'white',
                        three: 'white',
                        four: 'white'
                    },
                    text: {
                        one: 'white',
                        two: 'white',
                        three: 'white',
                        four: 'white'
                    }
                }
            }
        })
    }

    handleBtnTwo(){
        this.setState(prevState => {
            if(prevState.colorGrid.one !== 'purple'){
                return {
                    colorGrid: {
                        one: 'purple',
                        two: 'purple',
                        three: prevState.colorGrid.three,
                        four: prevState.colorGrid.four
                    },
                    text: {
                        one: 'purple',
                        two: 'purple',
                        three: prevState.colorGrid.three,
                        four: prevState.colorGrid.four
                    }
                }
            } else if(prevState.colorGrid.one === 'purple'){
                return {
                    colorGrid: {
                        one: prevState.colorGrid.three === 'black' ? 'black' : 'white',
                        two: prevState.colorGrid.three === 'black' ? 'black' : 'white',
                        three: prevState.colorGrid.three,
                        four: prevState.colorGrid.four
                    },
                    text: {
                        one: prevState.colorGrid.three === 'black' ? 'black' : 'white',
                        two: prevState.colorGrid.three === 'black' ? 'black' : 'white',
                        three: prevState.colorGrid.three,
                        four: prevState.colorGrid.four
                    }
                }
            }
        })
    }

    handleBtnThree(){
        this.setState(prevState => {
            if(prevState.colorGrid.three !== 'dodgerblue'){
                return {
                    colorGrid: {
                        one: prevState.colorGrid.one,
                        two: prevState.colorGrid.two,
                        three: 'dodgerblue',
                        four: prevState.colorGrid.four
                    },
                    text: {
                        one: prevState.colorGrid.one,
                        two: prevState.colorGrid.two,
                        three: 'dodgerblue',
                        four: prevState.colorGrid.four
                    }
                }
            } else if(prevState.colorGrid.three === 'dodgerblue'){
                 return {
                     colorGrid: {
                         one: prevState.colorGrid.one,
                         two: prevState.colorGrid.two,
                         three: prevState.colorGrid.one === 'purple' ? 'black' : 'white',
                         four: prevState.colorGrid.four
                     },
                     text: {
                         one: prevState.colorGrid.one,
                         two: prevState.colorGrid.two,
                         three: prevState.colorGrid.one === 'purple' ? 'black' : 'white',
                         four: prevState.colorGrid.four
                     }
                 }
            }
        })
    }

    handleBtnFour(){
        this.setState(prevState => {
            if(prevState.colorGrid.four !== 'dodgerblue'){
                return {
                    colorGrid: {
                        one: prevState.colorGrid.one,
                        two: prevState.colorGrid.two,
                        three: prevState.colorGrid.three,
                        four: 'dodgerblue'
                    },
                    text: {
                        one: prevState.colorGrid.one,
                        two: prevState.colorGrid.two,
                        three: prevState.colorGrid.three,
                        four: 'dodgerblue'
                    }
                }
            } else if(prevState.colorGrid.four === 'dodgerblue'){
                 return {
                     colorGrid: {
                         one: prevState.colorGrid.one,
                         two: prevState.colorGrid.two,
                         three: prevState.colorGrid.three,
                         four: prevState.colorGrid.one === 'purple' ? 'black' : 'white',
                     },
                     text: {
                         one: prevState.colorGrid.one,
                         two: prevState.colorGrid.two,
                         three: prevState.colorGrid.three,
                         four: prevState.colorGrid.one === 'purple' ? 'black' : 'white',
                     }
                 }
            }
        })
    }

    render(){
        return (
            <div>
                <DjBoard
                    gridColors={this.state.colorGrid}
                    text={this.state.text}
                />
                <DjButtons
                    handleBtnOne={this.handleBtnOne}
                    handleBtnTwo={this.handleBtnTwo}
                    handleBtnThree={this.handleBtnThree}
                    handleBtnFour={this.handleBtnFour}
                />
            </div>
        )
    }
}

export default App;
