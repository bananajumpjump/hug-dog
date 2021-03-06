import React from 'react'
import { Nav, Navbar, Form, Button, Col, Row } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import { FiSearch, FiHeart } from 'react-icons/fi'
import { GiTicket } from 'react-icons/gi'
import { IconContext } from 'react-icons'
import '../../css/marketing/coupon.scss'
function CouponNav(props) {
  return (
    <>
      <div className="marketing">
        <head className="border-bottom mb-3 justify-content-center d-flex">
          <Nav bg="white" variant="light" expand="md">
            <Nav className="mr-auto nav-menu">
              <Nav.Link href="/coupon">優惠卷輸入</Nav.Link>
              <Nav.Link href="/coupon/event">取得優惠卷</Nav.Link>
              <Nav.Link href="/coupon/description">優惠卷說明</Nav.Link>
              <Nav></Nav>
              <div className="marketing-nav"></div>
            </Nav>
          </Nav>
        </head>
      </div>
    </>
  )
}

export default CouponNav
