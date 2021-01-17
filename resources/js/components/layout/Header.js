import React from "react";

function Header() {
    return (
        <header className="masthead mt-2">
            <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-10 align-self-end">
                        <h1
                            className="text-uppercase font-weight-bold"
                            style={{ color: "#ff0000" }}
                        >
                            Coding Blind Tech
                        </h1>
                        <hr
                            className="divider my-4"
                            style={{ borderColor: "#ffffff", color: "#ffffff" }}
                        />
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                        <p
                            className="text-white-75 font-weight-light mb-5"
                            style={{ fontSize: "25px" }}
                        >
                            Welcome to Coding Blind Tech! My name is Keith, and I am the
              creator of Coding Blind Tech. My goal is to create a place where
              those who are low vision or blind can come to learn about coding,
              Assistive Technologies as well as where to find resources for
              those who are low vision and blind. I also want to direct Coding
              Blind Tech to those who may have a family, child or friend who is
              in need for information on where to go and how to find resources
              for blind and low vision persons. I want to create a positive
              community, and the words competence, confidence and consistency
              will be what Coding Blind Tech is built on top of! I am currently
              still developing this site and if you are looking for the YouTube
              page, please check it out below. Thank you, and more information
              coming soon.
                            <br />
                            <a
                                style={{
                                    fontSize: "115%",
                                    fontFamily: "Merriweather Sans",
                                    color: "#212529",
                                    textShadow:
                                        "0 0 3px #ffffff, 0 0 5px #ff0000"
                                }}
                                href="pre-payment-form.html"
                                className="btn btn-outline-secondary mt-4"
                                target="_blank"
                            >
                                Learn More!
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
