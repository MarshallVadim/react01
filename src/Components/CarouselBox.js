import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import picImg from './Images/dla-interim-managerow-2-1920x1020.jpg'
import picImg2 from '../assets/GalleryFlash_103.jpg'

class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className = {'d-block w-100'}
                        src = {picImg}
                    />
                    <Carousel.Caption>
                        <h3>Text</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deserunt eius harum mollitia omnis ullam!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className = {'d-block w-100'}
                        src = {picImg2}
                    />
                    <Carousel.Caption>
                        <h3>Text</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deserunt eius harum mollitia omnis ullam!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBox;