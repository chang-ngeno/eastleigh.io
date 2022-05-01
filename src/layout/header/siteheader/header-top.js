import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

class Headertop extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="header-top bg-dark py-1">
                <Container>
                    <Row className="align-items-center">
                        <Col md={12} className="d-flex align-items-center justify-content-between text-white">
                            <div className="d-none d-md-flex align-items-center"> <small className="mr-3"><i className="las la-store text-primary mr-1 align-middle" />Welcome to Our store Ekocart</small>  <small><i className="las la-truck text-primary mr-1 align-middle" /> Free shipping worldwide</small>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="language-selection mr-2">
                                    <div className="dropdown">
                                        <button className="btn btn-sm text-white dropdown-toggle" data-toggle="dropdown">English</button>
                                        <div className="dropdown-menu"><Link className="dropdown-item" to="#">English</Link>
                                            <Link className="dropdown-item" to="#">Arabic</Link>
                                            <Link className="dropdown-item" to="#">French</Link>
                                            <Link className="dropdown-item" to="#">Italian</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="social-icons">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item"><Link className="text-muted" to="#"><i className="lab la-facebook-f" /></Link>
                                        </li>
                                        <li className="list-inline-item"><Link className="text-muted" to="#"><i className="lab la-twitter" /></Link>
                                        </li>
                                        <li className="list-inline-item"><Link className="text-muted" to="#"><i className="lab la-linkedin-in" /></Link>
                                        </li>
                                        <li className="list-inline-item"><Link className="text-muted" to="#"><i className="lab la-instagram" /></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default Headertop;