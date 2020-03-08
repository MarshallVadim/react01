import React, {Component} from 'react';
import {Button, Form, FormControl, Nav, Navbar, Container} from 'react-bootstrap';
import logo from '../Images/logo192.png'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './Header.css'

import Home from '../../Pages/Home';
import About from '../../Pages/About';
import Contacts from '../../Pages/Contacts';
import Blog from '../../Pages/Blog';

class Header extends Component {
    render() {
        return (
            <>
                <div class="hero-anime">

                    <div class="navigation-wrap bg-light start-header start-style">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <nav class="navbar navbar-expand-md navbar-light">

                                        <Navbar.Brand href={'/'}>
                                            <img
                                                src={logo}
                                                height={30}
                                                width={30}
                                                className={'d-inline-block align top'}
                                                alt={'Logo'}
                                            /> React site
                                        </Navbar.Brand>

                                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                                                data-target="#navbarSupportedContent"
                                                aria-controls="navbarSupportedContent" aria-expanded="false"
                                                aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"></span>
                                        </button>

                                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul class="navbar-nav ml-auto py-4 py-md-0">
                                                <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                                    <a class="nav-link" href={'/'}>Portfolio</a>
                                                </li>
                                                <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                                    <a class="nav-link" href={'/about'}>Agency</a>
                                                </li>
                                                <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                                    <a class="nav-link" href={'/contacts'}>Journal</a>
                                                </li>
                                                <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                                    <a class="nav-link" href={'/blog'}>Contact</a>
                                                </li>
                                            </ul>
                                        </div>

                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div class="section full-height">*/}
                    {/*    <div class="absolute-center">*/}
                    {/*        <div class="section">*/}
                    {/*            <div class="container">*/}
                    {/*                <div class="row">*/}
                    {/*                    <div class="col-12">*/}

                    {/*                        <p>scroll for nav animation</p>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div class="section mt-5">*/}
                    {/*            <div class="container">*/}
                    {/*                <div class="row">*/}
                    {/*                    <div class="col-12">*/}
                    {/*                        <div id="switch">*/}
                    {/*                            <div id="circle"></div>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div class="my-5 py-5">*/}
                    {/*</div>*/}
                    {/*<a href="https://themeforest.net/user/ig_design/portfolio" class="link-to-portfolio"*/}
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
            </>
        );
    }
}

export default Header;