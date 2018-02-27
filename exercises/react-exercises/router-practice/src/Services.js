import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import ServiceDetail from './ServiceDetail';
import data from './data.json';

function Services(props){
    const serviceLinks = data.map(service => {
        const path = service.name.toLowerCase().split(' ').join('-')
        return (
            <Link to={`${props.match.url}/${path}`} className="links">{service.name}</Link>
        )
    })
    return (
        <div className="servicesDiv">
            <div>
                Services :
            </div>
            <div>
                {serviceLinks}
            </div>
            <Switch>
                <Route path="/services/:serviceID" component={ServiceDetail} />
            </Switch>
        </div>
    )
}

export default Services;
