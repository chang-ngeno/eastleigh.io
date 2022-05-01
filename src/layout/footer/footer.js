import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

class Footer extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <footer className="py-11 bg-dark">
                <Container>
                    <Row>
                        <div className="col-12 col-lg-3"> <Link className="footer-logo text-white h2 mb-0" to="/">
                            Eko<span className="text-primary">cart</span>
                        </Link>
                            <p className="my-3 text-muted">Ekocart - Multi-purpose E-commerce Html5 Template Is fully responsible, Build whatever you like with the Ekocart, Ekocart is the creative, modern HTML5 Template suitable for Your business.</p>
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item"><Link className="text-light ic-2x" to="#"><i className="la la-facebook" /></Link>
                                </li>
                                <li className="list-inline-item"><Link className="text-light ic-2x" to="#"><i className="la la-dribbble" /></Link>
                                </li>
                                <li className="list-inline-item"><Link className="text-light ic-2x" to="#"><i className="la la-instagram" /></Link>
                                </li>
                                <li className="list-inline-item"><Link className="text-light ic-2x" to="#"><i className="la la-twitter" /></Link>
                                </li>
                                <li className="list-inline-item"><Link className="text-light ic-2x" to="#"><i className="la la-linkedin" /></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-6 mt-6 mt-lg-0">
                            <Row>
                                <div className="col-12 col-sm-4 navbar-dark">
                                    <h5 className="mb-4 text-white">Quick Links</h5>
                                    <ul className="navbar-nav list-unstyled mb-0">
                                        <li className="mb-3 nav-item"><Link className="nav-link" to="/">Home</Link>
                                        </li>
                                        <li className="mb-3 nav-item"><Link className="nav-link" to="/about-us">About</Link>
                                        </li>
                                        <li className="mb-3 nav-item"><Link className="nav-link" to="/grid-left-sidebar">Shop</Link>
                                        </li>
                                        <li className="mb-3 nav-item"><Link className="nav-link" to="/faq">Faq</Link>
                                        </li>
                                        <li className="mb-3 nav-item"><Link className="nav-link" to="/blog-listing-1">Blogs</Link>
                                        </li>
                                        <li className="nav-item"><Link className="nav-link" to="/contact-us">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 col-sm-4 mt-6 mt-sm-0 navbar-dark">
                                    <h5 className="mb-4 text-white">Top Products</h5>
                                    <ul className="navbar-nav list-unstyled mb-0">
                                        <li className="mb-3 nav-item"><Link className="nav-link" to="/grid-left-sidebar">T-Shirts</Link>
                                        </li>
                                        <li className="mb-3 nav-item"><Link className="nav-link" to="/grid-left-sidebar">Sneakers &amp; Athletic</Link>
                                        </li>
                                        <li className="mb-3 nav-item"><Link className="nav-link" to="/grid-left-sidebar">Shirts &amp; Tops</Link>
                                        </li>
                                        <li className="mb-3 nav-item"><Link className="nav-link" to="/grid-left-sidebar">Sunglasses</Link>
                                        </li>
                                        <li className="mb-3 nav-item"><Link className="nav-link" to="/grid-left-sidebar">Bags &amp; Wallets</Link>
                                        </li>
                                        <li className="mb-3 nav-item"><Link className="nav-link" to="/grid-left-sidebar">Accessories</Link>
                                        </li>
                                        <li className="nav-item"><Link className="nav-link" to="/grid-left-sidebar">Shoes</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 col-sm-4 mt-6 mt-sm-0 navbar-dark">
                                    <h5 className="mb-4 text-white">Features</h5>
                                    <ul className="navbar-nav list-unstyled mb-0">
                                        <li className="mb-3 nav-item"><Link className="nav-link" to="/term-condition">Term Of Service</Link>
                                        </li>
                                        <li className="mb-3 nav-item"><Link className="nav-link" to="/privacy-policy">Privacy Policy</Link>
                                        </li>
                                        <li className="mb-3 nav-item"><Link className="nav-link" to="#">Support</Link>
                                        </li>
                                        <li className="mb-3 nav-item"><Link className="nav-link" to="#">Shipping &amp; Returns</Link>
                                        </li>
                                        <li className="mb-3 nav-item"><Link className="nav-link" to="#">Careers</Link>
                                        </li>
                                        <li className="nav-item"><Link className="nav-link" to="#">Our Story</Link>
                                        </li>
                                    </ul>
                                </div>
                            </Row>
                        </div>
                        <div className="col-12 col-lg-3 mt-6 mt-lg-0">
                            <div className="d-flex mb-3">
                                <div className="mr-2"> <i className="las la-map ic-2x text-primary" />
                                </div>
                                <div>
                                    <h6 className="mb-1 text-light">Store address</h6>
                                    <p className="mb-0 text-muted">423B, Road Wordwide Country, USA</p>
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="mr-2"> <i className="las la-envelope ic-2x text-primary" />
                                </div>
                                <div>
                                    <h6 className="mb-1 text-light">Email Us</h6>
                                    <Link className="text-muted" to="mailto:themeht23@gmail.com"> skytouchinfotech01@gmail.com</Link>
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="mr-2"> <i className="las la-mobile ic-2x text-primary" />
                                </div>
                                <div>
                                    <h6 className="mb-1 text-light">Phone Number</h6>
                                    <Link className="text-muted" to="tel:+912345678900">+91-234-567-8900</Link>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="mr-2"> <i className="las la-clock ic-2x text-primary" />
                                </div>
                                <div>
                                    <h6 className="mb-1 text-light">Working Hours</h6>
                                    <span className="text-muted">Mon - Fri: 10AM - 7PM</span>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <hr className="my-8" />
                    <Row className="text-muted align-items-center">
                        <Col md={7}>Copyright 2021 All rights reserved | This Template is made by <i className="lar la-heart text-primary heartBeat2" />  <u><Link className="text-primary" to="#">Skytouch Infotech</Link></u>
                        </Col>
                        <Col md={5} className="text-md-right mt-3 mt-md-0">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                    <Link to="#">
                                        <img className="img-fluid" src={require(`../../assets/images/pay-icon/01.png`)} alt="" />
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#">
                                        <img className="img-fluid" src={require(`../../assets/images/pay-icon/02.png`)} alt="" />
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#">
                                        <img className="img-fluid" src={require(`../../assets/images/pay-icon/03.png`)} alt="" />
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#">
                                        <img className="img-fluid" src={require(`../../assets/images/pay-icon/04.png`)} alt="" />
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default Footer;