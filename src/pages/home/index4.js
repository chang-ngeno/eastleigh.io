import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommingSoonCounter from '../../widgets/common/counter';
import Herosection4 from '../../widgets/herosection/herosection4';
import Newarrived from '../../widgets/home3/newarrived';
import Testimonial1 from '../../widgets/aboutus/testimonial1';
import Brand1 from '../../widgets/aboutus/brand1';
import Blogcart from '../../widgets/blog/blogcart';
import Processstep1 from '../../widgets/home4/processstep1';
import Specialproduct from '../../widgets/home4/specialproduct';
import NewarrivedElectonic from '../../widgets/home4/newarrivedelectonic';
import ElectronicBlog from '../../widgets/blog/electronicblog';


class index4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
         
      };
    }
    componentDidMount() {
      window.scrollTo(0, 0)
    }
    render() {
        return (
            <>
          <Herosection4 />
        <div className="page-content">
          <section>
            <Container>
              <Row>
                <div className="col-12 col-lg-4 col-md-6">
                  <div className="position-relative rounded overflow-hidden">
                    {/* Background */}
                    <img className="img-fluid hover-zoom" src={require(`../../assets/images/electronic/product-ad/01.jpg`)} alt="" />
                    {/* Body */}
                    <div className="position-absolute top-50 pl-5">
                      <h6 className="text-white">Apple Collection</h6>
                      {/* Heading */}
                      <h3 className="text-white font-w-8"><span className="d-block">Sell On</span> Smart Devices</h3>
                      {/* Link */} <Link className="btn btn-sm btn-primary btn-animated" to="/grid-left-sidebar">Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 col-md-6 mt-5 mt-md-0">
                  <div className="position-relative rounded overflow-hidden">
                    {/* Background */}
                    <img className="img-fluid hover-zoom" src={require(`../../assets/images/electronic/product-ad/02.jpg`)} alt="" />
                    {/* Body */}
                    <div className="position-absolute top-50 pl-5">
                      {/* Heading */}
                      <h3 className="font-w-7 bg-primary d-inline px-2 py-1 text-white">Best Electronic Product</h3>
                      <br />
                      {/* Link */} <Link className="btn btn-sm btn-dark btn-animated mt-3" to="/grid-left-sidebar">Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 col-md-12 mt-5 mt-lg-0">
                  <div className="position-relative rounded overflow-hidden">
                    {/* Background */}
                    <img className="img-fluid hover-zoom" src={require(`../../assets/images/electronic/product-ad/03.jpg`)} alt="" />
                    {/* Body */}
                    <div className="position-absolute top-50 pl-5">
                      <h6 className="text-dark">New Trend</h6>
                      {/* Heading */}
                      <h3 className="font-w-7">Portable<br /> Speaker</h3>
                      {/* Link */} <Link className="btn btn-sm btn-primary btn-animated" to="/grid-left-sidebar">Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </Row>
            </Container>
          </section>
          {/*product ad end*/}
          {/*product start*/}
          <section className="p-0">
            <div className="container-fluid pl-lg-0">
              <Row className="align-items-center">
                <div className="col-lg-4 pr-11 pt-5 custom-pb-2 rounded" style={{ backgroundImage: `url(${require(`../../assets/images/electronic/bg/03.jpg`)})` }}>
                  <div className="p-5"> <span className="bg-primary py-1 px-2 d-inline-block rounded mb-3 text-white text-uppercase">Limited Offer</span>
                    <h2 className="mb-5 font-w-5 line-h-1 text-white">Weekly Sale<br /> <span className="text-primary font-w-8">60% OFF</span> All Products</h2>
                    <ul className="countdown list-inline d-flex text-white" >
                      <CommingSoonCounter  time={'500150'} />
                    </ul>
                  </div>
                </div>
                <div className="col-lg-8 mt-8 mt-lg-0">
                  <div>
                    <h6 className="text-primary mb-1">
                      — New Collection
                    </h6>
                    <h2 className="mb-0">Special Products</h2>
                  </div>
                    <Specialproduct />
                </div>
              </Row>
            </div>
          </section>
          {/*product end*/}
          {/*product start*/}
          <section className="pb-0">
            <Container>
              <Row>
                <Col>
                  <div className="bg-white shadow p-5">
                    <NewarrivedElectonic />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          {/*product end*/}
          {/*testimonial start*/}
          <section className="bg-light mt-n11 custom-pt-1">
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
                  <Testimonial1 />
                </Col>
              </Row>
              <Row className="mt-8">
                <Col>
                    <Brand1 />
                </Col>
              </Row>
            </Container>
          </section>
          {/*testimonial end*/}
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
              <ElectronicBlog />
              <Row className="justify-content-center text-center mt-5">
                <Col> <Link className="btn btn-dark" to="/blog-card">View All Blog</Link>
                </Col>
              </Row>
            </Container>
          </section>
          {/*blog end*/}
          {/*feature start*/}
          <section className="bg-primary py-6">
            <Container>
              <Processstep1 />
            </Container>
          </section>
          {/*feature end*/}
        </div>
        {/*body content end*/}
      </>
        );
    }
}

export default index4;