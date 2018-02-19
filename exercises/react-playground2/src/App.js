import React from 'react';

class App extends React.Component {
  
onBtnClick = (e) => {
    e.preventDefault();
    const colors = ['blue','green','purple','dodgerblue','cornflowerblue','lightblue'];
    let userInput = this.refs.userInput.value;
    this.refs.userInput.value = '';
    this.refs.screenDisplay.textContent = userInput || colors[count];
    this.refs.screenDisplay.style.backgroundColor = userInput || colors[count];
    count++;
      if(count === 6){
        count = 0;
      }
  }    
    render () {
      const fullScreen = {
        height: '100px',
        width: '50%',
        border: '1px solid black',
        textAlign: 'center',
        paddingTop: '75px'
      }
      return (      
      <div>
        <div>
        <form onSubmit={ this.onBtnClick }>
          <input type="text" ref="userInput"/>
          <button>Submit</button>
        </form>
        </div>
        <div>
          <div className="fullScreen" ref="screenDisplay" style={fullScreen}>Scree</div>
        </div>
      </div>
    )
  }
}

let count = 0;

export default App;
