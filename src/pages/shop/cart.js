import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import Pageheading from '../../widgets/pageheading';

class cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.GetCartItems = this.GetCartItems.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  GetCartItems() {
    return JSON.parse(localStorage.getItem("CartProduct"));
  }
  RemoveItem = (Index) => {
    var CartValue = JSON.parse(localStorage.getItem("CartProduct"));
    CartValue = CartValue.slice(0, Index).concat(CartValue.slice(Index + 1, CartValue.length));
    localStorage.removeItem("CartProduct");
    localStorage.setItem("CartProduct", JSON.stringify(CartValue));
  }

  AddQty = (Index) => {
    var CartValue = JSON.parse(localStorage.getItem("CartProduct"));
    CartValue[Index].Qty = parseInt(CartValue[Index].Qty + 1);
    localStorage.removeItem("CartProduct");
    localStorage.setItem("CartProduct", JSON.stringify(CartValue));
  }

  RemoveQty = (Index) => {
    var CartValue = JSON.parse(localStorage.getItem("CartProduct"));

    if (CartValue[Index].Qty != 1) {

      CartValue[Index].Qty = parseInt(CartValue[Index].Qty - 1);
      localStorage.removeItem("CartProduct");
      localStorage.setItem("CartProduct", JSON.stringify(CartValue));
    } else {
      this.RemoveItem(Index);
    }
  }

  render() {
    return (
      <>
        {/*hero section start*/}
        <section className="bg-light">
          <Pageheading foldername={"Shop"} title={"Product Cart"} />
        </section>
        {/*hero section end*/}
        {/*body content start*/}
        <div className="page-content">
          <section>
            <Container>
              {(this.GetCartItems() != null && this.GetCartItems().length > 0) ?
                <Row>
                  <div className="col-lg-8">
                    <div className="table-responsive">
                      <table className="cart-table table">
                        <thead>
                          <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.GetCartItems().map((CartItem, index) => (
                            <tr>
                              <td>
                                <div className="media align-items-center">
                                  <Link to="/">
                                    <img className="img-fluid" src={require(`../../assets/images/${CartItem.ProductImage}`)} style={{ height: '100px' }} alt="" />
                                  </Link>
                                  <div className="media-body ml-3">
                                    <div className="product-title mb-2"><Link className="link-title" to="#">{CartItem.ProductName}</Link>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td> <span className="product-price text-muted">
                                ${CartItem.Rate.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                              </span>
                              </td>
                              <td>
                                <div className="d-flex justify-content-center align-items-center">
                                  <Link className="btn-product btn-product-up" onClick={() => this.RemoveQty(index)}> <i className="las la-minus" />
                                  </Link>
                                  <input className="form-product" type="number" name="form-product" value={CartItem.Qty} />
                                  <Link className="btn-product btn-product-down" onClick={() => this.AddQty(index)}> <i className="las la-plus" />
                                  </Link>
                                </div>
                              </td>
                              <td> <span className="product-price text-dark font-w-6">
                                ${(CartItem.Rate * CartItem.Qty).toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                              </span>
                                <Link type="submit" className="btn btn-primary btn-sm" onClick={() => this.RemoveItem(index)}><i className="las la-times" />
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="d-md-flex align-items-end justify-content-between border-top pt-5">
                      <div>
                        <label className="text-black h4" htmlFor="coupon">Coupon</label>
                        <p>Enter your coupon code if you have one.</p>
                        <Row className="form-row">
                          <Col>
                            <input className="form-control" id="coupon" placeholder="Coupon Code" type="text" />
                          </Col>
                          <div className="col col-auto">
                            <button className="btn btn-dark btn-animated">Apply Coupon</button>
                          </div>
                        </Row>
                      </div>
                      <button className="btn btn-primary btn-animated mt-3 mt-md-0">Update Cart</button>
                    </div>
                  </div>
                  <div className="col-lg-4 pl-lg-5 mt-8 mt-lg-0">
                    <div className="shadow rounded p-5">
                      <h4 className="text-black text-center mb-2">Cart Totals</h4>
                      <div className="d-flex justify-content-between align-items-center border-bottom py-3"> <span className="text-muted">Subtotal</span>  <span className="text-dark">${this.GetCartItems().reduce((fr, CartItem) => fr + (CartItem.Qty * CartItem.Rate), 0).toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center border-bottom py-3"> <span className="text-muted">Tax</span>  <span className="text-dark">$00.00</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center pt-3 mb-5"> <span className="text-dark h5">Total</span>  <span className="text-dark font-weight-bold h5">${this.GetCartItems().reduce((fr, CartItem) => fr + (CartItem.Qty * CartItem.Rate), 0).toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</span>
                      </div>
                      <Link className="btn btn-primary btn-animated btn-block" to="/checkout">Proceed To Checkout</Link>
                      <Link className="btn btn-dark btn-animated mt-3" to="/grid-left-sidebar">Continue Shopping</Link>
                    </div>
                  </div>
                </Row>
                :
                <Row>
                  <Col md={12} className="text-center pb-11">
                    <h3 className="mb-4">Your cart is Currently Empty.</h3>
                    <Link className="btn btn-primary mr-3" to="/">Homes</Link>
                    <Link className="btn btn-primary" to="/grid-left-sidebar">Continue Shoppings</Link>

                  </Col>
                </Row>
              }
            </Container>
          </section>
        </div>
        {/*body content end*/}
      </>
    );
  }
}

export default cart;