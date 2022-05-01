import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

class Pageheading extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
          <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="h2 mb-0">{this.props.title}</h1>
            </Col>
            <Col md={6} className="mt-3 mt-md-0">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-md-end bg-transparent p-0 m-0">
                  <li className="breadcrumb-item"><Link className="text-dark" to="#"><i className="las la-home mr-1" />Home</Link>
                  </li>
                  <li className="breadcrumb-item">{this.props.foldername}</li>
                  <li className="breadcrumb-item active text-primary" aria-current="page">{this.props.title}</li>
                </ol>
              </nav>
            </Col>
          </Row>
        </Container>
        );
    }
}

export default Pageheading;