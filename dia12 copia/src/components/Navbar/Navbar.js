import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div>
            <ul className="nav">
  <li className="nav-item">
    <a className="nav-link active" href="/">Active</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="/" aria-disabled="true">Disabled</a>
  </li>
</ul>
            </div>
        )
    }
}

export default Navbar
