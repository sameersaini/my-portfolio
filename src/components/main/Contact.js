import React from "react";
import Collapse from "react-bootstrap/Collapse";
import FormItem from "../form-items/formItem";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    };

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    };

    handleMessageChange = (e) => {
        this.setState({
            message: e.target.value
        })
    };

    sendMail = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <Collapse in={this.props.components.contact}>
                <div id="contact">
                    <div className="top-card card card-body bg-danger text-white py-4">
                        <h2>Contact</h2>
                        <p className="lead">Kindly fill the form below to get in touch</p>
                    </div>
                    <div className="card card-body py-4">
                        <h3>Get In Touch</h3>
                        <form id="contact-form mt-2">
                            <FormItem
                                elementType="input"
                                id="name" type="text"
                                placeholder="Name"
                                icon="user"
                                value={this.state.name}
                                onValueChange={this.handleNameChange}
                            />
                            <FormItem
                                elementType="input"
                                id="emailid"
                                type="email"
                                placeholder="Email"
                                icon="envelope"
                                value={this.state.email}
                                onValueChange={this.handleEmailChange}
                            />
                            <FormItem
                                elementType="textarea"
                                id="messagetext"
                                placeholder="Message"
                                icon="pencil-alt"
                                value={this.state.message}
                                onValueChange={this.handleMessageChange}
                            />
                            <input
                                type="submit"
                                id="submit"
                                className="btn btn-danger btn-block btn-lg"
                                onClick={this.sendMail}
                            />
                        </form>
                    </div>
                </div>
            </Collapse>
        )
    }

}

export default Contact;
