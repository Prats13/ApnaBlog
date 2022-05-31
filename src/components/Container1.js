import React from 'react';
import './Container2.css';

export default function Container1() {
    return (
        <>
        <div className='textarea1'>
            Creating Blogs lead to creating masterpiece
        </div>
        <img src="/cont1.jpg" className='bg' alt=""></img>
        <div className="textarea2">
            <input type="text" className="searchbar" placeholder="Search.."/>
            <a className="searchlink" href="https://www.youtube.com/" target="_blank">
                <i className="fa-solid fa-magnifying-glass" id="sicon"></i>
            </a>
        </div>
        </>
    )
}