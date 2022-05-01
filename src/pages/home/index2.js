import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import OwlCarousel from 'react-owl-carousel';
import CommingSoonCounter from '../../widgets/common/counter';
import Herosection1 from '../../widgets/herosection/herosection1';
import Treadingproduct from '../../widgets/home1/treadingproduct';
import Productbanner2 from '../../widgets/home2/productbanner2';
import Processstep from '../../widgets/home2/processstep';
import Ourproduct2 from '../../widgets/home2/ourproduct2';
import Blogcart from '../../widgets/blog/blogcart';
import Instafeed from '../../widgets/aboutus/instafeed';
import Newsletter1 from '../../widgets/home1/newsletter1';
window.fn = OwlCarousel;

class index2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        loop: true,
        nav: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
          },
        },
      },
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <>
        {/*hero section start*/}
        <Herosection1 />
        {/*hero section end*/}
        {/*body content start*/}
        <div className="page-content">
          {/*product start*/}
          <section className="pb-0">
            <Container>
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
              <Treadingproduct />
              <Row className="justify-content-center text-center mt-6">
                <Col> <Link className="btn btn-dark" to="/grid-left-sidebar">View All Product</Link>
                </Col>
              </Row>
            </Container>
          </section>
          {/*product end*/}
          {/*product add start*/}
          <section>
            <Container>
              <Productbanner2 />
            </Container>
          </section>
          {/*product add end*/}
          {/*feature start*/}
          <section className="bg-dark custom-pb-1">
            <Container>
                <Processstep />
            </Container>
          </section>
          {/*feature end*/}
          {/*product start*/}
          <section className="pt-0 mt-n11">
            <Container>
              <Row>
                <Col>
                  <div className="bg-white shadow p-5 rounded">
                    <Row className="justify-content-center text-center mb-5">
                      <Col lg={8} md={10}>
                        <div>
                          <h6 className="text-primary mb-1">
                            — New Collection
                          </h6>
                          <h2 className="mb-0">Best Seller</h2>
                        </div>
                      </Col>
                    </Row>
                    <Ourproduct2 />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          {/*product end*/}
          {/*hot deal start*/}
          <section className="bg-pos-rt bg-xs-none" style={{ backgroundImage: `url(${require(`../../assets/images/bg/04.jpg`)})` }}>
            <Container>
              <Row>
                <div className="col-lg-6 col-md-10">
                  <div>
                    <h6 className="text-primary mb-1">
                      — Limited Offer
                    </h6>
                    <h2 className="mb-0">Hot Deal Today</h2>
                  </div>
                  <ul className="countdown list-inline d-flex my-5">
                    <CommingSoonCounter time={'500150'} />
                  </ul>
                  <Newsletter1 />
                </div>
              </Row>
            </Container>
          </section>
          {/*hot deal end*/}
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
        {/*body content end*/}
      </>

    );
  }
}

export default index2;