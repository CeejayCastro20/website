import React from "react";
import Nav from "../components/Nav.jsx";
import Mnav from "../components/Mnav.jsx";
import Landpage from "../components/Landpage.jsx";

const APage = () => {
    return (
        <div>
            <Mnav />
            <Nav/>
            <Landpage/>
        </div>
    );
};

export default APage;