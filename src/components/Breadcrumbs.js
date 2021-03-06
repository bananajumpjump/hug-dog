import React from 'react'
import { withRouter, Link } from 'react-router-dom'

function Breadcrumb(props) {
  console.log(props)
  return (
    <>
      <nav>
        <ul className="list-group list-group-horizontal border-0 p-0">
          <li className="list-group-item border-0 p-0">
            <Link to="/">Home</Link>
          </li>
          <li className="list-group-item border-0 p-0">
            {props.location.pathname}
          </li>
          {/* <li className="list-group-item border-0 p-0">
            {props.location.pathname}
          </li> */}
          {/* <li className="list-group-item border-0 p-0">
            {props.location.pathname}
          </li> */}
        </ul>
      </nav>
    </>
  )
}
export default withRouter(Breadcrumb)
