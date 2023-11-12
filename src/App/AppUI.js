import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import Aside from "../components/aside"
import { SharedProvider } from "../contexts/products";

function AppUI() {

    return (
        <>

            <SharedProvider>
                <Navbar />
                <Aside />
                <Footer />
            </SharedProvider>


        </>

    )
}
export default AppUI;