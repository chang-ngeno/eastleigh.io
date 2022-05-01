import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Pageheading from '../../widgets/pageheading';

class contactus extends Component {
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
        <section className="bg-light">
          <Pageheading foldername={"Pages"} title={"Contact Us"} />
        </section>
        <div className="page-content">
          <section>
            <Container>
              <Row className="mb-5">
                <div className="col-lg-8">
                  <div className="mb-5">
                    <h6 className="text-primary mb-1">— Contact US</h6>
                    <h2 className="mb-0">We’d love to hear from you.</h2>
                  </div>
                  <form id="contact-form" className="row" method="post" action="php/contact.php">
                    <div className="messages" />
                    <div className="form-group col-md-6">
                      <label>First Name <span className="text-danger">*</span></label>
                      <input id="form_name" type="text" name="name" className="form-control" placeholder="First Name" required="required" data-error="Name is required." />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Last Name <span className="text-danger">*</span></label>
                      <input id="form_name1" type="text" name="name" className="form-control" placeholder="Last Name" required="required" data-error="Name is required." />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Email Address <span className="text-danger">*</span></label>
                      <input id="form_email" type="email" name="email" className="form-control" placeholder="Email" required="required" data-error="Valid email is required." />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Phone Number <span className="text-danger">*</span></label>
                      <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Phone" required="required" data-error="Phone is required" />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group col-md-12">
                      <label>Message <span className="text-danger">*</span></label>
                      <textarea id="form_message" name="message" className="form-control" placeholder="Message" rows={4} required="required" data-error="Please,leave us a message." defaultValue={""} />
                      <div className="help-block with-errors" />
                    </div>
                    <Col md={12} className="mt-4">
                      <button className="btn btn-primary btn-animated"><span>Send Messages</span>
                      </button>
                    </Col>
                  </form>
                </div>
                <Col lg={4} className="mt-6 mt-lg-0">
                  <div className="shadow-sm rounded p-5">
                    <div className="mb-5">
                      <h6 className="text-primary mb-1">— Contact Info</h6>
                      <h4 className="mb-0">We Are here To help You</h4>
                    </div>
                    <div className="d-flex mb-3">
                      <div className="mr-2"> <i className="las la-map ic-2x text-primary" />
                      </div>
                      <div>
                        <h6 className="mb-1 text-dark">Store address</h6>
                        <p className="mb-0 text-muted">423B, Road Wordwide Country, USA</p>
                      </div>
                    </div>
                    <div className="d-flex mb-3">
                      <div className="mr-2"> <i className="las la-envelope ic-2x text-primary" />
                      </div>
                      <div>
                        <h6 className="mb-1 text-dark">Email Us</h6>
                        <a className="text-muted" href="mailto:themeht23@gmail.com"> themeht23@gmail.com</a>
                      </div>
                    </div>
                    <div className="d-flex mb-3">
                      <div className="mr-2"> <i className="las la-mobile ic-2x text-primary" />
                      </div>
                      <div>
                        <h6 className="mb-1 text-dark">Phone Number</h6>
                        <a className="text-muted" href="tel:+912345678900">+91-234-567-8900</a>
                      </div>
                    </div>
                    <div className="d-flex mb-5">
                      <div className="mr-2"> <i className="las la-clock ic-2x text-primary" />
                      </div>
                      <div>
                        <h6 className="mb-1 text-dark">Working Hours</h6>
                        <span className="text-muted">Mon - Fri: 10AM - 7PM</span>
                      </div>
                    </div>
                    <ul className="list-inline">
                      <li className="list-inline-item"><Link className="bg-white shadow-sm rounded p-2" to="#"><i className="la la-facebook" /></Link>
                      </li>
                      <li className="list-inline-item"><Link className="bg-white shadow-sm rounded p-2" to="#"><i className="la la-dribbble" /></Link>
                      </li>
                      <li className="list-inline-item"><Link className="bg-white shadow-sm rounded p-2" to="#"><i className="la la-instagram" /></Link>
                      </li>
                      <li className="list-inline-item"><Link className="bg-white shadow-sm rounded p-2" to="#"><i className="la la-twitter" /></Link>
                      </li>
                      <li className="list-inline-item"><Link className="bg-white shadow-sm rounded p-2" to="#"><i className="la la-linkedin" /></Link>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="pt-0">
            <Container>
              <hr className="mt-0 mb-10" />
              <Row className="justify-content-center text-center mb-5">
                <div className="col-lg-8">
                  <div>
                    <h6 className="text-primary mb-1">— Easy to Find</h6>
                    <h2 className="mb-0">Our Store Location</h2>
                  </div>
                </div>
              </Row>
              <Row>
                <Col>
                  <div className="map" style={{ height: '500px' }}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.840108181602!2d144.95373631539215!3d-37.8172139797516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1497005461921" allowFullScreen className="w-100 h-100 border-0" />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="p-0">
            <div className="container-fluid p-0">
              <Row className="no-gutters">
                <div className="col-sm-8 col-md-4 order-md-1 align-items-center d-flex justify-content-center bg-dark p-5">
                  <div className="d-flex align-items-center">
                    <img className="img-fluid" src="assets/images/insta/instagram-logo.png" alt="" />
                    <div className="ml-3"><h6 className="text-white mb-0">Follow Us on</h6>
                      <h3 className="text-white mb-0">Instagram</h3></div>
                  </div>
                </div>
                <Col sm={4} md={2} className="col-6">
                  <Link className="insta-item" to="#">
                    <img className="img-fluid h-100" src="assets/images/insta/01.jpg" alt="" />
                    <div className="insta-icon"><i className="lab la-instagram" /></div>
                  </Link>
                </Col>
                <Col sm={4} md={2} className="col-6">
                  <Link className="insta-item" to="#">
                    <img className="img-fluid h-100" src="assets/images/insta/02.jpg" alt="" />
                    <div className="insta-icon"><i className="lab la-instagram" /></div>
                  </Link>
                </Col>
                <Col sm={4} md={2} className="col-6 order-md-1">
                  <Link className="insta-item" to="#">
                    <img className="img-fluid h-100" src="assets/images/insta/03.jpg" alt="" />
                    <div className="insta-icon"><i className="lab la-instagram" /></div>
                  </Link>
                </Col>
                <Col sm={4} md={2} className="col-6 order-md-1">
                  <Link className="insta-item" to="#">
                    <img className="img-fluid h-100" src="assets/images/insta/04.jpg" alt="" />
                    <div className="insta-icon"><i className="lab la-instagram" /></div>
                  </Link>
                </Col>
              </Row>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default contactus;