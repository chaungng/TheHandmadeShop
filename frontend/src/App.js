import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';
import ShoppingCartPage from './pages/ShoppingCartPage/ShoppingCartPage';



function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path={'/'} render={() => {
            return <Redirect to={'/products'} />
          }} />

          <Route exact path={'/products'} component={HomePage} />

          <Route exact path={'/category/all'} render={() => {
            return <Redirect to={'/products'} />
          }} />

          <Route exact path={'/category/:category'} component={CategoryPage} />

          <Route exact path={'/products/:id'} component={ProductDetailPage} />

          <Route exact path={'/cart'} component={ShoppingCartPage} />
        </Switch>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
