import React, { Component } from 'react'
import "./Container4.css";

export default function Container4() {
    return (
        <>
            <div className="flexbox-cont4">
                <div className="flexbox-item flexbox-c4i-1">
                    <div className="grid-item grid-c4ia-1"/>
                    <div className="grid-item grid-c4i-2">
                        <i className="fa-solid fa-circle-user" id="uicon"></i>
                        <p className='c4p1'>
                            Admin <br />
                            Date: 11/04/2018
                        </p>
                    </div>
                    <div className="grid-item grid-c4i-3">
                        <h1>Title 1</h1>
                        <p className="c4p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptate! Perspiciatis sed repellendus explicabo maxime nisi repudiandae quibusdam quo repellat, nemo facere corrupti illum? Mollitia eveniet soluta nihil culpa sapiente, doloremque a perferendis optio!....</p>
                        <hr />
                    </div>
                    <div className="grid-item grid-c4i-4">
                        <span>0 views</span>
                        <i className="fa-solid fa-heart"></i>
                    </div>
                </div>
                <div className="flexbox-item flexbox-c4i-2">
                    <div className="grid-item grid-c4ib-1"/>
                    <div className="grid-item grid-c4i-2">
                        <i className="fa-solid fa-circle-user" id="uicon"></i>
                        <p className='c4p1'>
                            Admin <br />
                            Date: 27/05/2020
                        </p>
                    </div>
                    <div className="grid-item grid-c4i-3">
                        <h1>Title 2</h1>
                        <p className="c4p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptate! Perspiciatis sed repellendus explicabo maxime nisi repudiandae quibusdam quo repellat, nemo facere corrupti illum? Mollitia eveniet soluta nihil culpa sapiente, doloremque a perferendis optio!....</p>
                        <hr />
                    </div>
                    <div className="grid-item grid-c4i-4">
                        <span>10 views</span>
                        <i className="fa-solid fa-heart"></i>
                    </div>
                </div>
                <div className="flexbox-item flexbox-c4i-3">
                    <div className="grid-item grid-c4ic-1"/>
                    <div className="grid-item grid-c4i-2">
                        <i className="fa-solid fa-circle-user" id="uicon"></i>
                        <p className='c4p1'>
                            Admin <br />
                            Date: 20/09/2017
                        </p>
                    </div>
                    <div className="grid-item grid-c4i-3">
                        <h1>Title 3</h1>
                        <p className="c4p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptate! Perspiciatis sed repellendus explicabo maxime nisi repudiandae quibusdam quo repellat, nemo facere corrupti illum? Mollitia eveniet soluta nihil culpa sapiente, doloremque a perferendis optio!....</p>
                        <hr />
                    </div>
                    <div className="grid-item grid-c4i-4">
                        <span>5 views</span>
                        <i className="fa-solid fa-heart"></i>
                    </div>
                </div>
            </div>
        </>
    )
}