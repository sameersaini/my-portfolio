import React from "react";
import CompaniesCard from "./CompaniesCard";
import companiesData from './CompaniesData';

function Company(props) {
    const {name, location, position, workDesc, timePeriod} = companiesData[props.name];
    return (
        <CompaniesCard
            companyName={name}
            location={location}
            position={position}
            workDesc={workDesc}
            timePeriod={timePeriod}
        />
    )
}

export default Company;
