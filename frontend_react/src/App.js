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
import DarkModeToggle from './components/DarkModeToggle';

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <DarkModeToggle />
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
