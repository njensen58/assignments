import React from 'react';


const turtles = [
             {
                 name: "Leonardo",
                 nickName: "Leo",
                 weapon: "Katana",
                 imgUrl: "https://upload.wikimedia.org/wikipedia/en/e/ed/Leonardo_%28Teenage_Mutant_Ninja_Turtles%29.jpg"
             },
             {
                 name: "Donatello",
                 nickName: "Don",
                 weapon: "Bo staff",
                 imgUrl: "https://upload.wikimedia.org/wikipedia/en/5/5a/Donatello_%28Teenage_Mutant_Ninja_Turtles%29.jpg"
             },
             {
                 name: "Michelangelo",
                 nickName: "Mikey",
                 weapon: "Nunchucks",
                 imgUrl: "https://upload.wikimedia.org/wikipedia/en/f/f3/Michelangelo_%28Teenage_Mutant_Ninja_Turtles%29.jpg"
             },
             {
                 name: "Raphael",
                 nickName: "Raph",
                 weapon: "Sai",
                 imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/72/Raphael_%28Teenage_Mutant_Ninja_Tutles%29.jpg"
             }
         ]


function Turtles(){
  return turtles.map((turtle, index) =>
    <div key={turtle.name + '-' + index}>
      <h1>{ turtle.name } ({ turtle.nickName })</h1>
      <h3>Weapon of choice - { turtle.weapon }</h3>
      <img src={ turtle.imgUrl } alt={ turtle.name }/>
    </div>
  )
}

// export default Turtles;
