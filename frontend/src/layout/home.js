import Carousel from 'react-bootstrap/Carousel';
import slide00 from '../img/slide00.jpg'
import slide02 from '../img/slide02.jpg'
import slide003 from '../img/slide003.jpg'
import slide04 from '../img/slide04.jpg'
import React from 'react';

function Home(props) {
    return (
        <div className={"row"}>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide00} width="1200" height="700"
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide02} width="1200" height="700"
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide003} width="1200" height="700"
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide04} width="1200" height="700"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
        );
}

export default Home;