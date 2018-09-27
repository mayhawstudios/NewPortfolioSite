import React, { Component } from 'react';

const Header = () => {
    return( 
        <nav className="navbar sticky-top navbar-light bg-light">
            <a className="navbar-brand" href="/">Mayhaw Studios</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navagationMenu" aria-controls="navigationMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navigationMenu">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="/">About</a>
                    <a className="nav-item nav-link" href="/">Projects</a>
                    <a className="nav-item nav-link" href="/">Resume</a>
                    <a className="nav-item nav-link" href="/">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Header;