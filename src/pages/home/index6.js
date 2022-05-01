import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Herosection6 from '../../widgets/herosection/herosection6';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import Instafeed from '../../widgets/aboutus/instafeed';
import Processstep2 from '../../widgets/home5/processstep2';
import Clientlogo from '../../widgets/home1/clientlogo';
import Blogcart from '../../widgets/blog/blogcart';
import OurProductKids from '../../widgets/home6/ourproductkids';
import TradingProduct from '../../widgets/home6/tradingproduct';
import Newsletter1 from '../../widgets/home1/newsletter1';
import KidsBlog from '../../widgets/blog/kidsblog';

class index6 extends Component {
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
            {/*hero section start*/}
            <Herosection6 />
            {/*hero section end*/} 
            {/*body content start*/}
            <div className="page-content">
              {/*product ad start*/}
              <section className="p-0">
                <div className="container-fluid p-0">
                  <Row className="no-gutters">
                    <div className="col-12 col-md-6">
                      <div className="position-relative overflow-hidden shadow-sm">
                        {/* Background */}
                        <img className="img-fluid w-100 hover-zoom" src={require(`../../assets/images/kids/product-ad/01.jpg`)} alt="" />
                        {/* Body */}
                        <div className="position-absolute top-50 right-0 pr-5">
                          <h6>Baby Collection</h6>
                          <h3 className="mb-4 text-white">Baby Trend Cloth <span className="font-w-7 d-block">50% Off</span></h3>
                          <Link className="btn btn-sm btn-primary btn-animated" to="#">Shop Now</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="position-relative overflow-hidden shadow-sm">
                        {/* Background */}
                        <img className="img-fluid w-100 hover-zoom" src={require(`../../assets/images/kids/product-ad/02.jpg`)} alt="" />
                        <div className="position-absolute top-50 pl-5">
                          <h6>2020 Collection</h6>
                          <h3 className="mb-0">New Toys <span className="font-w-7 d-block text-primary">Arrived</span></h3>
                        </div>
                      </div>
                    </div>
                  </Row>
                </div>
              </section>
              {/*product ad end*/}
              {/*product start*/}
              <section>
                <Container>
                  <Row className="justify-content-center text-center mb-5">
                    <div className="col-lg-6 col-md-10">
                      <div>
                        <h6 className="text-primary mb-1">
                          — New Collection
                        </h6>
                        <h2 className="mb-0">Our Products</h2>
                      </div>
                    </div>
                  </Row>
                </Container>
                <Container>
                  <Row>
                    <Col>
                        <OurProductKids />
                    </Col>
                  </Row>
                </Container>
              </section>
              {/*product end*/}
              {/*product ad start*/}
              <section style={{ backgroundImage: `url(${require(`../../assets/images/kids/bg/03.jpg`)})` , backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                <Container>
                  <Row className="justify-content-center text-center">
                    <Col lg={8} className="col-12"> 
                      <h2 className="mb-5 font-w-5 h1">Latest Collection <span className="text-primary font-w-8">OFF 50%</span> All Products</h2>
                      <Link className="btn btn-primary btn-animated" to="#"><i className="las la-shopping-cart mr-1" /> Shop Now</Link>
                    </Col>
                  </Row>
                </Container>
              </section>
              {/*product ad end*/}
              {/*product start*/}
              <section>
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
                  <TradingProduct />
                </Container>
              </section>
              {/*product end*/}
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
                          — KIDS BLOG
                        </h6>
                        <h2 className="mb-0">Latest News Feed</h2>
                      </div>
                    </Col>
                  </Row>
                  <KidsBlog />
                  <Row className="justify-content-center text-center mt-5">
                    <Col> <Link className="btn btn-dark" to="/blog-card">View All Blog</Link>
                    </Col>
                  </Row>
                </Container>
              </section>
              {/*blog end*/}
              {/*feature start*/}
              <section className="bg-light">
                <Container>
                  <Processstep2 />  
                </Container>
              </section>
              {/*feature end*/}
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

export default index6;