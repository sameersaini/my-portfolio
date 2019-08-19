import React from "react";

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            percentage: 0
        }
    }

    componentDidMount() {
        setTimeout((i) => {
            this.setState({
                percentage: this.props.percentage
            })
        }, 200)
    }

    render() {
        return (
            <div>
                <h5>{this.props.name}</h5>
                <div className="progress mb-3">
                    <div
                        className="progress-bar bg-success"
                        style={{width: `${this.state.percentage}%`}}
                    >
                        {this.state.percentage}%
                    </div>
                </div>
            </div>
        )
    }
}

export default ProgressBar;
