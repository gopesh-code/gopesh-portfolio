import React from "react";

import {
    About,
    Contact,
    Footer,
    Header,
    Skills,
    Testimonial,
    Work,
} from "./containers";

import { Navbar } from "./components";
import "./App.scss";

const App = () => {
    
    return (
        <div className="app">
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Testimonial />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
