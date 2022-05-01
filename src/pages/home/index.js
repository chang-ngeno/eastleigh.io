import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Herosection from '../../widgets/herosection/herosection';
import Processstep from '../../widgets/home1/processstep';
import Newcollection from '../../widgets/home1/newcollection';
import CommingSoonCounter from '../../widgets/common/counter';
import Ourproduct from '../../widgets/home1/ourproduct';
import Newsletter1 from '../../widgets/home1/newsletter1';
import Productbanner from '../../widgets/home1/productbanner';
import Clientlogo from '../../widgets/home1/clientlogo';
import Blogcart from '../../widgets/blog/blogcart';
import Instafeed from '../../widgets/aboutus/instafeed';

class index extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <>
        <Herosection />
        <div className="page-content">
          <section className="pb-0">
            <Container>
              <Processstep />
            </Container>
          </section>
          {/*feature end*/}
          {/*product start*/}
          <section>
            <div className="container-fluid px-lg-8">
              <Row className="justify-content-center text-center">
                <Col lg={8} md={10}>
                  <div className="mb-8">
                    <h6 className="text-primary mb-1">
                      — New Collection
                      </h6>
                    <h2 className="mb-0">Trending Products</h2>
                  </div>
                </Col>
              </Row>
              <Newcollection />
            </div>
          </section>
          {/*product end*/}
          {/*countdown start*/}
          <section className="p-0">
            <div className="container-fluid pl-0">
              <Row>
                <Col md={6} sm={5} className="custom-py-3 rounded"  style={{ backgroundImage: `url(${require(`../../assets/images/bg/03.jpg`)})` , backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} ></Col>
                 <Col md={6} className="col-sm-7 py-sm-0 py-5">
                  <div className="pl-lg-6 pr-lg-8 p-2 pt-sm-10"> <span className="bg-primary py-1 px-2 d-inline-block rounded mb-3 text-white text-uppercase">Limited Offer</span>
                    <h2 className="mb-5 font-w-5 line-h-1">Weekly Sale on<br /> <span className="text-primary font-w-8">60% OFF</span> All Products</h2>
                    <ul className="countdown list-inline d-flex ">
                      <CommingSoonCounter time={'500550'} />
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </section>
          {/*countdown end*/}
          {/*product start*/}
          <section className="tab p-0 mt-n15">
            <div className="container-fluid pr-sm-0">
              <Row>
                <div className="col-lg-10 col-md-11 ml-auto">
                  <Ourproduct />
                </div>
              </Row>
            </div>
          </section>
          {/*product end*/}
          {/*product-add start*/}
          <section>
            <Container>
              <Productbanner />
            </Container>
          </section>
          {/*product-add end*/}
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
                  <Newsletter1 />

                </div>
              </Row>
            </Container>
          </section>
          <section className="p-0 mt-n11">
            <Container>
              <Row>
                <Col>
                  <Clientlogo />
                </Col>
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
                <Col> <Link className="btn btn-dark" to="/blog-card">View All Blog</Link>
                </Col>
              </Row>
            </Container>
          </section>
          {/*blog end*/}
          {/*instagram start*/}
          <section className="p-0">
            <div className="container-fluid p-0">
              <Instafeed />
            </div>
          </section>
          {/*instagram end*/}
        </div>
      </>
    );
  }
}

export default index;