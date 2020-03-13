import React, {Component} from 'react';
import './ContentHeader.scss'
import logo from '../Images/dla-interim-managerow-2-1920x1020.jpg'

class ContentHeader extends Component {
    render() {
        return (
            <>
                <header className="mainHeading">
                    <div className="mainHeading__content">
                        <article className="mainHeading__text">
                            <p className="mainHeading__preTitle">hello</p>
                            <h2 className="mainHeading__title">my name is jared leto</h2>
                            <p className="mainHeading__description">
                                And I present to you a real estate center in the city of Khmelnitsky.
                            </p>
                            <button className="cta">know more</button>
                        </article>

                        <figure className="mainHeading__image">
                            <img
                                src={logo}
                                alt=""
                            />
                        </figure>
                    </div>
                </header>
            </>
        );
    }
}

export default ContentHeader;