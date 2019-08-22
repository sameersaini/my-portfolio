import React from "react";
import Collapse from "react-bootstrap/Collapse";
import ProgressBar from "../progress-bar/ProgressBar";

function Home(props) {
    return (
        <Collapse in={props.components.home}>
            <div id="home">
                <div className="top-card card card-body bg-primary text-white py-4">
                    <h2>Welcome To My Page</h2>
                    <p className="lead">
                        Having 5+ years of experience as a Software Engineer with a demonstrated history of working in the
                        software and information technology industry.
                    </p>
                </div>
                <div className="card card-body py-4">
                    <h3>My Skills</h3>
                    <table className="table table-bordered shadow-lg">
                        <tbody>
                        <tr>
                            <td>Languages</td>
                            <td>Javascript, NodeJS, Php, Python, Java, Html, CSS, SASS, Shell Scripting</td>
                        </tr>
                        <tr>
                            <td>Frameworks</td>
                            <td>Php Laravel, ReactJs, VueJs, Angular, Redux, Vuex, Ngrx,  ExpressJS, HapiJS, Bootstrap</td>
                        </tr>
                        <tr>
                            <td>Databases</td>
                            <td>Relational(MySql, Oracle, MSSQL), NoSql (MongoDB, AWS DynamoDB)</td>
                        </tr>
                        <tr>
                            <td>Other</td>
                            <td>PhpUnit, Mocha, Jest, Amazon Web Services (EC2, S3, CloudFront, RDS, VPC, Elastic Load Balancer,  Route 53), Docker, Kubernetes, Redis, GIT, Vim, Heroku, New Relic, Jira, Robo 3T, Postman, Jest
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <hr/>
                    <ProgressBar name="Javascript" percentage="80"/>
                    <ProgressBar name="NodeJs" percentage="85"/>
                    <ProgressBar name="Php" percentage="85"/>
                    <ProgressBar name="Python" percentage="75"/>
                    <ProgressBar name="Java" percentage="75"/>
                    <ProgressBar name="HTML 5" percentage="80"/>
                    <ProgressBar name="CSS 3" percentage="70"/>
                    <ProgressBar name="SASS" percentage="60"/>
                    <ProgressBar name="Shell Scripting" percentage="80"/>
                    <ProgressBar name="Mysql" percentage="85"/>
                    <ProgressBar name="MongoDB" percentage="70"/>
                </div>
            </div>
        </Collapse>
    )
}

export default Home;
