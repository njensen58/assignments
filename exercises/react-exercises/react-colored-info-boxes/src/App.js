import React from 'react';
import Welcome from './Welcome';
import Goodbye from './Goodbye';

function App(){
    const containerGrid = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr"
    }

    return (
        <div style={containerGrid}>
            <Welcome name="Nate" color="dodgerblue" emotion="Happy" number="(801)-295-2038"/>
            <Welcome name="Joe" color="cyan" emotion="Sad" number="(801)-642-4725"/>
            <Welcome name="Frank" color="yellow" emotion="Pissed" number="(801)-467-2346"/>
            <Welcome name="Larry" color="red" emotion="Dead" number="(801)-235-1644"/>
            <Welcome name="Jesus" color="rebeccapurple" emotion="Titilated" number="(801)-757-3462"/>
            <Welcome name="Mark" color="orange" emotion="Subdued" number="(801)-526-4276"/>
            <Welcome name="Mary" color="teal" emotion="Stoopid" number="(801)-727-2346"/>
            <Welcome name="Nick" color="silver" emotion="Drunk" number="(801)-826-8245"/>
            <Welcome name="Lucy" color="gold" emotion="High" number="(801)-164-4263"/>
            <Welcome name="Linda" color="grey" emotion="Disabled" number="(801)-243-2474"/>
            <Welcome name="Falco" color="cornflowerblue" emotion="Whimsical" number="(801)-254-7254"/>
            <Welcome name="Fox" color="violet" emotion="Evil" number="(801)-234-7245"/>

            <Goodbye attributes={{color: "blue", fontSize: "25px", gridColumn: "1 / -1"}} fareWell="Goodbye"/>
            <Goodbye attributes={{color: "dodgerblue", fontSize: "25px", gridColumn: "1 / -1"}} fareWell="Au Revoir"/>
            <Goodbye attributes={{color: "cornflowerblue", fontSize: "25px", gridColumn: "1 / -1"}} fareWell="Caio"/>
        </div>
    )
}

export default App;
