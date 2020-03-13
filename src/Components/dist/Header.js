import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';
import logo from '../../Images/logo192.png'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
// import './Css/Header.css'


import Home from '../../../Pages/Home';
import About from '../../../Pages/About';
import Contacts from '../../../Pages/Contacts/Contacts';
import Blog from '../../../Pages/Blog';

class Header extends Component {
    render() {

        const header = document.querySelector('.my-main-header');
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY;
            if(scrollPos >= 10){
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        return (
<>
                <header className="main-header">
                    <div className="logo">
                        <a href="#">LOGO</a>
                    </div>

                    <input type="checkbox" className="menu-btn" id="menu-btn"/>
                        <label htmlFor="menu-btn" className="menu-icon">
                            <span className="menu-icon__line"></span>
                        </label>

                        <ul className="nav-links">
                            <li className="nav-link">
                                <a href="#">About</a>
                            </li>
                            <li className="nav-link">
                                <a href="#">Portfolio</a>
                            </li>
                            <li className="nav-link">
                                <a href="#">Services</a>
                            </li>
                            <li className="nav-link">
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                </header>

                <div className="hero">
                    <h1>Hero Text</h1>
                </div>

                <div className="container">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi officiis a adipisci deleniti
                        deserunt amet ea eligendi, ducimus qui fugit!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias eaque debitis, accusamus hic
                        laudantium obcaecati quibusdam ex iste, consectetur, praesentium consequatur numquam nemo nihil
                        quaerat. Nulla laudantium impedit dignissimos suscipit libero iusto error, architecto soluta
                        fuga, sit exercitationem recusandae quibusdam animi! Veniam vero aperiam nemo laboriosam
                        inventore qui ratione praesentium?</p>
                </div>
      </>

        );
    }
}

export default Header;