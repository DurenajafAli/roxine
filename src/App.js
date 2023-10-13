import React from "react";
import Home from "./Pages/Home";
import Expert from "./Pages/Expert";
import Design from "./Pages/Design";
import SecX from "./Pages/SecX";
import Footer from "./Footer";

import { Routes, Route } from "react-router-dom"
import Section from "./Section";

function App() {

    return (
        <>
            
            <Routes>
                <Route path="/" element={<Home />} />

            </Routes>

            <Expert />
            <Design />
            <SecX/>
            <Footer />

           


        </>
    )
}
export default App