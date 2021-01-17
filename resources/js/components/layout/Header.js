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
                                Call to action
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
