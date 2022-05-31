import React from 'react';
import "./Blog.css"

export default function Blog(props) {
    return (
        <>
        <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav" id="navitem1">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className={`fa-brands fa-accusoft text-${props.mode === "light"?"black":"white"}`}></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <div className={`fixeditem1 text-${props.mode === "light"?"black":"white"}`}>
                                Draft
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className={`fixeditem1 text-${props.mode === "light"?"black":"white"}`}>
                                Saved...
                            </div>
                        </li>
                    </ul>
                    <button type="button" className={`btn btn-primary text-${props.mode === "light"?"black":"white"} bg-${props.mode}`}>Publish</button>
                </div>
            </div>
        </nav>
        <div className="textbox">
            <textarea type="text" className='blogtitle'/>
            <textarea type="text" className='blogarea'/>
        </div>
        </>
    )
}