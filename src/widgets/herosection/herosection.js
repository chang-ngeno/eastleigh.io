import React, { Component } from 'react';
import {  Row,Container } from 'reactstrap';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
window.fn = OwlCarousel;

class Herosection extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <section className="banner pos-r p-0">
                 <OwlCarousel
                    className="banner-slider owl-carousel no-pb owl-2"
                    dots={false}
                    nav
                    items={1}
                    autoplay={true}
                    navText={["<span class='las la-arrow-left'><span></span></span>","<span class='las la-arrow-right'><span></span></span>"]}
                  >
                    <div className="item bg-pos-rt"  style={{ backgroundImage: `url(${require(`../../assets/images/bg/01.jpg`)})` }}>
                        <Container className="h-100">
                            <Row className="h-100 align-items-center">
                                <div className="col-lg-7 col-md-12 custom-py-1 position-relative z-index-1">
                                    <h6 className="font-w-6 text-primary animated3">Welcome Ekocart</h6>
                                    <h1 className="mb-4 animated3">A New Online<br /> Shop experience</h1>
                                    <div className="animated3">
                                        <Link className="btn btn-primary btn-animated" to="#">Shop Now</Link>
                                    </div>
                                    <div className="hero-circle animated4" />
                                </div>
                            </Row>
                        </Container>
                    </div>
                    <div className="item bg-pos-rt"   style={{ backgroundImage: `url(${require(`../../assets/images/bg/02.jpg`)})` }} >
                        <Container className="h-100">
                            <Row className="h-100 align-items-center">
                                <div className="col-lg-7 col-md-12 custom-py-1 position-relative z-index-1">
                                    <h6 className="font-w-6 text-primary animated3">2020 Latest Style</h6>
                                    <h1 className="mb-4 animated3">Trending Men's Collection</h1>
                                    <div className="animated3">
                                        <Link className="btn btn-primary btn-animated" to="#">View Collection</Link>
                                    </div>
                                    <div className="hero-circle animated4" />
                                </div>
                            </Row>
                        </Container>
                    </div>
                </OwlCarousel>
            </section>
        );
    }
}

export default Herosection;