import React from "react";

function SocialContact(props) {
    return (
        <div>
            <a href={props.url} className="text-white" target="_blank" rel="noopener noreferrer">
                <i className={`fab fa-${props.icon} icon-size`} />
            </a>
        </div>
    )
}

export default SocialContact;
