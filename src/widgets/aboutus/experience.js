import React, { Component } from 'react';
import {  Row,Col } from 'reactstrap';
class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Row className="align-items-center justify-content-between">
                <Col lg={7} className="mb-6 mb-lg-0">
                    <Row className="align-items-center">
                        <div className="col-6">
                            <img src={require(`../../assets/images/about/01.jpg`)} className="img-fluid rounded shadow" alt="..." />
                        </div>
                        <div className="col-6">
                            <img src={require(`../../assets/images/about/02.jpg`)} className="img-fluid rounded shadow mb-5" alt="..." />
                            <img src={require(`../../assets/images/about/03.jpg`)} className="img-fluid rounded shadow" alt="..." />
                        </div>
                    </Row>
                </Col>
                <Col lg={5}>
                    <div> <h6 className="text-primary mb-1">
                        — About Us
                    </h6>
                        <h2 className="mt-3 font-w-5">We Have New Talents Experience</h2>
                        <p className="lead">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                        <p className="mb-0">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default Experience;