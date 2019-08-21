import React from "react";
const images = require.context('../../img', true);

function CompaniesCard(props) {
    const workDesc = [];
    for (const [index, value] of props.workDesc.entries()) {
        workDesc.push(<li key={index}>{value}</li>)
    }

    let imgSrc = images('./' + props.imageName);
    return (
        <div className="card m-2">
            <div className="card-header">
                <div>
                    <span>
                        <img src={imgSrc} className="img-fluid mr-2" alt="" style={{width: '25px'}}/>
                        <strong>{props.companyName}</strong>
                    </span>
                    <span className="ml-2">
                        -- {props.position}
                    </span>
                    <span className="float-right d-none d-lg-inline">
                        <i className="fas fa-map-marker-alt"/> {props.location}
                    </span>
                </div>
            </div>
            <div className="card-body">
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
