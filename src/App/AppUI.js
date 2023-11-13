import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Aside from "../components/Aside";
import Buy from "../components/Buy";

import { SharedProvider } from "../contexts/products";

function AppUI() {
    return (
        <>
            <SharedProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Aside />} />
                        <Route path="/buy" element={<Buy />} />
                    </Routes>
                    <Footer />
                </Router>
            </SharedProvider>
        </>
    );
}

export default AppUI;