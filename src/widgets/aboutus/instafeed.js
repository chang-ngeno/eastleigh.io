import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  Row,Col } from 'reactstrap';

class Instafeed extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Row className="no-gutters">
                <Col sm={8} md={4} className="col-md-8 col-lg-4 order-lg-1 align-items-center d-flex justify-content-center bg-dark p-5">
                    <div className="d-flex align-items-center">
                        <img className="img-fluid" src={require(`../../assets/images/insta/instagram-logo.png`)} alt="" />
                        <div className="ml-3">
                            <h6 className="text-white mb-0">Follow Us on</h6>
                            <h3 className="text-white mb-0">Instagram</h3>
                        </div>
                    </div>
                </Col>
                <Col sm={4} md={2} className="col-6 col-md-4 col-lg-2">
                    <Link className="insta-item" to="#">
                        <img className="img-fluid" src={require(`../../assets/images/insta/01.jpg`)} alt="" />
                        <div className="insta-icon"><i className="lab la-instagram" />
                        </div>
                    </Link>
                </Col>
                <Col sm={4} md={2} className="col-6 col-md-4 col-lg-2">
                    <Link className="insta-item" to="#">
                        <img className="img-fluid" src={require(`../../assets/images/insta/02.jpg`)} alt="" />
                        <div className="insta-icon"><i className="lab la-instagram" />
                        </div>
                    </Link>
                </Col>
                <Col sm={4} md={2} className="col-6 col-md-4 col-lg-2 order-lg-1">
                    <Link className="insta-item" to="#">
                        <img className="img-fluid" src={require(`../../assets/images/insta/03.jpg`)} alt="" />
                        <div className="insta-icon"><i className="lab la-instagram" />
                        </div>
                    </Link>
                </Col>
                <Col sm={4} md={2} className="col-6 col-md-4 col-lg-2 order-lg-1">
                    <Link className="insta-item" to="#">
                        <img className="img-fluid" src={require(`../../assets/images/insta/04.jpg`)} alt="" />
                        <div className="insta-icon"><i className="lab la-instagram" />
                        </div>
                    </Link>
                </Col>
            </Row>
        );
    }
}

export default Instafeed;