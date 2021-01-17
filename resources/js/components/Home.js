import React, { Component } from "react";
import Header from "./layout/Header";
import ContactSection from "./layout/ContentSection";
import { contains } from "jquery";

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <ContactSection />
            </div>
        );
    }
}

export default Home;
