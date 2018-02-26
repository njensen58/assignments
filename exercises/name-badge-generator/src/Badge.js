import React from 'react';


function Badge(props){

    const h1Style = {
        fontSize: '20px',
        margin: '0',
        padding: '0',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: props.count % 2 === 0 ? 'dodgerblue' : 'green',
        color: 'white',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        gridColumn: '1 / -1',
        paddingLeft: '10px'
    }

    return (
        <div className="badgeContainer">
            <h1 style={h1Style}>Badge:</h1>
            <div className="badgeLeft1"> Name: {props.firstName + ' ' + props.lastName}</div>
            <div className="badgeLeft2"> Place of Birth: {props.placeOfBirth}</div>
            <div className="badgeLeft3"> Email: {props.email}</div>
            <div className="badgeRight1"> Phone: {'(' + props.phone.slice(0, 3) + ') ' + props.phone.slice(3, 6) + '-' + props.phone.slice(6)}</div>
            <div className="badgeRight2"> Favorite food: {props.favFood}</div>
            <div className="aboutYouDisplay">{props.aboutYou}</div>
        </div>
    )
}

export default Badge;
