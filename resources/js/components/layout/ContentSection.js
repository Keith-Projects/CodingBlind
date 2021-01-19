import React, { Component } from "react";

class ContentSection extends Component {
    render() {
        return (
            <section className="contact-options" id="contact" tabIndex="-1">
                <div className="container">
                    <div className="card">
                        <div className="card-block">
                            <div className="card-header text-center">
                                <h2 className="card-title">
                                    Ways To Communicate
                                </h2>
                                <hr className="mt-4" />
                            </div>

                            <div className="card-body text-center">
                                <p>
                                    paragraph for contact section. The discord
                                    section will be seperate, however, I will
                                    still provide my discord username below.
                                </p>

                                <div className="container-fluid">
                                    <div className="row justify-content-center">
                                        <div className="col col-sm-10 col-lg-3 mx-auto">
                                            <h3 className="text-center">
                                                Contact method one
                                            </h3>
                                            <p></p>
                                        </div>

                                        <div className="col col-sm-10 col-lg-3 mx-auto">
                                            <h3 className="text-center">
                                                Contact Method Two
                                            </h3>
                                            <p></p>
                                        </div>

                                        <div className="col col-sm-10 col-lg-3 mx-auto">
                                            <h3 className="text-center">
                                                Contact Method Three
                                            </h3>
                                            <p> </p>
                                        </div>

                                        <div className="col col-sm-10 col-lg-3 mx-auto">
                                            <h3 className="text-center">
                                                Contact Method Four
                                            </h3>
                                            <p> </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContentSection;
