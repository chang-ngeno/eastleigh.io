import React, { Component } from 'react';
import {  Row,Col,Container } from 'reactstrap';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
window.fn = OwlCarousel;

class Herosection1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                loop: true,
                dots:false,
                nav:false,
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
                <div className="container-fluid px-lg-8">
                <Row>
                    <Col lg={3}>
                    <nav className="navbar navbar-expand-lg navbar-light categories d-block shadow-sm">
                        <button className="navbar-toggler d-flex align-items-center text-uppercase" type="button" data-toggle="collapse" data-target="#categoriesDropdown" aria-controls="categoriesDropdown" aria-expanded="false" aria-label="Toggle navigation"> <i className="las la-stream" />Categories</button>
                        <div className="collapse navbar-collapse" id="categoriesDropdown">
                        <ul className="navbar-nav d-block w-100">
                            <li className="nav-item"> <Link className="nav-link" to="#">Men</Link>
                            </li>
                            <li className="nav-item"> <Link className="nav-link" to="#">Women</Link>
                            </li>
                            <li className="nav-item"> <Link className="nav-link" to="#">Kids</Link>
                            </li>
                            <li className="nav-item"> <Link className="nav-link" to="#">Accessories</Link>
                            </li>
                            <li className="nav-item"> <Link className="nav-link" to="#">Clothing</Link>
                            </li>
                            <li className="nav-item"> <Link className="nav-link" to="#">Bags</Link>
                            </li>
                            <li className="nav-item"> <Link className="nav-link" to="#">Footwear</Link>
                            </li>
                            <li className="nav-item"> <Link className="nav-link" to="#">Watches</Link>
                            </li>
                            <li className="nav-item"> <Link className="nav-link" to="#">Jewellery</Link>
                            </li>
                        </ul>
                        </div>
                    </nav>
                    </Col>
                    <Col lg={9}>
                    {/* <div className="banner-slider owl-carousel no-pb h-100" data-dots="false" data-margin={5}> */}
                        <OwlCarousel
                            className="banner-slider owl-carousel no-pb h-100"
                            {...this.state.options}
                            dotData="false"

                        >
                        <div className="item bg-pos-rt"  style={{ backgroundImage: `url(${require(`../../assets/images/bg/06.jpg`)})` }}>
                            <Container className="h-100">
                            <Row className="h-100 align-items-center">
                                <div className="col pl-lg-8 py-11 py-lg-0">
                                <h6 className="letter-space-1 animated3">New Arrival</h6>
                                <h1 className="mb-4 animated3 text-white line-h-1">Trendy<br /> <span className="bg-dark px-2 pt-2 text-uppercase">Fashion</span> Sale</h1>
                                </div>
                            </Row>
                            </Container>
                        </div>
                        <div className="item bg-pos-rt" style={{ backgroundImage: `url(${require(`../../assets/images/bg/05.jpg`)})` }}>
                            <Container className="h-100">
                            <Row className="h-100 align-items-center">
                                <div className="col pl-lg-8">
                                <h1 className="mb-4 animated3 text-white">Simplify<br /> Everything</h1>
                                <div className="animated3"> <Link className="btn btn-dark" to="#">Shop Now</Link>
                                </div>
                                </div>
                            </Row>
                            </Container>
                        </div>
                    </OwlCarousel>
                    </Col>
                </Row>
                </div>
            </section>
            );
        }
    }
    
    export default Herosection1;