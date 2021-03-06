import React, {Component} from 'react';
import $ from 'jquery';
import bgImg from './Images/bg-01.jpg'
import './Css/Contacts.css'
import './Css/Util.css'
import './Css/icon-font.min.css'
import '../../Animation.css'


class Contacts extends Component {
    render() {
        $(function () {
            "use strict";

            /*==================================================================
            [ Validate ]*/
            var input = $('.validate-input .input100');

            $('.validate-form').on('submit', function () {
                var check = true;

                for (var i = 0; i < input.length; i++) {
                    if (validate(input[i]) == false) {
                        showValidate(input[i]);
                        check = false;
                    }
                }
                return check;
            });


            $('.validate-form .input100').each(function () {
                $(this).focus(function () {
                    hideValidate(this);
                });
            });

            function validate(input) {
                if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
                    if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                        return false;
                    }
                } else {
                    if ($(input).val().trim() == '') {
                        return false;
                    }
                }
            }

            function showValidate(input) {
                var thisAlert = $(input).parent();

                $(thisAlert).addClass('alert-validate');
            }

            function hideValidate(input) {
                var thisAlert = $(input).parent();

                $(thisAlert).removeClass('alert-validate');
            }
        });

        return (
            <>
                <div className='container-contact100'>
                    <div className="wrap-contact100">
                        <form className="contact100-form validate-form animated bounceInRight">
				<span className="contact100-form-title">
					Send Us A Message
				</span>

                            <label className="label-input100" htmlFor="first-name">Tell us your name *</label>
                            <div className="wrap-input100 rs1-wrap-input100 validate-input"
                                 data-validate="Type first name">
                                <input id="first-name" className="input100" type="text" name="first-name"
                                       placeholder="First name"/>
                                <span className="focus-input100"></span>
                            </div>
                            <div className="wrap-input100 rs2-wrap-input100 validate-input"
                                 data-validate="Type last name">
                                <input className="input100" type="text" name="last-name" placeholder="Last name"/>
                                <span className="focus-input100"></span>
                            </div>

                            <label className="label-input100" htmlFor="email">Enter your email *</label>
                            <div className="wrap-input100 validate-input"
                                 data-validate="Valid email is required: ex@abc.xyz">
                                <input id="email" className="input100" type="text" name="email"
                                       placeholder="Eg. example@email.com"/>
                                <span className="focus-input100"></span>
                            </div>

                            <label className="label-input100" htmlFor="phone">Enter phone number</label>
                            <div className="wrap-input100">
                                <input id="phone" className="input100" type="text" name="phone"
                                       placeholder="Eg. +1 800 000000"/>
                                <span className="focus-input100"></span>
                            </div>

                            <label className="label-input100" htmlFor="message">Message *</label>
                            <div className="wrap-input100 validate-input" data-validate="Message is required">
                            <textarea id="message" className="input100" name="message"
                                      placeholder="Write us a message"></textarea>
                                <span className="focus-input100"></span>
                            </div>

                            <div className="container-contact100-form-btn">
                                <button className="cta">
                                    Send Message
                                </button>
                            </div>
                        </form>

                        <div className="contact100-more flex-col-c-m animated bounceInLeft" style={{backgroundImage: "url(" + bgImg + ")"}}>
                            <div className="flex-w size1 p-b-47">
                                <div className="txt1 p-r-25">
                                    <span className="lnr lnr-map-marker"></span>
                                </div>

                                <div className="flex-col size2">
						<span className="txt1 p-b-20">
							Address
						</span>

                                    <span className="txt2">
							Mada Center 8th floor, 379 Hudson St, New York, NY 10018 US
						</span>
                                </div>
                            </div>

                            <div className="dis-flex size1 p-b-47">
                                <div className="txt1 p-r-25">
                                    <span className="lnr lnr-phone-handset"></span>
                                </div>

                                <div className="flex-col size2">
						<span className="txt1 p-b-20">
							Lets Talk
						</span>

                                    <span className="txt3">
							+1 800 1236879
						</span>
                                </div>
                            </div>

                            <div className="dis-flex size1 p-b-47">
                                <div className="txt1 p-r-25">
                                    <span className="lnr lnr-envelope"></span>
                                </div>

                                <div className="flex-col size2">
						<span className="txt1 p-b-20">
							General Support
						</span>

                                    <span className="txt3">
							contact@example.com
						</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="dropDownSelect1"></div>
            </>
        );
    }
}

export default Contacts;