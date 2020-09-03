import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Components/Main/Navbar/Navbar";
import ProductsList from "./Components/Main/ProductsList/ProductsList";
import NewProduct from "./Components/Main/NewProduct/NewProduct";
import NotFound from "./Components/Main/NotFound/NotFound";
import { CartProvider } from "./Providers/CartContext";

const App = () => {
    return (
        <>
            <CartProvider>
                <Navbar />
                <div className="container-fluid">
                    <Switch>
                        <Route path="/Cart" component={ProductsList} />
                        <Route path="/AddProduct" component={NewProduct} />
                        <Route path="/NotFound" component={NotFound} />
                        <Redirect exact from="/" to="/Cart" />
                        <Redirect to="/NotFound" />
                    </Switch>
                </div>
            </CartProvider>
        </>
    );
};

export default App;
