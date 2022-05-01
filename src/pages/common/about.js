import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Pageheading from '../../widgets/pageheading';
import Shipping from '../../widgets/aboutus/shipping';
import Experience from '../../widgets/aboutus/experience';
import Aboutstep from '../../widgets/aboutus/aboutstep';
import Testimonial from '../../widgets/aboutus/testimonial';
import Newsletter from '../../widgets/aboutus/newsletter';
import Brand from '../../widgets/aboutus/brand';
import Blogcart from '../../widgets/blog/blogcart';
import Instafeed from '../../widgets/aboutus/instafeed';
import { Link } from 'react-router-dom';

class about extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount() {
      window.scrollTo(0, 0)
    }
    render() {
        return (
            <>
            {/*hero section start*/}
            <section className="bg-light">
              <Pageheading foldername={"Pages"} title={"About Us"}  />
              {/* / .container */}
            </section>
            {/*hero section end*/} 
            {/*body content start*/}
            <div className="page-content">
              {/*feature start*/}
              <section>
                <Container>
                  <Row className="align-items-end mb-5">
                    <Col md={12} lg={6} className="col-12">
                      <div>
                        <h6 className="text-primary mb-1">
                          — Why Choose Us
                        </h6>
                        <h2 className="mb-0">We Are Known For Our Abilities Markets.</h2>
                      </div>
                    </Col>
                    <Col md={12} lg={6} className="col-12">
                      <div>
                        <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                      </div>
                    </Col>
                  </Row>
                  <Shipping />
                </Container>
              </section>
              {/*feature end*/}
              <section className="p-0">
                <Container>
                  <Experience />
                  <Aboutstep />
                </Container>
              </section>
              {/*testimonial start*/}
              <section>
                <Container className="text-center">
                  <Row className="justify-content-center text-center mb-5">
                    <Col md={10} lg={8} className="col-12">
                      <div>
                        <h6 className="text-primary mb-1">
                          — Testimonial
                        </h6>
                        <h2 className="mb-0">Our Client Feedback</h2>
                      </div>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col>
                      <Testimonial />
                    </Col>
                  </Row>
                </Container>
              </section>
              {/*testimonial end*/}
              {/*multi sec start*/}
              <section className="bg-light">
                <Container>
                  <Row className="justify-content-center text-center mb-8">
                    <div className="col-lg-6 col-md-10">
                      <div className="mb-4">
                        <h6 className="text-primary mb-1">
                          — Newsletter
                        </h6>
                        <h2 className="mb-0">Subscribe Our Newsletter</h2>
                      </div>
                      <div className="subscribe-form">
                        <Newsletter />
                        <small>Get started for 1 Month free trial No Purchace required.</small>
                      </div>
                    </div>
                  </Row>
                </Container>
              </section>
              <section className="p-0 mt-n11">
                <Container>
                  <Row>
                      <Brand />
                  </Row>
                </Container>
              </section>
              {/*multi sec end*/}
              {/*blog start*/}
              <section>
                <Container>
                  <Row className="justify-content-center text-center mb-5">
                    <Col md={10} lg={8} className="col-12">
                      <div>
                        <h6 className="text-primary mb-1">
                          — Fashion Blog
                        </h6>
                        <h2 className="mb-0">Latest News Feed</h2>
                      </div>
                    </Col>
                  </Row>
                  {/* / .row */}
                   <Blogcart />
                   <Row className="justify-content-center text-center mt-5">
                    <Col> 
                      <Link className="btn btn-dark" to="#">View All Blog</Link>
                    </Col>
                  </Row>
                </Container>
              </section>
              {/*blog end*/}
              {/*insta start*/}
              <section className="p-0">
                <div className="container-fluid p-0">
                  <Instafeed />
                </div>
              </section>
              {/*insta end*/}
            </div>
            {/*body content end*/}
          </>
    
        );
    }
}

export default about;