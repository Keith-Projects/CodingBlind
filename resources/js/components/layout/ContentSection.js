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
                                    Here, you will find links leading to the
                                    best way to get in contact with me. I will
                                    have a Facebook page soon as well. I will
                                    have videos coming out soon on how to use
                                    Discord with a screen reader. If you have
                                    any requests, questions or just want to chat
                                    please feel free to use any method listed
                                    below.
                                </p>

                                <div className="container-fluid">
                                    <div className="row justify-content-center">
                                        <div className="col col-sm-10 col-lg-4 mx-auto">
                                            <h3 className="text-center">
                                                Email
                                            </h3>
                                            <p>
                                                <a href="mailto:nolimits1120@gmail.com">
                                                    nolimits1120@gmail.com
                                                </a>
                                            </p>
                                        </div>

                                        <div className="col col-sm-10 col-lg-4 mx-auto">
                                            <h3 className="text-center">
                                                Discord
                                            </h3>
                                            <p>
                                                Channel Server:
                                                <a
                                                    href="https://discord.gg/S2W4qhSEbF"
                                                    target="_blank"
                                                >
                                                    Invite Page
                                                </a>
                                            </p>
                                            <p>My Username: CodingBlind#0684</p>
                                        </div>

                                        <div className="col col-sm-10 col-lg-4 mx-auto">
                                            <h3 className="text-center">
                                                Twitter
                                            </h3>
                                            <a
                                                href="https://twitter.com/PalatkaWebDev"
                                                target="_blank"
                                            >
                                                Coding Blind Twitter
                                            </a>
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
