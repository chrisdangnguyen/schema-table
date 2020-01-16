import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import Modal from './modal/modal';
import NavbarContainer from './navbar/navbar_container';
import CreateProductContainer from './product/create_product_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Homepage from './homepage/homepage';
import Footerbar from './footer/footer';
import ProductIndexContainer from './product/product_index_container';



const App = () => (
    <div>
        <Modal />
        <header>
            <NavbarContainer />
        </header>
        <Switch>
            <Route exact path="/products" component={ProductIndexContainer} />
            <Route exact path="/products/productId" component={ProductIndexContainer} />
            <ProtectedRoute exact path="/products/new" component={CreateProductContainer} /> 
            {/* <ProtectedRoute exact path="/products/productId/:edit" component={} /> */}
            <Route exact path="/categories/:type" componenent={ProductIndexContainer} />
            <Route exact path="/" component={Homepage} />
        </Switch>
        <footer>
            <Footerbar />
        </footer>
    </div>
);

export default App;