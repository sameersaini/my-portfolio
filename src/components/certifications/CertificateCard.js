import React from "react"

function CertificateCard(props) {
    return (
        <div className="card m-2">
            <div className="card-header d-flex justify-content-center p-1">
                <strong>{props.name}</strong>
            </div>
            <div className="card-body p-0">
                <img className="img img-fluid"
                     src={`https://udemy-certificate.s3.amazonaws.com/image/${props.certHash}.jpg`} alt=""/>
            </div>
        </div>
    )
}

export default CertificateCard
