import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
class Headerlogo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="py-md-3 py-2">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} className="d-none d-md-flex align-items-center">
                            <Link className="navbar-brand logo d-none d-lg-block" to="/">
                                <img className="img-fluid" src={require(`../../../assets/images/logo.png`)} alt="" />
                            </Link>
                            <div className="media ml-lg-11"> <i className="las la-mobile-alt ic-2x bg-white rounded p-2 shadow-sm mr-2 text-primary" />
                                <div className="media-body"> <span className="mb-0 d-block">Call Us</span>
                                    <a className="text-muted" href="tel:+912345678900">+91-234-567-8900</a>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} >
                            <div className="right-nav align-items-center d-flex justify-content-end">
                                <form className="form-inline border rounded w-100">
                                    <select className="custom-select border-0 rounded-0 bg-light form-control d-none d-lg-inline">
                                        <option value={0}>All Categories</option>
                                        <option value={1}>Men</option>
                                        <option value={2}>Women</option>
                                        <option value={3}>Kids</option>
                                    </select>
                                    <input className="form-control border-0 border-left col" type="search" placeholder="Enter Your Keyword" aria-label="Search" />
                                    <button className="btn btn-primary text-white col-auto" type="submit"><i className="las la-search" />
                                    </button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default Headerlogo;