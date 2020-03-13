import React, {Component} from 'react';

class ContentHeader extends Component {
    render() {
        return (
            <>
                <div class="mainNav__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g data-name="Layer 2" fill="#9197AE">
                            <g data-name="menu-2">
                                <rect
                                    width="24"
                                    height="24"
                                    transform="rotate(180 12 12)"
                                    opacity="0"
                                />
                                <circle cx="4" cy="12" r="1"/>
                                <rect x="7" y="11" width="14" height="2" rx=".94" ry=".94"/>
                                <rect x="3" y="16" width="18" height="2" rx=".94" ry=".94"/>
                                <rect x="3" y="6" width="18" height="2" rx=".94" ry=".94"/>
                            </g>
                        </g>
                    </svg>
                </div>
                <header class="mainHeading">
                    <div class="mainHeading__content">
                        <article class="mainHeading__text">
                            <p class="mainHeading__preTitle">nature</p>
                            <h2 class="mainHeading__title">behind the mountains</h2>
                            <p class="mainHeading__description">
                                Far far away, behind the word mountains, far from the countries
                                Vokalia and Consonantia, there live the blind texts.
                            </p>
                            <button class="cta">know more</button>
                        </article>

                        <figure class="mainHeading__image">
                            <img
                                src="https://images.unsplash.com/photo-1520856707909-75c4048cc858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
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