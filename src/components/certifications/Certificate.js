import React from "react";
import CertificateCard from "./CertificateCard";
import certificateData from '../../data/certificateData';

function Certificate(props) {
    const {name, certHash} = certificateData[props.name];
    return (
        <CertificateCard name={name} certHash={certHash}/>
    )
}

export default Certificate;
