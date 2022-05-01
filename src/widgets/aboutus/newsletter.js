import React, { Component } from 'react';
import {  Col } from 'reactstrap';
class Newsletter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <form id="mc-form1" className="row align-items-center no-gutters mb-3">
                <Col>
                    <input defaultValue name="EMAIL" className="email form-control input-2 bg-white" id="mc-email1" placeholder="Email Address" required type="email" />
                </Col>
                <div className="col-auto">
                    <input className="btn btn-primary overflow-auto" name="subscribe" defaultValue="Subscribe" type="submit" />
                </div>
            </form>
        );
    }
}

export default Newsletter;