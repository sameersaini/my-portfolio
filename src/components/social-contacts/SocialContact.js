import React from "react";

function SocialContact(props) {
    return (
        <div>
            <a href={props.url} className="text-white" target="_blank" rel="noopener noreferrer">
                <i className={`fab fa-${props.icon} fa-2x`} />
            </a>
        </div>
    )
}

export default SocialContact;
