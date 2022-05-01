import React, { Component } from 'react';
import {  Row,Col } from 'reactstrap';
class Aboutstep extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Row className="mt-8">
                <Col lg={4} md={4}>
                    <h5><span className="text-primary font-w-7">01.</span> Our Mission</h5>
                    <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model infancy.</p>
                </Col>
                <Col lg={4} md={4}>
                    <h5><span className="text-primary font-w-7">02.</span> Our Vision</h5>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia Neque porro est.</p>
                </Col>
                <Col lg={4} md={4}>
                    <h5><span className="text-primary font-w-7">03.</span> Our Value</h5>
                    <p>Officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et non recusandae.</p>
                </Col>
            </Row>
        );
    }
}

export default Aboutstep;