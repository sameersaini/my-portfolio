import React from "react";

function Footer () {
    return (
        <footer id="main-footer" className="p-5 bg-dark text-white">
            <div className="row">
                <div className="col-md-6">
                    <a href="https://s3.amazonaws.com/sameer-saini-resume/Resume.pdf" target="_blank"
                       className="btn btn-outline-light" rel="noopener noreferrer">
                        <i className="fas fa-cloud" /> Download Resume
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
