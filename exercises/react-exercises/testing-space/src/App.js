import React from 'react';
import Child from './Child';

class App extends React.Component{
   constructor(){
      super();
      this.state = {
        data: ['Apples',2,3,4,5]
      }
      this.delete = this.delete.bind(this);
   }

   delete(id){
      this.setState(prevState => ({
          data: prevState.data.filter(el => el != id )
      }));
   }


   render(){
      return(
          <Child delete={this.delete} data={this.state.data}/>
      );
   }
}


export default App;
