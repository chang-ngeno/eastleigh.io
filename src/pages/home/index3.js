import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Instafeed from '../../widgets/aboutus/instafeed';
import Blogcart from '../../widgets/blog/blogcart';
import CommingSoonCounter from '../../widgets/common/counter';
import Herosection2 from '../../widgets/herosection/herosection2';
import Clientlogo from '../../widgets/home1/clientlogo';
import Newcollection2 from '../../widgets/home1/newcollection2';
import Newsletter1 from '../../widgets/home1/newsletter1';
import Newarrived from '../../widgets/home3/newarrived';

class index3 extends Component {
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
        <Herosection2 />
        {/*hero section end*/}
        {/*body content start*/}
        <div className="page-content">
          {/*product start*/}
          <section className="p-0">
            <Container>
              <Row>
                <Col>
                  <div className="shadow p-5 py-10 mt-n10 z-index-1 bg-white">
                    <Row className="justify-content-center text-center">
                      <Col lg={8} md={10}>
                        <div className="mb-5">
                          <h6 className="text-primary mb-1">
                            — New Collection
                          </h6>
                          <h2 className="mb-0">Trending Products</h2>
                        </div>
                      </Col>
                    </Row>
                    <Newcollection2 />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          {/*product end*/}
          {/*counter start*/}
          <section className="bg-light pt-11 mt-n11">
            <Container>
              <Row>
                <Col>
                  <div className="bg-white rounded p-6 py-11 bg-pos-rt bg-sm-none" style={{ backgroundImage: `url(${require(`../../assets/images/product-ad/05.jpg`)})` }}>
                    <Row>
                      <Col md={6}> <span className="bg-primary py-1 px-2 d-inline-block rounded mb-3 text-white text-uppercase">Limited Offer</span>
                        <h2 className="mb-5 font-w-5">Weekly Sale on <span className="text-primary font-w-8">60% OFF</span> All Products</h2>
                        <ul className="mb-6 countdown list-inline d-flex">
                          <CommingSoonCounter time={'500150'} />
                        </ul>
                        <Newsletter1 />
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          {/*counter end*/}
          {/*product start*/}
          <section>
            <Container>
              <Row>
                <div className="col-lg-12">
                  <Newarrived />
                 </div>
              </Row>
            </Container>
          </section>
          {/*product end*/}
          {/*product ad start*/}
          <section className="p-0">
            <div className="container-fluid">
              <Row>
                <div className="col-12 col-lg-6">
                  <div className="position-relative rounded overflow-hidden">
                    {/* Background */}
                    <img className="img-fluid hover-zoom" src={require(`../../assets/images/product-ad/01.jpg`)} alt="" />
                    {/* Body */}
                    <div className="position-absolute top-50 pl-5">
                      <h6 className="text-dark">Woman Party Collection</h6>
                      {/* Heading */}
                      <h3>#Trendy Arrived Item<br /> <span className="text-primary font-w-7">Off 50%</span></h3>
                      {/* Link */} <Link className="btn btn-sm btn-primary btn-animated" to="#">Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                  <div className="position-relative rounded overflow-hidden">
                    {/* Background */}
                    <img className="img-fluid hover-zoom" src={require(`../../assets/images/product-ad/07.jpg`)} alt="" />
                    {/* Body */}
                    <div className="position-absolute top-50 pl-5">
                      <h6 className="text-dark">2020 Collection</h6>
                      {/* Heading */}
                      <h3>New Stylish Trend<br />Running Shoe</h3>
                      {/* Link */} <Link className="btn btn-sm btn-primary btn-animated" to="#">Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </Row>
            </div>
          </section>
          {/*product ad end*/}
          {/*brand logo start*/}
          <section className="pb-0">
            <Container>
              <Row className="justify-content-center text-center mb-8">
                <div className="col-lg-6 col-md-10">
                  <div>
                    <h6 className="text-primary mb-1">
                      — Shop Brands
                    </h6>
                    <h2 className="mb-0">Top Brands of this Month</h2>
                  </div>
                </div>
              </Row>
              <Row>
                <Col>
                  <Clientlogo />
                </Col>
              </Row>
            </Container>
          </section>
          {/*brand logo start*/}
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
        {/*body content end*/}
      </>
    );
  }
}

export default index3;