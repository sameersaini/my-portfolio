import React from "react";
import Collapse from "react-bootstrap/Collapse";

function Home(props) {
    return (
        <Collapse in={props.components.home}>
            <div id="home">
                <div className="top-card card card-body bg-primary text-white py-4">
                    <h2>Welcome To My Page</h2>
                    <p className="lead">
                        Having 3.5+ years of experience as a Software Engineer with a demonstrated history of working in the
                        information technology and services industry.
                    </p>
                </div>
                <div className="card card-body py-5">
                    <h3>My Skills</h3>


                    <table className="table table-bordered shadow-lg">
                        <tbody>
                        <tr>
                            <td>Languages</td>
                            <td>NodeJS, React, Redux, Php, Python, Html, CSS, Javascript, Shell Scripting</td>
                        </tr>
                        <tr>
                            <td>Frameworks</td>
                            <td>ExpressJS, HapiJS, Php Yii2 framework, Laravel</td>
                        </tr>
                        <tr>
                            <td>Databases</td>
                            <td>MySql, MongoDB, Oracle</td>
                        </tr>
                        <tr>
                            <td>Other</td>
                            <td>Amazon Web Services( EC2, S3, CloudFront, RDS, VPC, Elastic Load Balancer, Route 53, CodePipeline),
                                Docker, Kubernetes, GIT, Vim, Heroku
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <hr/>
                    <h4>Php</h4>
                    <div className="progress mb-3">
                        <div className="progress-bar bg-success" style={{width: "85%"}}>85%</div>
                    </div>
                    <h4>Python</h4>
                    <div className="progress mb-3">
                        <div className="progress-bar bg-success" style={{width: "75%"}}>75%</div>
                    </div>
                    <h4>React</h4>
                    <div className="progress mb-3">
                        <div className="progress-bar bg-success" style={{width: "70%"}}>70%</div>
                    </div>
                    <h4>NodeJs</h4>
                    <div className="progress mb-3">
                        <div className="progress-bar bg-success" style={{width: "85%"}}>85%</div>
                    </div>
                    <h4>Javascript</h4>
                    <div className="progress mb-3">
                        <div className="progress-bar bg-success" style={{width: "90%"}}>90%</div>
                    </div>
                    <h4>HTML 5</h4>
                    <div className="progress mb-3">
                        <div className="progress-bar bg-success" style={{width: "80%"}}>80%</div>
                    </div>
                    <h4>CSS 3</h4>
                    <div className="progress mb-3">
                        <div className="progress-bar bg-success" style={{width: "60%"}}>60%</div>
                    </div>
                    <h4>Shell Scripting</h4>
                    <div className="progress mb-3">
                        <div className="progress-bar bg-success" style={{width: "90%"}}>90%</div>
                    </div>
                </div>
            </div>
        </Collapse>
    )
}

export default Home;
