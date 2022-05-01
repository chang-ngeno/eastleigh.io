import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Pageheading from '../../widgets/pageheading';
import { Link } from 'react-router-dom';

class blogsingle extends Component {
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
                    <Pageheading foldername={"Pages"} title={"Blog Single"} />
                </section>
                {/*hero section end*/}
                {/*body content start*/}
                <div className="page-content">
                    {/*blog start*/}
                    <section>
                        <Container>
                            <Row>
                                <Col>
                                    {/* Blog Card */}
                                    <div className="card border-0 bg-transparent">
                                        <div className="position-relative rounded overflow-hidden">
                                            <div className="position-absolute z-index-1 bottom-0 bg-white text-primary shadow-primary text-center py-1 px-2 rounded ml-3 mb-3">15 Mar</div>
                                            <img className="card-img-top hover-zoom" src={require(`../../assets/images/blog/02.jpg`)} alt="Image" />
                                        </div>
                                        <div className="card-body pt-5 px-0">
                                            <h2>
                                                Spring summer fashion trends
                      </h2>
                                            <p>lights dominion divide years for fourth have don't stars is that saying. serspiciatis unde omnis iste natus error. The expert team at Brightscout specializes in building innovative technology solutions for enterprises. Our products and services unleash new levels of productivity, enhance collaboration amongst team members, and streamline large-scale communication. We utilize a powerful mix of exquisite design and innovative technology to resolve the issues that hold back many companies today.</p>
                                        </div>
                                        <p>Consequat dolor sit amet, consectetur adipiscing elit. Maecenas lobortis quam id lectus aliquet euismod. Ut sagittis et augue dui gravida Cras ultricies ligula sed magna dictum porta, Sed ut perspiciatis unde omnis iste natus error sit voluptat erci tation ullamco laboris nisi ut aliq uip.eiu smod tempor the incidi dunt ut labore et dolore magna aliqua. Phasellus eget purus id felis dignissim convallis Suspendisse et augue dui gravida Cras ultricies ligula sed magna dictum porta, Sed ut perspiciatis unde omnis iste natus error sit voluptat erci tation ullamco laboris nisi ut aliq uip.eiu smod tempor the incidi dunt ut labore et dolore magna aliqua. Ut atenim ad minim veniam, quis nostrud exerci tation abore et dolore magna aliqua. Uhbt atenim</p>
                                        <blockquote className="card border p-5 mt-5 h6 text-center">" lights dominion divide years for fourth have don't stars is that saying. serspiciatis unde omnis iste natus error. The expert team at Brightscout specializes in building innovative technology solutions for enterprises. " <span className="text-primary mt-2 h5">- Marlo Jensen</span>
                                        </blockquote>
                                        <div className="d-md-flex justify-content-between mt-5 mb-8 shadow-sm p-4">
                                            <div className="d-flex align-items-center">
                                                <h6 className="mb-0 mr-4">Share It:</h6>
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
                                            <div className="d-flex align-items-center text-md-right mt-5 mt-md-0">
                                                <h6 className="mb-0 mr-4">Tags: </h6>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item"><Link className="btn link-title btn-sm bg-light m-1" to="#">Fashion</Link>
                                                    </li>
                                                    <li className="list-inline-item"><Link className="btn link-title btn-sm bg-light m-1" to="#">Trend</Link>
                                                    </li>
                                                    <li className="list-inline-item"><Link className="btn link-title btn-sm bg-light m-1" to="#">Shopping</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="owl-carousel no-pb" data-dots="false" data-items={2} data-margin={30} data-autoplay="true">
                                            <div className="item">
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
                                                    </div>
                                                    <div />
                                                </div>
                                            </div>
                                            <div className="item">
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
                                                    </div>
                                                    <div />
                                                </div>
                                            </div>
                                            <div className="item">
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
                                                    </div>
                                                    <div />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-7 border-top pt-7">
                                            <div className="mb-5">
                                                <h2>All Comments</h2>
                                            </div>
                                            <div className="media d-block d-md-flex">
                                                <img className="img-fluid rounded mr-md-4 mb-3 mb-md-0" alt="image" src={require(`../../assets/images/thumbnail/01.jpg`)} />
                                                <div className="media-body">
                                                    <div className="d-flex align-items-center">
                                                        <h6 className="mb-0 mr-3">Ember Lana</h6>  <small className="text-muted">April 09, 2020</small>
                                                    </div>
                                                    <p className="mt-2">Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi.</p> <Link className="btn btn-sm btn-primary btn-animated" to="#"><i className="lar la-comment-dots mr-1" /> Reply</Link>
                                                </div>
                                            </div>
                                            <div className="media d-block d-md-flex mt-8">
                                                <img className="img-fluid rounded mr-md-4 mb-3 mb-md-0" alt="image" src={require(`../../assets/images/thumbnail/02.jpg`)} />
                                                <div className="media-body">
                                                    <div className="d-flex align-items-center">
                                                        <h6 className="mb-0 mr-3">Scott Jones</h6>  <small className="text-muted">April 09, 2020</small>
                                                    </div>
                                                    <p className="mt-2">Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi.</p> <Link className="btn btn-sm btn-primary btn-animated" to="#"><i className="lar la-comment-dots mr-1" /> Reply</Link>
                                                </div>
                                            </div>
                                            <div className="media d-block d-md-flex mt-8">
                                                <img className="img-fluid rounded mr-md-4 mb-3 mb-md-0" alt="image" src={require(`../../assets/images/thumbnail/03.jpg`)} />
                                                <div className="media-body">
                                                    <div className="d-flex align-items-center">
                                                        <h6 className="mb-0 mr-3">Amber Holmes</h6>  <small className="text-muted">April 09, 2020</small>
                                                    </div>
                                                    <p className="mt-2">Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi.</p> <Link className="btn btn-sm btn-primary btn-animated" to="#"><i className="lar la-comment-dots mr-1" /> Reply</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-comments mt-8 shadow-sm p-5">
                                            <div className="mb-5">
                                                <h2>Leave A Comment</h2>
                                            </div>
                                            <form id="contact-form" className="row" method="post" action="contact.php">
                                                <div className="messages" />
                                                <div className="form-group col-sm-6">
                                                    <input id="form_name" type="text" name="name" className="form-control" placeholder="Name" required="required" data-error="Name is required." />
                                                    <div className="help-block with-errors" />
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <input id="form_email" type="email" name="email" className="form-control" placeholder="Email" required="required" data-error="Valid email is required." />
                                                    <div className="help-block with-errors" />
                                                </div>
                                                <div className="form-group mb-0 col-sm-12">
                                                    <textarea id="form_message" name="message" className="form-control h-100" placeholder="Your Comment" rows={4} required="required" data-error="Please,leave us a message." defaultValue={""} />
                                                    <div className="help-block with-errors" />
                                                </div>
                                                <Col sm={12}>
                                                    <button className="btn btn-primary btn-animated mt-5">Post Comment</button>
                                                </Col>
                                            </form>
                                        </div>
                                        <div />
                                    </div>
                                    {/* End Blog Card */}
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

export default blogsingle;