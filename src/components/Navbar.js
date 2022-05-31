import './Navbar.css';
import React from 'react'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav" id="navitem1">
                        <li className="nav-item">
                            <a className={`nav-link active text-${props.mode === "light"?"black":"white"}`} aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link active text-${props.mode === "light"?"black":"white"}`} href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link active text-${props.mode === "light"?"black":"white"}`} href="#">About</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.facebook.com/" target="_blank">
                                <i className={`fa-brands fa-facebook text-${props.mode === "light"?"black":"white"}`}></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.instagram.com/" target="_blank">
                                <i className={`fa-brands fa-instagram text-${props.mode === "light"?"black":"white"}`}></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.twitter.com/" target="_blank">
                                <i className={`fa-brands fa-twitter text-${props.mode === "light"?"black":"white"}`}></i>
                            </a>
                        </li>
                    </ul>
                </div>
                    <div className="form-check form-switch mx-3">
                        <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                    </div>
            </div>
        </nav>
    )
}
