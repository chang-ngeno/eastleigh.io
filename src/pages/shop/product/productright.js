import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import OwlCarousel from 'react-owl-carousel';
import Pageheading from '../../../widgets/pageheading';
window.fn = OwlCarousel;

class productright extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductList: this.props.products,
      ActiveProductID: parseInt(this.props.match.params.id),
      SelectedProduct: null,
      SelectedTab: '1',
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
    }
    this.toggle = this.toggle.bind(this);
    this.onChangeColor = this.onChangeColor.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0)
    let ActiveProduct = this.state.ActiveProductID;
    let ProductList = this.state.ProductList;
    if (ProductList && ProductList.length > 0) {
      ProductList.map((product) => {
        if (product.id === ActiveProduct) {
          this.setState({
            ...this.state,
            SelectedProduct: product
          })
        }
      })
    }
  }
  AddToCart(ProductID, ProductName, ProductImage, Qty, Rate, StockStatus) {
    var Cart = JSON.parse(localStorage.getItem("CartProduct"));
    if (Cart == null)
      Cart = new Array();
    let selectedProduct = Cart.find(product => product.ProductID === ProductID);
    if (selectedProduct == null) {
      Cart.push({ ProductID: ProductID, ProductName: ProductName, ProductImage: ProductImage, Qty: Qty, Rate: Rate, StockStatus: StockStatus });
      localStorage.removeItem("CartProduct");
      localStorage.setItem("CartProduct", JSON.stringify(Cart));
      var flag = 0;
      if (flag == 0) {
        toast.success("Item Added to Cart");
        flag = 1;
      }
    }
    else {
      toast.warning("Item is already in Cart");
    }
  }
  AddToWishList(ProductID, ProductName, ProductImage, Qty, Rate, StockStatus) {
    var Cart = JSON.parse(localStorage.getItem("WishlistProduct"));
    if (Cart == null)
      Cart = new Array();

    let selectedProduct = Cart.find(product => product.ProductID === ProductID);
    if (selectedProduct == null) {

      Cart.push({ ProductID: ProductID, ProductName: ProductName, ProductImage: ProductImage, Qty: Qty, Rate: Rate, StockStatus: StockStatus });
      localStorage.removeItem("WishlistProduct");
      localStorage.setItem("WishlistProduct", JSON.stringify(Cart));

      toast.success("Item Added to WishList");
    }
    else {
      toast.warning("Item is already in WishList");
    }


  }
  CheckCardItem(ID) {
    let checkcart = false;
    var Cart = JSON.parse(localStorage.getItem("CartProduct"));
    if (Cart && Cart.length > 0) {
      for (const cartItem of Cart) {
        if (cartItem.ProductID === ID) {
          checkcart = true
        }
      }
    }
    return checkcart;
  }
  CheckWishList(ID) {
    let wishlist = false;
    var Wish = JSON.parse(localStorage.getItem("WishlistProduct"));

    if (Wish && Wish.length > 0) {
      for (const wishItem of Wish) {
        if (wishItem.ProductID === ID) {
          wishlist = true
        }
      }
    }
    return wishlist;
  }
  onChangeColor(event) {
    console.log(event.target.value);

    this.setState({
      selectedColor: event.target.value
    });
  }
  toggle(tab) {
    if (this.state.SelectedTab !== tab) {
      this.setState({
        SelectedTab: tab
      });
    }
  }
  render() {
    const { ProductList, SelectedProduct } = this.state;
    let rat = [];
    if (SelectedProduct !== null) {
      let rating = SelectedProduct.rating;
      let i = 1;
      while (i <= 5) {
        if (i <= rating) {
          rat.push(<i className="ti-star" style={{ color: 'gold' }} ></i>)
        }
        else {
          rat.push(<i className="ti-star" style={{ color: 'burlywood' }} ></i>)
        }
        i += 1;
      };
    }
    return (
      <>
        {/*hero section start*/}
        <section className="bg-light">
          <Pageheading foldername={"Shop"} title={"Product Right Image"} />
        </section>
        {/*hero section end*/}
        {/*body content start*/}
        <div className="page-content">
          {/*product details start*/}
          {(SelectedProduct !== null) ?
            <>
              <section className="product-right">
                <Container>
                  <Row>
                    <div className="col-lg-6 col-12 order-lg-1">
                      <OwlCarousel
                        className="owl-carousel"
                        id="imageGallery"
                        dotData={true}
                        items={1}
                        autoplay={true}
                      >
                        {SelectedProduct.pictures.map((image, index) => {
                          return (
                            <div className="item" key={index}>
                              <img className="img-fluid w-100" src={require(`../../../assets/images/${image}`)} alt="" />
                            </div>
                          )
                        })}
                      </OwlCarousel>
                    </div>
                    <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                      <div className="product-details">
                        <h3 className="mb-0">
                          {SelectedProduct.name}
                        </h3>
                        <div className="star-rating mb-4"><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                        </div> <span className="product-price h4">${SelectedProduct.price}  <del className="text-muted h6">${SelectedProduct.salePrice}</del></span>
                        <ul className="list-unstyled my-4">
                          <li className="mb-2">Availibility: <span className="text-muted"> In Stock</span>
                          </li>
                          <li>Categories :<span className="text-muted">  {SelectedProduct.category}</span>
                          </li>
                        </ul>
                        <p className="mb-4">{SelectedProduct.description}</p>
                        <div className="d-sm-flex align-items-center mb-5">
                          <div className="d-flex align-items-center mr-sm-4">
                            <button className="btn-product btn-product-up"> <i className="las la-minus" />
                            </button>
                            <input className="form-product" type="number" name="form-product" defaultValue={1} />
                            <button className="btn-product btn-product-down"> <i className="las la-plus" />
                            </button>
                          </div>
                          <select className="custom-select mt-3 mt-sm-0" id="inputGroupSelect02">
                            {SelectedProduct.size.map((sizes, index) => {
                              return (<option key={index}>{sizes}</option>)
                            }
                            )}
                          </select>
                          <div className="d-flex text-center ml-sm-4 mt-3 mt-sm-0" >
                            {SelectedProduct.colors.map((color, index) => {
                              return (
                                <div className="form-check pl-0 mr-3">
                                  <input type="radio" value={color} id={`color-filter${index}`} className="form-check-input" checked={this.state.selectedColor === color}
                                    onChange={this.onChangeColor} />
                                  <label className="form-check-label" htmlFor={`color-filter${index}`} style={{ background: color }} />
                                </div>
                              )
                            }
                            )}
                          </div>
                        </div>
                        <div className="d-sm-flex align-items-center mt-5">
                          {!this.CheckCardItem(SelectedProduct.id) ?
                            <Link to="#" onClick={() => this.AddToCart(SelectedProduct.id, SelectedProduct.name, SelectedProduct.pictures[0], 1, SelectedProduct.salePrice, "In Stock")} className="btn btn-primary btn-animated mr-sm-4 mb-3 mb-sm-0" rel="nofollow"><i className="las la-shopping-cart mr-1" />Add To Cart</Link>
                            :
                            <Link to="/cart" className="btn btn-primary btn-animated mr-sm-4 mb-3 mb-sm-0" rel="nofollow"><i className="las la-shopping-cart mr-1" />View Cart</Link>
                          }

                          {!this.CheckWishList(SelectedProduct.id) ?
                            <Link to="#" onClick={() => this.AddToWishList(SelectedProduct.id, SelectedProduct.name, SelectedProduct.pictures[0], 1, SelectedProduct.salePrice, "In Stock")} className="btn btn-animated btn-dark"> <i className="lar la-heart mr-1" />Add To Wishlist</Link>
                            :
                            <Link to="/wishlist" className="btn btn-animated btn-dark"><i className="lar la-heart mr-1" />View Wishlist</Link>
                          }
                        </div>
                        <div className="d-flex align-items-center border-top border-bottom py-4 mt-5">
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
                      </div>
                    </div>
                  </Row>
                </Container>
              </section>
              {/*product details end*/}
              <section className="p-0">
                <Container>
                  <Row>
                    <Col md={12}>
                      <div className="tab">
                        {/* Nav tabs */}
                        <Nav tabs>
                          <NavItem active>
                            <NavLink className={classnames({ active: this.state.SelectedTab === '1' })} onClick={() => { this.toggle('1'); }} >Description</NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink className={classnames({ active: this.state.SelectedTab === '2' })} onClick={() => { this.toggle('2'); }}>Additional information</NavLink>
                          </NavItem>
                          <NavItem disabled>
                            <NavLink className={classnames({ active: this.state.SelectedTab === '3' })} onClick={() => { this.toggle('3'); }}>Reviews (2)</NavLink>
                          </NavItem>
                        </Nav>
                        {/* Tab panes */}
                        <TabContent activeTab={this.state.SelectedTab} className="pt-5 p-0">
                          <TabPane tabId="1" className="fade show" active>
                            <Row className="align-items-center">
                              <div className="col-md-5">
                                <img className="img-fluid w-100" src={require(`../../../assets/images/${SelectedProduct.pictures[0]}`)} alt="" />
                              </div>
                              <div className="col-md-7 mt-5 mt-lg-0">
                                <h3 className="mb-3">{SelectedProduct.name}</h3>
                                <p className="mb-5">{SelectedProduct.description}</p> <Link className="btn btn-primary btn-animated" to="#"><i className="las la-long-arrow-alt-right mr-1" />Read More</Link>
                              </div>
                            </Row>
                          </TabPane>
                          <TabPane tabId="2" className="fade show">
                            <table className="table table-bordered mb-0">
                              <tbody>
                                <tr>
                                  <td>Size</td>
                                  <td>Small, Medium, Large &amp; Extra Large</td>
                                </tr>
                                <tr>
                                  <td>Color</td>
                                  <td>Yellow, Red, Blue, Green &amp; Black</td>
                                </tr>
                                <tr>
                                  <td>Chest</td>
                                  <td>38 inches</td>
                                </tr>
                                <tr>
                                  <td>Waist</td>
                                  <td>20 cm</td>
                                </tr>
                                <tr>
                                  <td>Length</td>
                                  <td>35 cm</td>
                                </tr>
                                <tr>
                                  <td>Fabric</td>
                                  <td>Cotton, Silk &amp; Synthetic</td>
                                </tr>
                                <tr>
                                  <td>Warranty</td>
                                  <td>6 Months</td>
                                </tr>
                              </tbody>
                            </table>
                          </TabPane>
                          <TabPane tabId="3" className="fade show">
                            <Row className="align-items-center">
                              <Col md={6}>
                                <div className="shadow-sm text-center p-5">
                                  <h4>Based on 3 Reviews</h4>
                                  <h5>Average</h5>
                                  <h4>4.0</h4>
                                  <h6>(03 Reviews)</h6>
                                </div>
                              </Col>
                              <Col md={6} className="mt-3 mt-lg-0">
                                <div className="rating-list">
                                  <div className="d-flex align-items-center mb-2">
                                    <div className="text-nowrap mr-3">5 Star</div>
                                    <div className="w-100">
                                      <div className="progress" style={{ height: '5px' }}>
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                                      </div>
                                    </div><span className="text-muted ml-3">90%</span>
                                  </div>
                                  <div className="d-flex align-items-center mb-2">
                                    <div className="text-nowrap mr-3">4 Star</div>
                                    <div className="w-100">
                                      <div className="progress" style={{ height: '5px' }}>
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '60%' }} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                      </div>
                                    </div><span className="text-muted ml-3">60%</span>
                                  </div>
                                  <div className="d-flex align-items-center mb-2">
                                    <div className="text-nowrap mr-3">3 Star</div>
                                    <div className="w-100">
                                      <div className="progress" style={{ height: '5px' }}>
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                      </div>
                                    </div><span className="text-muted ml-3">40%</span>
                                  </div>
                                  <div className="d-flex align-items-center mb-2">
                                    <div className="text-nowrap mr-3">2 Star</div>
                                    <div className="w-100">
                                      <div className="progress" style={{ height: '5px' }}>
                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '20%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                                      </div>
                                    </div><span className="text-muted ml-3">20%</span>
                                  </div>
                                  <div className="d-flex align-items-center mb-2">
                                    <div className="text-nowrap mr-3">1 Star</div>
                                    <div className="w-100">
                                      <div className="progress" style={{ height: '5px' }}>
                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '10%' }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                                      </div>
                                    </div><span className="text-muted ml-3">10%</span>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                            <div className="media-holder mt-5">
                              <div className="media d-block d-md-flex">
                                <img className="img-fluid align-self-center rounded mr-md-3 mb-3 mb-md-0" alt="image" src={require(`../../../assets/images/thumbnail/01.jpg`)} />
                                <div className="media-body">
                                  <div className="d-flex align-items-center">
                                    <h6 className="mb-0">Ember Lana</h6>
                                    <small className="mx-3 text-muted">April 09, 2020</small>
                                    <div className="star-rating"><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                                    </div>
                                  </div>
                                  <p className="mb-0 mt-3">Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi.</p>
                                </div>
                              </div>
                            </div>
                            <div className="media-holder review-list mt-5">
                              <div className="media d-block d-md-flex">
                                <img className="img-fluid align-self-center rounded mr-md-3 mb-3 mb-md-0" alt="image" src={require(`../../../assets/images/thumbnail/02.jpg`)} />
                                <div className="media-body">
                                  <div className="d-flex align-items-center">
                                    <h6 className="mb-0">Scott Jones</h6>
                                    <small className="mx-3 text-muted">March 15, 2020</small>
                                    <div className="star-rating"><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                                    </div>
                                  </div>
                                  <p className="mb-0 mt-3">Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi.</p>
                                </div>
                              </div>
                            </div>
                            <div className="media-holder review-list mt-5">
                              <div className="media d-block d-md-flex">
                                <img className="img-fluid align-self-center rounded mr-md-3 mb-3 mb-md-0" alt="image" src={require(`../../../assets/images/thumbnail/03.jpg`)} />
                                <div className="media-body">
                                  <div className="d-flex align-items-center">
                                    <h6 className="mb-0">Amber Holmes</h6>
                                    <small className="mx-3 text-muted">February 26, 2020</small>
                                    <div className="star-rating"><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                                    </div>
                                  </div>
                                  <p className="mb-0 mt-3">Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi.</p>
                                </div>
                              </div>
                            </div>
                            <div className="mt-8 shadow p-5">
                              <div className="section-title mb-3">
                                <h4>Add a review</h4>
                              </div>
                              <form id="contact-form" className="row" method="post" action="contact.php">
                                <div className="messages" />
                                <div className="form-group col-sm-6">
                                  <input id="form_name" type="text" name="name" className="form-control" placeholder="Your Name" required="required" data-error="Name is required." />
                                  <div className="help-block with-errors" />
                                </div>
                                <div className="form-group col-sm-6">
                                  <input id="form_email" type="email" name="email" className="form-control" placeholder="Your Email Address" required="required" data-error="Valid email is required." />
                                  <div className="help-block with-errors" />
                                </div>
                                <div className="form-group clearfix col-12">
                                  <select className="custom-select form-control">
                                    <option value>Rating -- Select</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                  </select>
                                </div>
                                <div className="form-group col-12">
                                  <textarea id="form_message" name="message" className="form-control" placeholder="Write Your Review" rows={4} required="required" data-error="Please,leave us a review." defaultValue={""} />
                                  <div className="help-block with-errors" />
                                </div>
                                <Col>
                                  <button className="btn btn-primary btn-animated mt-3">Post Review</button>
                                </Col>
                              </form>
                            </div>
                          </TabPane>
                        </TabContent>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>
            </>
            : null}
          <section>
            <Container>
              <Row className="justify-content-center text-center">
                <Col lg={8} md={10}>
                  <div className="mb-5">
                    <h6 className="text-primary mb-1">
                      — You may also like
                    </h6>
                    <h2 className="mb-0">Related Products</h2>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <OwlCarousel
                    className="no-pb owl-2"
                    dotData={false}
                    nav={true}
                    autoplay={true}
                    {...this.state.options}
                  >
                    <div className="item">
                      <div className="card product-card">
                        <button className="btn-wishlist btn-sm" type="button" data-toggle="tooltip" data-placement="left" title="Add to wishlist"><i className="lar la-heart" />
                        </button>
                        <Link className="card-img-hover d-block" to="/product-single-left/Woman/1">
                          <img className="card-img-top card-img-back" src={require(`../../../assets/images/product/main/02.jpg`)} alt="..." />
                          <img className="card-img-top card-img-front" src={require(`../../../assets/images/product/main/01.jpg`)} alt="..." />
                        </Link>
                        <div className="card-info">
                          <div className="card-body">
                            <div className="product-title"><Link className="link-title" to="/product-single-left/Woman/1">Women Lather Jacket</Link>
                            </div>
                            <div className="mt-1"> <span className="product-price"><del className="text-muted">$35.00</del> $25.00</span>
                              <div className="star-rating"><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                              </div>
                            </div>
                          </div>
                          <div className="card-footer bg-transparent border-0">
                            <div className="product-link d-flex align-items-center justify-content-center">
                              <button className="btn btn-compare" data-toggle="tooltip" data-placement="top" title="Compare" type="button"><i className="las la-random" />
                              </button>
                              <button className="btn-cart btn btn-primary btn-animated mx-3" type="button"><i className="las la-shopping-cart mr-1" />
                              </button>
                              <button className="btn btn-view" data-toggle="tooltip" data-placement="top" title="Quick View"><span data-target="#quick-view" data-toggle="modal"><i className="las la-eye" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="card product-card">
                        <button className="btn-wishlist btn-sm" type="button" data-toggle="tooltip" data-placement="left" title="Add to wishlist"><i className="lar la-heart" />
                        </button>
                        <Link className="card-img-hover d-block" to="/product-single-left/Woman/1">
                          <img className="card-img-top card-img-back" src={require(`../../../assets/images/product/main/12.jpg`)} alt="..." />
                          <img className="card-img-top card-img-front" src={require(`../../../assets/images/product/main/11.jpg`)} alt="..." />
                        </Link>
                        <div className="card-info">
                          <div className="card-body">
                            <div className="product-title"><Link className="link-title" to="/product-single-left/Woman/1">Bright Hipster Cloth</Link>
                            </div>
                            <div className="mt-1"> <span className="product-price"><del className="text-muted">$42.00</del> $37.00</span>
                              <div className="star-rating"><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                              </div>
                            </div>
                          </div>
                          <div className="card-footer bg-transparent border-0">
                            <div className="product-link d-flex align-items-center justify-content-center">
                              <button className="btn btn-compare" data-toggle="tooltip" data-placement="top" title="Compare" type="button"><i className="las la-random" />
                              </button>
                              <button className="btn-cart btn btn-primary btn-animated mx-3" type="button"><i className="las la-shopping-cart mr-1" />
                              </button>
                              <button className="btn btn-view" data-toggle="tooltip" data-placement="top" title="Quick View"><span data-target="#quick-view" data-toggle="modal"><i className="las la-eye" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="card product-card">
                        <button className="btn-wishlist btn-sm" type="button" data-toggle="tooltip" data-placement="left" title="Add to wishlist"><i className="lar la-heart" />
                        </button>
                        <Link className="card-img-hover d-block" to="/product-single-left/Woman/1">
                          <img className="card-img-top card-img-back" src={require(`../../../assets/images/product/main/14.jpg`)} alt="..." />
                          <img className="card-img-top card-img-front" src={require(`../../../assets/images/product/main/13.jpg`)} alt="..." />
                        </Link>
                        <div className="card-info">
                          <div className="card-body">
                            <div className="product-title"><Link className="link-title" to="/product-single-left/Woman/1">Men's Brand Tshirts</Link>
                            </div>
                            <div className="mt-1"> <span className="product-price"><del className="text-muted">$18.00</del> $15.00</span>
                              <div className="star-rating"><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                              </div>
                            </div>
                          </div>
                          <div className="card-footer bg-transparent border-0">
                            <div className="product-link d-flex align-items-center justify-content-center">
                              <button className="btn btn-compare" data-toggle="tooltip" data-placement="top" title="Compare" type="button"><i className="las la-random" />
                              </button>
                              <button className="btn-cart btn btn-primary btn-animated mx-3" type="button"><i className="las la-shopping-cart mr-1" />
                              </button>
                              <button className="btn btn-view" data-toggle="tooltip" data-placement="top" title="Quick View"><span data-target="#quick-view" data-toggle="modal"><i className="las la-eye" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="card product-card">
                        <button className="btn-wishlist btn-sm" type="button" data-toggle="tooltip" data-placement="left" title="Add to wishlist"><i className="lar la-heart" />
                        </button>
                        <Link className="card-img-hover d-block" to="/product-single-left/Woman/1">
                          <img className="card-img-top card-img-back" src={require(`../../../assets/images/product/main/10.jpg`)} alt="..." />
                          <img className="card-img-top card-img-front" src={require(`../../../assets/images/product/main/09.jpg`)} alt="..." />
                        </Link>
                        <div className="card-info">
                          <div className="card-body">
                            <div className="product-title"><Link className="link-title" to="/product-single-left/Woman/1">Luxury Fashion Bag</Link>
                            </div>
                            <div className="mt-1"> <span className="product-price"><del className="text-muted">$19.00</del> $13.00</span>
                              <div className="star-rating"><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                              </div>
                            </div>
                          </div>
                          <div className="card-footer bg-transparent border-0">
                            <div className="product-link d-flex align-items-center justify-content-center">
                              <button className="btn btn-compare" data-toggle="tooltip" data-placement="top" title="Compare" type="button"><i className="las la-random" />
                              </button>
                              <button className="btn-cart btn btn-primary btn-animated mx-3" type="button"><i className="las la-shopping-cart mr-1" />
                              </button>
                              <button className="btn btn-view" data-toggle="tooltip" data-placement="top" title="Quick View"><span data-target="#quick-view" data-toggle="modal"><i className="las la-eye" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
                </Col>
              </Row>
            </Container>
          </section>

        </div>
        {/*body content end*/}
      </>
    );
  }
}

const ProductStatetoProps = state => {
  return {
    products: state.data.products
  };
};

export default connect(ProductStatetoProps)(withRouter(productright));