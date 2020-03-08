import React, {Component} from 'react';
import {Button, Form, FormControl, Nav, Navbar, Container} from 'react-bootstrap';
import logo from '../Images/logo192.png'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './Header.css'

import { add, log } from '../Utils.js';

import Home from '../../Pages/Home';
import About from '../../Pages/About';
import Contacts from '../../Pages/Contacts';
import Blog from '../../Pages/Blog';

class Header extends Component {
    render() {
        // console.log(add(2, 3));
        console.log(add(2, 3));
        log('test')
        return (
            <div>
                <div className="hero-anime">

                    <div className="navigation-wrap bg-light start-header start-style">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <nav className="navbar navbar-expand-md navbar-light">

                                        <Navbar.Brand href={'/'}>
                                            <img
                                                src={logo}
                                                height={30}
                                                width={30}
                                                className={'d-inline-block align top'}
                                                alt={'Logo'}
                                            /> React site
                                        </Navbar.Brand>

                                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                                data-target="#navbarSupportedContent"
                                                aria-controls="navbarSupportedContent" aria-expanded="false"
                                                aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>

                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul className="navbar-nav ml-auto py-4 py-md-0">
                                                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                                    <a className="nav-link" href={'/'}>Portfolio</a>
                                                </li>
                                                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                                    <a className="nav-link" href={'/about'}>Agency</a>
                                                </li>
                                                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                                    <a className="nav-link" href={'/contacts'}>Journal</a>
                                                </li>
                                                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                                    <a className="nav-link" href={'/blog'}>Contact</a>
                                                </li>
                                            </ul>
                                        </div>

                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div className="section full-height">*/}
                    {/*    <div className="absolute-center">*/}
                    {/*        <div className="section">*/}
                    {/*            <div className="container">*/}
                    {/*                <div className="row">*/}
                    {/*                    <div className="col-12">*/}

                    {/*                        <p>scroll for nav animation</p>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="section mt-5">*/}
                    {/*            <div className="container">*/}
                    {/*                <div className="row">*/}
                    {/*                    <div className="col-12">*/}
                    {/*                        <div id="switch">*/}
                    {/*                            <div id="circle"></div>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="my-5 py-5">*/}
                    {/*</div>*/}
                    {/*<a href="https://themeforest.net/user/ig_design/portfolio" className="link-to-portfolio"*/}
                    {/*   target='_blank'></a>*/}
                </div>
                <Router>
                    <Switch>
                        <Route exact path={'/'} component={Home}/>
                        <Route exact path={'/about'} component={About}/>
                        <Route exact path={'/contacts'} component={Contacts}/>
                        <Route exact path={'/blog'} component={Blog}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Header;