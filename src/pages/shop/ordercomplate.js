import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import Pageheading from '../../widgets/pageheading';

class ordercomplate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <>
        {/*hero section start*/}
        <section className="bg-light">
          <Pageheading foldername={"Shop"} title={"Order Completed"} />
        </section>
        {/*hero section end*/}
        {/*body content start*/}
        <div className="page-content">
          <section className="text-center pb-11">
            <Container>
              <Row>
                <Col md={12}>
                  <h3 className="mb-4">Thank you for purchasing, Your order is complete</h3>
                  <Link className="btn btn-primary btn-animated" to="/"><i className="las la-home mr-1" />Home</Link>
                  <Link className="btn btn-dark btn-animated" to="/grid-left-sidebar"><i className="las la-shopping-cart mr-1" />Continue Shopping</Link>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
        {/*body content end*/}
      </>
    );
  }
}

export default ordercomplate;