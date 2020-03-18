import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Blog from './pages/Knowledge/Blog'
import Partner from './pages/Knowledge/Partner'
import Question from './pages/Knowledge/Question'
import Product from './pages/Product/Product'
import ProductDetail from './pages/Product/ProductDetail'
import Member from './pages/member/Member'
import Cart from './pages/Product/Cart'
import Checkout from './pages/Product/Checkout'
import Service from './pages/service/ServiceHome'
import Coupon from './pages/Marketing/Coupon'
import Order from './pages/Product/Order'
import Activity from './pages/Activity/Activity'

function App() {
  return (
    <Router>
      <>
        <Header />
        <section className="body">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/member">
              <Member />
            </Route>
            <Route path="/service">
              <Service />
            </Route>
            <Route path="/activity">
              <Activity />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/partner">
              <Partner />
            </Route>
            <Route path="/question">
              <Question />
            </Route>
            <Route exact path="/product">
              <Product />
            </Route>
            <Route path="/product/:pId?">
              <ProductDetail />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/coupon">
              <Coupon />
            </Route>
            <Route path="/order">
              <Order />
            </Route>
          </Switch>
        </section>
        <Footer />
      </>
    </Router>
  )
}

export default App
