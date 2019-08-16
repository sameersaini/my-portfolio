import Footer from "./Footer";
import React from "react";
import TopContent from "./TopContent";
import Home from "./Home";
import Resume from "./Resume";
import Work from "./Work";
import Contact from "./Contact";

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            home: true,
            resume: false,
            work: false,
            contact: false
        }
    }

    clickHandler = (component) => {
        this.setState({
            home: false,
            resume: false,
            work: false,
            contact: false,
            [component]: !this.state[component]
        })
    };

    render() {
        return (
            <div className="container">
                <TopContent components={this.state} handleComponentClick={this.clickHandler}/>
                <Home components={this.state}/>
                <Resume components={this.state}/>
                <Work components={this.state}/>
                <Contact components={this.state}/>
                <Footer components={this.state}/>
            </div>
        )
    }
}

export default MainContent;
