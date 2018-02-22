import React from 'react';

class Child extends React.Component {

   delete(id){
       this.props.delete(id);
   }

   render(){
      return(
         <div>
           {
              this.props.data.map(el=>
                  <p onClick={this.delete.bind(this, el)}>{el}</p>
              )
           }
         </div>
      )
   }
}

export default Child;
