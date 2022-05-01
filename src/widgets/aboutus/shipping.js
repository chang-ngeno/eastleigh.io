import React, { Component } from 'react';
import {  Row,Col } from 'reactstrap';
class Shipping extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Row className="align-items-center">
                <Col lg={3} md={6} >
                    <div className="px-4 py-7 rounded text-center border">
                        <i className="las la-credit-card ic-3x text-primary" />
                        <h5 className="mt-2 mb-1">Credit Card</h5>
                        <p className="mb-0">Serspiciatis unde omnis iste natus error sit.</p>
                    </div>
                </Col>
                <Col lg={3} md={6} className="mt-6 mt-md-0">
                    <div className="px-4 py-7 rounded text-center border">
                        <i className="las la-shipping-fast ic-3x text-primary" />
                        <h5 className="mt-2 mb-1">Free Shipping</h5>
                        <p className="mb-0">Serspiciatis unde omnis iste natus error sit.</p>
                    </div>
                </Col>
                <Col lg={3} md={6} className="mt-6 mt-lg-0">
                    <div className="px-4 py-7 rounded text-center border">
                        <i className="las la-history ic-3x text-primary" />
                        <h5 className="mt-2 mb-1">24/7 Support</h5>
                        <p className="mb-0">Serspiciatis unde omnis iste natus error sit.</p>
                    </div>
                </Col>
                <Col lg={3} md={6} className="mt-6 mt-lg-0">
                    <div className="px-4 py-7 rounded text-center border">
                        <i className="las la-undo-alt ic-3x text-primary" />
                        <h5 className="mt-2 mb-1">30 Days Returns</h5>
                        <p className="mb-0">Serspiciatis unde omnis iste natus error sit.</p>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default Shipping;