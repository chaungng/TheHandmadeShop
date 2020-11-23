import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import { store } from './store/store'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path={'/'} render={() => {
              return <Redirect to={'/products'} />
            }} />

            <Route exact path={'/products'} component={HomePage} />
            <Route exact path={'/products/all'} render={() => {
              return <Redirect to={'/products'} />
            }} />
            <Route exact path={'/products/:id'} component={ProductDetailPage} />
            {/* <Route exact patr={'/cart'} component={ShoppingCart}/> */}
          </Switch>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
