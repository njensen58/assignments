import React from 'react';
import data from './data.json';

const ServiceDetail = props => {
    const service = data.find(item => {
        return item.name.toLowerCase().split(' ').join('-') === props.match.params.serviceID;
    })

    return (
        <div>
            <h1>{service.name}</h1>
            <h3>Price: {service.price}</h3>
        </div>
    )
}

export default ServiceDetail;
