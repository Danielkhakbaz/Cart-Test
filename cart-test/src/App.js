import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Components/Main/Navbar/Navbar";
import Products from "./Components/Main/Products/Products";
import NotFound from "./Components/Main/NotFound/NotFound";
import NewProduct from "./Components/Main/NewProduct/NewProduct";

const App = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <Switch>
                    <Route path="/Cart" component={Products} />
                    <Route path="/NewProduct" component={NewProduct} />
                    <Route path="/NotFound" component={NotFound} />
                    <Redirect exact from="/" to="/Cart" />
                    <Redirect to="/NotFound" />
                </Switch>
            </div>
        </>
    );
};

export default App;
