import React from 'react';
import './Banner.css';


function Banner() {

    return (
        <div className="banner">
            <div className="banner_img_wrapper">
                <img className="banner__image" src="https://images.pexels.com/photos/3700369/pexels-photo-3700369.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <div className="banner__overlay">
                    <h2 className="overlay__text">TITLE</h2>
                </div>
            </div>
            <div className="banner_img_wrapper">
                <img className="banner__image" src="https://images.pexels.com/photos/364096/pexels-photo-364096.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <div className="banner__overlay">
                    <h2 className="overlay__text">TITLE</h2>
                </div>
            </div>
            <div className="banner_img_wrapper">
                <img className="banner__image" src="https://images.pexels.com/photos/2411688/pexels-photo-2411688.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <div className="banner__overlay">
                    <h2 className="overlay__text">TITLE</h2>
                </div>
            </div>
            <div className="banner_img_wrapper">
                <img className="banner__image" src="https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <div className="banner__overlay">
                    <h2 className="overlay__text">TITLE</h2>
                </div>
            </div>
            <div className="banner_img_wrapper">
                <img className="banner__image" src="https://images.pexels.com/photos/1755683/pexels-photo-1755683.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <div className="banner__overlay">
                    <h2 className="overlay__text">TITLE</h2>
                </div>
            </div>
        </div>
    )
}

export default Banner