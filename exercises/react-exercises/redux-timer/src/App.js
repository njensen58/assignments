import React from 'react';
import { connect } from 'react-redux';
import { startTimer, resetTimer, makeLap } from './redux';
import TimerDisplay from './TimerDisplay';
import TimerButtons from './TimerButtons';



class App extends React.Component {
    constructor(){
        super();
        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleLap = this.handleLap.bind(this);
        this.timerStart;
    }

    handleStart(){
        if(!this.timerStart){
            this.timerStart = setInterval(this.props.startTimer, 1000)
        }
    }

    handleStop(){
        clearInterval(this.timerStart);
        this.timerStart = null;
    }

    handleReset(){
        this.props.resetTimer();
    }

    handleLap(){
        this.props.makeLap();
    }

    render(){
        return (
            <div>
                <TimerDisplay
                    seconds={this.props.seconds}
                    minutes={this.props.minutes}
                    laps={this.props.laps}
                />
                <TimerButtons
                    handleStart={this.handleStart}
                    handleStop={this.handleStop}
                    handleReset={this.handleReset}
                    handleLap={this.handleLap}
                />
            </div>
        )
    }
}

export default connect(state=>state, { startTimer, resetTimer, makeLap })(App);
