import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Pageheading from '../../widgets/pageheading';
import { Link } from 'react-router-dom';

class bloglist2 extends Component {
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
                    <Pageheading foldername={"Pages"} title={"Blog Listing 2"} />
                </section>
                {/*hero section end*/}
                {/*body content start*/}
                <div className="page-content">
                    {/*blog start*/}
                    <section>
                        <Container>
                            <Row className="justify-content-center mb-11">
                                <Col lg={8} className="col-12">
                                    <form className="form-inline my-2 my-lg-0">
                                        <input className="form-control mr-sm-2 col" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-primary my-2 my-sm-0 col-auto" type="submit">Search Blog</button>
                                    </form>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="col-12 col-lg-8 mb-6 mb-lg-0 order-lg-1">
                                    {/* Blog Card */}
                                    <div className="card border-0 bg-transparent">
                                        <div className="position-relative rounded overflow-hidden">
                                            <div className="position-absolute z-index-1 bottom-0 bg-white text-primary shadow-primary text-center py-1 px-2 rounded ml-3 mb-3">20 Apr</div>
                                            <img className="card-img-top hover-zoom" src={require(`../../assets/images/blog/01.jpg`)} alt="Image" />
                                        </div>
                                        <div className="card-body px-0 pb-0">
                                            <div> <Link className="d-inline-block link-title btn-link text-small mr-2" to="#">Cloth,</Link>
                                                <Link className="d-inline-block link-title btn-link text-small" to="#">Fashion</Link>
                                            </div>
                                            <h2 className="h5 font-w-6 mt-2 mb-0">
                                                <Link className="link-title" to="/blog-single">Spring summer fashion trends new high collection</Link>
                                            </h2>
                                            <p className="mt-2 mb-3">lights dominion divide years for fourth have don't stars is that saying. serspiciatis unde omnis iste natus error. The expert team at Brightscout specializes in building innovative technology solutions for enterprises. </p>
                                            <Link className="btn btn-outline-dark" to="/blog-single">Read Details</Link>
                                        </div>
                                        <div />
                                    </div>
                                    {/* End Blog Card */}
                                    <hr className="my-8" />
                                    {/* Blog Card */}
                                    <div className="card border-0 bg-transparent">
                                        <div className="position-relative rounded overflow-hidden">
                                            <div className="position-absolute z-index-1 bottom-0 bg-white text-primary shadow-primary text-center py-1 px-2 rounded ml-3 mb-3">15 Mar</div>
                                            <img className="card-img-top hover-zoom" src={require(`../../assets/images/blog/02.jpg`)} alt="Image" />
                                        </div>
                                        <div className="card-body px-0 pb-0">
                                            <div> <Link className="d-inline-block link-title btn-link text-small mr-2" to="#">Cloth,</Link>
                                                <Link className="d-inline-block link-title btn-link text-small" to="#">Fashion</Link>
                                            </div>
                                            <h2 className="h5 font-w-6 mt-3">
                                                <Link className="link-title" to="/blog-single">When it’s Winter outdoors gifts but you feel like ekocart</Link>
                                            </h2>
                                            <p className="mt-2 mb-3">lights dominion divide years for fourth have don't stars is that saying. serspiciatis unde omnis iste natus error. The expert team at Brightscout specializes in building innovative technology solutions for enterprises. </p>
                                            <Link className="btn btn-outline-dark" to="/blog-single">Read Details</Link>
                                        </div>
                                        <div />
                                    </div>
                                    {/* End Blog Card */}
                                    <hr className="my-8" />
                                    {/* Blog Card */}
                                    <div className="card border-0 bg-transparent">
                                        <div className="position-relative rounded overflow-hidden">
                                            <div className="position-absolute z-index-1 bottom-0 bg-white text-primary shadow-primary text-center py-1 px-2 rounded ml-3 mb-3">13 Apr</div>
                                            <img className="card-img-top hover-zoom" src={require(`../../assets/images/blog/03.jpg`)} alt="Image" />
                                        </div>
                                        <div className="card-body px-0 pb-0">
                                            <div> <Link className="d-inline-block link-title btn-link text-small mr-2" to="#">Cloth,</Link>
                                                <Link className="d-inline-block link-title btn-link text-small" to="#">Fashion</Link>
                                            </div>
                                            <h2 className="h5 font-w-6 mt-3">
                                                <Link className="link-title" to="/blog-single">Whatever the will make it special For You Every</Link>
                                            </h2>
                                            <p className="mt-2 mb-3">lights dominion divide years for fourth have don't stars is that saying. serspiciatis unde omnis iste natus error. The expert team at Brightscout specializes in building innovative technology solutions for enterprises. </p>
                                            <Link className="btn btn-outline-dark" to="/blog-single">Read Details</Link>
                                        </div>
                                        <div />
                                    </div>
                                    {/* End Blog Card */}
                                    <div className="mt-8">
                                        <nav aria-label="Page navigation">
                                            <ul className="pagination">
                                                <li className="page-item"><Link className="page-link" to="#">Previous</Link>
                                                </li>
                                                <li className="page-item"><Link className="page-link" to="#">1</Link>
                                                </li>
                                                <li className="page-item"><Link className="page-link" to="#">2</Link>
                                                </li>
                                                <li className="page-item"><Link className="page-link" to="#">3</Link>
                                                </li>
                                                <li className="page-item"><Link className="page-link" to="#">Next</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </Col>
                                <Col lg={4} className="col-12">
                                    <div className="shadow-sm p-5 rounded">
                                        <div className="widget border-bottom mb-8 pb-8">
                                            <h4 className="mb-5">Recent Stories</h4>
                                            <article>
                                                <div className="media align-items-center">
                                                    <img src={require(`../../assets/images/blog/blog-thumb/01.jpg`)} className="mr-3" alt="..." />
                                                    <div className="media-body">
                                                        <h5 className="h6">
                                                            <Link className="link-title" to="/blog-single">Spring summer fashion trends</Link>
                                                        </h5>
                                                        <Link className="d-inline-block text-muted small font-w-5" to="#">20 April 2019</Link>
                                                    </div>
                                                </div>
                                            </article>
                                            <article className="mt-5">
                                                <div className="media align-items-center">
                                                    <img src={require(`../../assets/images/blog/blog-thumb/02.jpg`)} className="mr-3" alt="..." />
                                                    <div className="media-body">
                                                        <h5 className="h6">
                                                            <Link className="link-title" to="/blog-single">2020 styling trend</Link>
                                                        </h5>
                                                        <Link className="d-inline-block text-muted small font-w-5" to="#">15 April 2019</Link>
                                                    </div>
                                                </div>
                                            </article>
                                            <article className="mt-5">
                                                <div className="media align-items-center">
                                                    <img src={require(`../../assets/images/blog/blog-thumb/03.jpg`)} className="mr-3" alt="..." />
                                                    <div className="media-body">
                                                        <h5 className="h6">
                                                            <Link className="link-title" to="/blog-single">Is branched For You Every</Link>
                                                        </h5>
                                                        <Link className="d-inline-block text-muted small font-w-5" to="#">5 April 2019</Link>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                        <div className="widget border-bottom mb-8 pb-8">
                                            <h4 className="mb-5">Categories</h4>
                                            <ul className="list-unstyled list-group-flush">
                                                <li className="mb-4"> <Link className="list-group-item-action d-flex justify-content-between align-items-center" to="#">
                                                    All
                                <span className="badge badge-primary-soft text-dark font-weight-normal p-2 badge-pill ml-2">74</span>
                                                </Link>
                                                </li>
                                                <li className="mb-4"> <Link className="list-group-item-action d-flex justify-content-between align-items-center" to="#">
                                                    Arts and Entertainment
                                <span className="badge badge-primary-soft text-dark font-weight-normal p-2 badge-pill ml-2">23</span>
                                                </Link>
                                                </li>
                                                <li className="mb-4"> <Link className="list-group-item-action d-flex justify-content-between align-items-center" to="#">
                                                    Featured
                                <span className="badge badge-primary-soft text-dark font-weight-normal p-2 badge-pill ml-2">14</span>
                                                </Link>
                                                </li>
                                                <li className="mb-4"> <Link className="list-group-item-action d-flex justify-content-between align-items-center" to="#">
                                                    Daily news
                                <span className="badge badge-primary-soft text-dark font-weight-normal p-2 badge-pill ml-2">48</span>
                                                </Link>
                                                </li>
                                                <li> <Link className="list-group-item-action d-flex justify-content-between align-items-center" to="#">
                                                    Blog Post
                                <span className="badge badge-primary-soft text-dark font-weight-normal p-2 badge-pill ml-2">32</span>
                                                </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="widget border-bottom mb-8 pb-8">
                                            <h4 className="mb-5">Tags</h4>
                                            <div> <Link className="btn link-title btn-sm bg-light m-1" to="#">Bootsland</Link>
                                                <Link className="btn link-title btn-sm bg-light m-1" to="#">Web Design</Link>
                                                <Link className="btn link-title btn-sm bg-light m-1" to="#">Saas</Link>
                                                <Link className="btn link-title btn-sm bg-light m-1" to="#">Corporate</Link>
                                                <Link className="btn link-title btn-sm bg-light m-1" to="#">Sass</Link>
                                                <Link className="btn link-title btn-sm bg-light m-1" to="#">Software</Link>
                                                <Link className="btn link-title btn-sm bg-light m-1" to="#">Landing</Link>
                                                <Link className="btn link-title btn-sm bg-light m-1" to="#">Startup</Link>
                                            </div>
                                        </div>
                                        <div className="widget bg-light p-4 text-center rounded">
                                            <div>
                                                <h6 className="text-dark">New Arrivals</h6>
                                                <h4 className="text-primary">Explore Our Shop</h4>
                                            </div>
                                            <div className="position-relative mt-4">
                                                <img className="img-fluid" src={require(`../../assets/images/product-ad/04.jpg`)} alt="" />
                                                <div className="position-absolute top-50 w-100"><Link className="btn btn-primary btn-animated" to="#">Shop Now
                              </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    {/*blog end*/}
                </div>
                {/*body content end*/}
            </>
        );
    }
}

export default bloglist2;