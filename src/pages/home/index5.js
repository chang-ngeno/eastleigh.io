import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import CommingSoonCounter from '../../widgets/common/counter';
import Herosection5 from '../../widgets/herosection/herosection5';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import Processstep2 from '../../widgets/home5/processstep2';
import Clientlogo from '../../widgets/home1/clientlogo';
import Blogcart from '../../widgets/blog/blogcart';
import OurproductFurniture from '../../widgets/home5/ourproductfurniture';
import Newsletter1 from '../../widgets/home1/newsletter1';
import HotDealsProduct from '../../widgets/home5/hotdeals';
import FurnitureBlog from '../../widgets/blog/furnitureblog';

class index5 extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <>
        {/*hero section start*/}
        <Herosection5 />
        {/*hero section end*/}
        {/*body content start*/}
        <div className="page-content">
          {/*feature start*/}
          <section className="pb-0">
            <Container>
              <Processstep2 />
            </Container>
          </section>
          {/*feature end*/}
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
              <OurproductFurniture />
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
                    <img className="img-fluid hover-zoom" src={require(`../../assets/images/furniture/product-ad/01.jpg`)} alt="" />
                    {/* Body */}
                    <div className="position-absolute top-0 pl-5 pt-5">
                      <h6 className="text-dark">Ekocart Furniture</h6>
                      {/* Heading */}
                      <h3>#Latest Collection <br /> <span className="text-primary font-w-7">Off 50%</span></h3>
                      {/* Link */} <Link className="btn btn-sm btn-primary btn-animated" to="#">Shop Now
                          </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                  <div className="position-relative rounded overflow-hidden">
                    {/* Background */}
                    <img className="img-fluid hover-zoom" src={require(`../../assets/images/furniture/product-ad/02.jpg`)} alt="" />
                    {/* Body */}
                    <div className="position-absolute top-0 pl-5 pt-5">
                      <h6 className="text-dark">New Arrived</h6>
                      {/* Heading */}
                      <h3>Wooden Table Beside<br />Sofa Chair</h3>
                      {/* Link */} <Link className="btn btn-sm btn-primary btn-animated" to="#">Shop Now
                          </Link>
                    </div>
                  </div>
                </div>
              </Row>
            </div>
          </section>
          {/*product ad end*/}
          {/*hot deal start*/}
          <section>
            <Container>
              <Row className="align-items-center">
                <div className="col-lg-5 mr-auto">
                  <div className="shadow p-5">
                    <div>
                      <h6 className="text-primary mb-1">
                        — Limited Offer
                          </h6>
                      <h2 className="mb-0">Exclusive Hot Deal Ends Soon!</h2>
                    </div>
                    <ul className="countdown list-inline d-flex my-5">
                      <CommingSoonCounter time={'500150'} />
                    </ul> 
                    <Newsletter1 />
                  </div>
                </div>
                <Col lg={6} className="mt-5 mt-lg-0">
                    <HotDealsProduct />
                </Col>
              </Row>
            </Container>
          </section>
          {/*hot deal end*/}
          {/*product ad start*/}
           <section style={{ backgroundImage: `url(${require(`../../assets/images/furniture/01.png`)})` , backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
              <Container>
                <Row>
                  <div className="col-12 col-lg-6">
                    <h4 className="mb-3"><span className="text-primary">2020</span> Collection</h4>
                    <h2 className="mb-3 font-w-7">New Top Trendy Furniture Accessories</h2>
                    <Link className="btn btn-primary btn-animated" to="#"><i className="las la-shopping-cart mr-1" /> Shop Now</Link>
                  </div>
                </Row>
              </Container>
            </section>
          {/*product ad end*/}
          {/*blog start*/}
          <section>
            <Container>
              <Row className="justify-content-center text-center mb-5">
                <Col md={10} lg={8} className="col-12">
                  <div>
                    <h6 className="text-primary mb-1">
                      — Furniture Blog
                        </h6>
                    <h2 className="mb-0">Latest News Feed</h2>
                  </div>
                </Col>
              </Row>
              {/* / .row */}
              <FurnitureBlog />
              <Row className="justify-content-center text-center mt-5">
                <Col> <Link className="btn btn-dark" to="/blog-card">View All Blog</Link>
                </Col>
              </Row>
            </Container>
          </section>
          {/*blog end*/}
          {/*brand logo start*/}
          <section className="pt-0">
            <Container>
              <Row>
                <Col>
                  <Clientlogo />
                </Col>
              </Row>
            </Container>
          </section>
          {/*brand logo end*/}
        </div>
        {/*body content end*/}
      </>
    );
  }
}

export default index5;