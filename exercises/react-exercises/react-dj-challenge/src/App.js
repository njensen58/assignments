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
            },
            fontStyle: {
                fontWeight: 'lighter',
                fontSize: '22px',
                fontColor: '#aaa',
                letterSpacing: '0'
            },
            shrink: '200px'
        }
    this.handleBtnOne = this.handleBtnOne.bind(this);
    this.handleBtnTwo = this.handleBtnTwo.bind(this);
    this.handleBtnThree = this.handleBtnThree.bind(this);
    this.handleBtnFour = this.handleBtnFour.bind(this);
    this.handleBtnFive = this.handleBtnFive.bind(this);
    this.handleBtnSix = this.handleBtnSix.bind(this);
    this.handleBtnSeven = this.handleBtnSeven.bind(this);
    this.handleBtnEight = this.handleBtnEight.bind(this);
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

    handleBtnFive(){
        this.setState(prevState => {
            if(this.state.shrink === '200px'){
                return {
                    shrink: '150px'
                }
            } else if(this.state.shrink === '150px'){
                return {
                    shrink: '200px'
                }
            }
        })
    }

    handleBtnSix(){
        this.setState(prevState => {
            if(this.state.fontStyle.fontColor === '#aaa'){
                return {
                    fontStyle: {
                        fontWeight: prevState.fontStyle.fontWeight,
                        fontSize: prevState.fontStyle.fontSize,
                        fontColor: 'limegreen'
                    }
                }
            }else {
                return {
                    fontStyle: {
                        fontWeight: prevState.fontStyle.fontWeight,
                        fontSize: prevState.fontStyle.fontSize,
                        fontColor: '#aaa'
                    }
                }
            }
        })
    }

    handleBtnSeven(){
        this.setState(prevState => {
            if(this.state.fontStyle.fontSize === '22px'){
                return {
                    fontStyle: {
                        fontWeight: prevState.fontStyle.fontWeight,
                        fontSize: '35px',
                        fontColor: prevState.fontStyle.fontColor
                    }
                }
            } else {
                return {
                    fontStyle: {
                        fontWeight: prevState.fontStyle.fontWeight,
                        fontSize: '22px',
                        fontColor: prevState.fontStyle.fontColor
                    }
                }
            }
        })
    }

    handleBtnEight(){
        this.setState(prevState => {
            if(this.state.fontStyle.fontWeight === 'lighter'){
                return {
                    fontStyle: {
                        fontWeight: 'bold',
                        fontSize: prevState.fontStyle.fontSize,
                        fontColor: prevState.fontStyle.fontColor,
                        letterSpacing: '3px'
                    }
                }
            } else {
                return {
                    fontStyle: {
                        fontWeight: 'lighter',
                        fontSize: prevState.fontStyle.fontSize,
                        fontColor: prevState.fontStyle.fontColor,
                        letterSpacing: '0'
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
                    shrink={this.state.shrink}
                    fontStyle={this.state.fontStyle}
                />
                <DjButtons
                    handleBtnOne={this.handleBtnOne}
                    handleBtnTwo={this.handleBtnTwo}
                    handleBtnThree={this.handleBtnThree}
                    handleBtnFour={this.handleBtnFour}
                    handleBtnFive={this.handleBtnFive}
                    handleBtnSix={this.handleBtnSix}
                    handleBtnSeven={this.handleBtnSeven}
                    handleBtnEight={this.handleBtnEight}
                />
            </div>
        )
    }
}

export default App;
