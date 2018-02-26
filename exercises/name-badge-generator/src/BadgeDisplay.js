import React from 'react';
import Badge from './Badge';

function BadgeDisplay(props){
    const mappedBadges = props.info.nameBadges.map(badge => {
        return (
            <Badge
                firstName={badge.firstName}
                lastName={badge.lastName}
                phone={badge.phone}
                placeOfBirth={badge.placeOfBirth}
                favFood={badge.favFood}
                email={badge.email}
                aboutYou={badge.aboutYou}
                count={badge.count}
            />
        )
    })

    return (
        <div className="badgeDisplayDiv">
            {mappedBadges}
        </div>
    )
}


export default BadgeDisplay;
