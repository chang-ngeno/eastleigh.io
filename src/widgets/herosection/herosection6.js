import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
window.fn = OwlCarousel;

class Herosection6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                loop: true,
                nav:true,
                dots: false,
                responsive:{
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 1,
                    },
                    1000: {
                        items: 1,
                    },
                },
            },
        };
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <section className="banner pos-r p-0">
                <OwlCarousel
                        className="banner-slider owl-carousel no-pb owl-2"
                        {...this.state.options}
                        dots={false}
                        navText={["<span class='las la-arrow-left'><span></span></span>","<span class='las la-arrow-right'><span></span></span>"]}
                    >
                    <div className="item bg-pos-rb" style={{ backgroundImage: `url(${require(`../../assets/images/kids/bg/01.jpg`)})` }}>
                        <Container className="h-100">
                            <Row className="h-100 align-items-center text-center">
                                <Col lg={6} md={12} className="custom-py-1 position-relative z-index-1">
                                    <h6 className="font-w-6 text-primary animated3">Welcome Ekocart Kids</h6>
                                    <h1 className="mb-4 animated3">New Arrival<br /> Kids Toys</h1>
                                    <div className="animated3">
                                        <Link className="btn btn-primary btn-animated" to="#">Shop Now</Link>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="item" style={{ backgroundImage: `url(${require(`../../assets/images/kids/bg/02.jpg`)})` }}>
                        <Container className="h-100">
                            <Row className="h-100 align-items-center text-center">
                                <Col lg={6} md={12} className="custom-py-1 position-relative z-index-1">
                                    <h6 className="font-w-6 text-primary animated3">2020 Latest Style</h6>
                                    <h1 className="mb-4 animated3">Trending Men's Collection</h1>
                                    <div className="animated3">
                                        <Link className="btn btn-primary btn-animated" to="#">View Collection</Link>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </OwlCarousel>
            </section>
        );
    }
}

export default Herosection6;



