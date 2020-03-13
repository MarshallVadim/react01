import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';
import logo from '../Images/logo192.png'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './Header.css'
import $ from 'jquery';

import Home from '../../Pages/Home';
import About from '../../Pages/About';
import Contacts from '../../Pages/Contacts/Contacts';
import Blog from '../../Pages/Blog';

class Header extends Component {
    render() {

        $(function () {
            var header = $(".start-style-header");
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();

                if (scroll >= 10) {
                    header.removeClass('start-style').addClass("scroll-on");
                } else {
                    header.removeClass("scroll-on").addClass('start-style');
                }
            });
        });

        //Animation

        $(document).ready(function () {
            $('.hero-anime-header').removeClass('hero-anime-header');
        });

        //Menu On Hover

        $('body').on('mouseenter mouseleave', '.nav-item-header', function (e) {
            if ($(window).width() > 750) {
                var _d = $(e.target).closest('.nav-item-header');
                _d.addClass('show');
                setTimeout(function () {
                    _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
                }, 1);
            }
        });

        return (
            <Router>

                    <div className="hero-anime-header">
                        <div className="navigation-wrap-header bg-light-header start-header start-style-header">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <nav className="navbar navbar-expand-md navbar-light-header">

                                            <Link to={'/'}><Navbar.Brand>
                                                <img
                                                    src={logo}
                                                    height={30}
                                                    width={30}
                                                    className={'d-inline-block align top'}
                                                    alt={'Logo'}
                                                /><a className="logo-text-header" href={'/'}> React site </a>
                                            </Navbar.Brand></Link>

                                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                                    data-target="#navbarSupportedContent"
                                                    aria-controls="navbarSupportedContent" aria-expanded="false"
                                                    aria-label="Toggle navigation">
                                                <span className="navbar-toggler-icon"></span>
                                            </button>

                                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                                <ul className="navbar-nav ml-auto py-4 py-md-0">
                                                    <Link className="link-header" to={'/'}>
                                                        <li className="nav-item-header pl-4 pl-md-0 ml-0 ml-md-4"> Home</li>
                                                    </Link>
                                                    <Link className="link-header" to={'/about'}>
                                                        <li className="nav-item-header pl-4 pl-md-0 ml-0 ml-md-4"> About</li>
                                                    </Link>
                                                    <Link className="link-header" to={'/contacts'}>
                                                        <li className="nav-item-header pl-4 pl-md-0 ml-0 ml-md-4"> Contacts</li>
                                                    </Link>
                                                    <Link className="link-header" to={'/blog'}>
                                                        <li className="nav-item-header pl-4 pl-md-0 ml-0 ml-md-4"> Blog</li>
                                                    </Link>
                                                </ul>
                                            </div>

                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Switch>
                        <Route exact path={'/'} component={Home}/>
                        <Route exact path={'/about'} component={About}/>
                        <Route exact path={'/contacts'} component={Contacts}/>
                        <Route exact path={'/blog'} component={Blog}/>
                    </Switch>

            </Router>
        );
    }
}

export default Header;