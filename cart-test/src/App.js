import React from "react";
import Navbar from "./Components/Main/Navbar/Navbar";
import Products from "./Components/Main/Products/Products";

const App = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <Products />
            </div>
        </>
    );
};

export default App;
