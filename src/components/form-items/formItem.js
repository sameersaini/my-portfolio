import React from "react";

function FormItem(props) {
    let element;
    switch (props.elementType) {
        case "input":
            element = <input
                id={props.id}
                type={props.type}
                className="form-control bg-dark text-white"
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onValueChange}
            />;
            break;
        case "textarea":
            element = <textarea
                id={props.id}
                className="form-control bg-dark text-white"
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onValueChange}
            />;
            break;
        default:
            element = null;
            break;
    }

    return (
        <div className="form-group">
            <div className="input-group input-group-lg">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-danger text-white">
                      <i className={`fas fa-${props.icon}`} />
                  </span>
                </div>
                {element}
            </div>
        </div>
    )
}

export default FormItem
