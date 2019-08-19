import React from "react";

function CompaniesCard(props) {
    const workDesc = [];
    for (const [index, value] of props.workDesc.entries()) {
        workDesc.push(<li key={index}>{value}</li>)
    }

    return (
        <div className="card">
            <div className="card-header">
                <div>
                    <span>
                        <strong>{props.companyName}</strong>
                    </span>
                    <span className="float-right">
                        <i className="fas fa-map-marker-alt"/> {props.location}
                    </span>
                </div>
            </div>
            <div className="card-body">
                <p className="p-2 mb-2 bg-dark text-white">
                    {props.position}
                </p>
                <ul>
                    {workDesc}
                </ul>
            </div>
            <div className="card-footer">
                <h6 className="text-muted">{props.timePeriod}</h6>
            </div>
        </div>
    )
}

export default CompaniesCard;
