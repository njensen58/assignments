import React from 'react';

const timeToGoColor = (props) => {
    if(props.timeToGo === 'Spring'){
        return "#ffc0cb52";
    } else if(props.timeToGo === 'Summer'){
        return "#E5CD2B52";
    } else if(props.timeToGo === 'Fall'){
        return "#E22BE552";
    } else {
        return "#5AD5E552";
    }
}

const cost = (props) => {
    let num = props.price.split('').slice(1).join('');
    if(num < 500){
        return '$';
    } else if(num < 1000){
        return '$$';
    } else {
        return '$$$'
    }
}



function VacationSpots(props){

    const background = {
        backgroundColor: timeToGoColor(props),
        margin: "10px 20%",
        border: "1px solid white",
        height: "200px",
        borderRadius: "20px",
        boxShadow: "rgb(221, 221, 221) -7px 6px 12px"
    }

    const text = {
        fontSize: "40px",
        fontWeight: "lighter",
        borderBottom: "1px solid black",
        margin: "0 20px"
    }

    const imgStyle = {
        width: "150px",
        float: "left",
        margin: "20px",
        borderRadius: "20px",
        border: "1px solid white"
    }

    const costStyle = {
        fontSize: "30px",
        letterSpacing: "5px"
    }

    return (
            <div style={ background }>
                <div>
                    <h1 style={ text }>{ props.place }</h1>
                </div>
                <div>
                    <img src={props.image} style={ imgStyle }/>
                </div>
                <div>
                    <p>{ props.price }</p>
                    <h3 style={ costStyle }>{ cost(props) }</h3>
                </div>
            </div>
    )
}

export default VacationSpots;
