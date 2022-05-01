import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import Pageheading from '../../widgets/pageheading';
import { toast, ToastContainer } from 'react-toastify';

class wishlist extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.GetWishlistItems = this.GetWishlistItems.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  GetWishlistItems() {
    return JSON.parse(localStorage.getItem("WishlistProduct"));
  }
  RemoveItem = (Index) => {
    var CartValue = JSON.parse(localStorage.getItem("WishlistProduct"));
    CartValue = CartValue.slice(0, Index).concat(CartValue.slice(Index + 1, CartValue.length));
    localStorage.removeItem("WishlistProduct");
    localStorage.setItem("WishlistProduct", JSON.stringify(CartValue));
  }

  RemoveQty = (Index) => {
    var CartValue = JSON.parse(localStorage.getItem("WishlistProduct"));

    if (CartValue[Index].Qty != 1) {

      CartValue[Index].Qty = parseInt(CartValue[Index].Qty - 1);
      localStorage.removeItem("WishlistProduct");
      localStorage.setItem("WishlistProduct", JSON.stringify(CartValue));
    } else {
      this.RemoveItem(Index);
    }
  }
  Productaddcart(ProductID, ProductName, ProductImage, Qty, Rate, StockStatus) {
    var Cart = JSON.parse(localStorage.getItem("CartProduct"));
    if (Cart == null)
      Cart = new Array();
    let Productadd = Cart.find(product => product.ProductID === ProductID);
    if (Productadd == null) {
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
  CartItems(ID) {
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
  render() {
    return (
      <>
        <ToastContainer autoClose={900} />
        {/*hero section start*/}
        <section className="bg-light">
          <Pageheading foldername={"Shop"} title={"Product Wishlist"} />
        </section>
        {/*hero section end*/}
        {/*body content start*/}
        <div className="page-content">
          <section>
            <Container>
              {(this.GetWishlistItems() != null && this.GetWishlistItems().length > 0) ?
                <Row>
                  <div className="col-lg-12">
                    <div className="table-responsive">
                      <table className="cart-table table mb-0">
                        <thead>
                          <tr>
                            <th className="text-left" scope="col">Product</th>
                            <th className="text-left" scope="col">Price</th>
                            <th className="text-right" scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.GetWishlistItems().map((CartItem, index) => (
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
                                ${(CartItem.Rate * CartItem.Qty).toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                                </span>
                              </td>
                              <td className="text-right">
                                <Link type="submit" className="btn btn-primary btn-animated" onClick={() => this.RemoveItem(index)}><i className="las la-trash-alt" />
                                </Link>
                                {!this.CartItems(CartItem.ProductID) ?
                                  <Link to="#" onClick={() => this.Productaddcart(CartItem.ProductID, CartItem.ProductName, CartItem.ProductImage, 1, CartItem.Rate, "In Stock")} className="btn-cart btn btn-primary btn-animated mx-3" rel="nofollow" id="addtocard"><i className="las la-shopping-cart mr-1" /></Link>
                                  :
                                  <Link to="/cart" className="btn-cart btn btn-primary btn-animated ml-3" rel="nofollow" id="viewcart"><i className="las la-cart-plus mr-1" /></Link>

                                }
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="d-md-flex align-items-end justify-content-end border-top pt-5">
                      <Link to="cart" className="btn btn-primary btn-animated mt-3 mt-md-0">View Cart</Link>
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

export default wishlist;