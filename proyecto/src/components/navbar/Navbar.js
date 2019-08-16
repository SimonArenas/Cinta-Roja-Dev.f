import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div>
              <body data-spy="scroll" data-target="#navbar" class="static-layout">

<nav id="header-navbar" className="navbar navbar-expand-lg py-4">
    <div className="container">
        <a className="navbar-brand d-flex align-items-center text-white" href="/">
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-nav-header" aria-controls="navbar-nav-header" aria-expanded="false" aria-label="Toggle navigation">
            <span className="lnr lnr-menu"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-nav-header">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    
                    <button type="button" className="btn btn-warning" href="login.html">Inicia sesión</button>
                </li>
               
            </ul>
        </div>
    </div>
</nav>

<div id="side-nav" className="sidenav">
	
    <img src="https://i.ibb.co/1TjY1wQ/primera.png"
    width="100%"/>

</div>

<p>hola</p>
</body>
            </div>
           
        )
    }
}

export default Navbar
