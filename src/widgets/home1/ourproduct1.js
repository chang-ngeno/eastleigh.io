import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';
import { toast, ToastContainer } from 'react-toastify';
import classnames from 'classnames';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import Productlist from '../../api/product';

window.fn = OwlCarousel;

class Ourproduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: "1",
            modelview: false,
            viewproduct: [],
            options: {
                loop: true,
                nav: true,
                dotData: false,
                responsive: {
                    0: {
                        items: 1,
                    },
                    300: {
                        items: 2,
                    },
                    600: {
                        items: 3,
                    },
                    1000: {
                        items: 3,
                    },
                },
            },
        };
        this.quickview = this.quickview.bind(this);
    }
    quickview() {
        this.setState(prevState => ({
            modelview: !prevState.modelview
        }));
    }
    onClickQuickView(product) {
        this.setState({
            modelview: true,
            viewproduct: product
        })
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
    Productaddwishlist(ProductID, ProductName, ProductImage, Qty, Rate, StockStatus) {
        var Cart = JSON.parse(localStorage.getItem("WishlistProduct"));
        if (Cart == null)
            Cart = new Array();

        let Productadd = Cart.find(product => product.ProductID === ProductID);
        if (Productadd == null) {

            Cart.push({ ProductID: ProductID, ProductName: ProductName, ProductImage: ProductImage, Qty: Qty, Rate: Rate, StockStatus: StockStatus });
            localStorage.removeItem("WishlistProduct");
            localStorage.setItem("WishlistProduct", JSON.stringify(Cart));

            toast.success("Item Added to WishList");
        }
        else {
            toast.warning("Item is already in WishList");
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
    WishlistItems(ID) {
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
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        let { viewproduct } = this.state;
        return (
            <>
                <ToastContainer autoClose={900} />

                <Row>
                    <Col>
                        <Nav tabs className="mb-5 text-center">
                            <div className="nav nav-tabs d-inline-block justify-content-md-end" id="nav-tab" role="tablist">
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '1' })}
                                        onClick={() => { this.toggle('1'); }}
                                    >
                                        Top Rated
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '2' })}
                                        onClick={() => { this.toggle('2'); }}
                                    >
                                        New Product
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '3' })}
                                        onClick={() => { this.toggle('3'); }}
                                    >
                                        Best Seller
                                    </NavLink>
                                </NavItem>
                            </div>
                        </Nav>
                        <TabContent className="p-0" activeTab={this.state.activeTab}>
                            <TabPane className="fade show" tabId="1">
                                <Row>
                                    {Productlist.filter(product => product.rating == 5).map((productdata, index) => (
                                        (index < 6) ?
                                            <div className="col-lg-4 col-md-6">
                                                <div className="card product-card">
                                                    {!this.WishlistItems(productdata.id) ?
                                                        <Link to="#" onClick={() => this.Productaddwishlist(productdata.id, productdata.name, productdata.pictures[0], 1, productdata.salePrice, "In Stock")} className="btn-wishlist btn-sm" id="addtowish"><i className="lar la-heart" /></Link>
                                                        :
                                                        <Link to="/cart" className="btn-wishlist btn-sm" id="viewwishlist"><i className="las la-heart" /></Link>
                                                    }
                                                    <Link className="card-img-hover d-block" to={`/product-single-left/${productdata.category}/${productdata.id}`}>
                                                        <img className="card-img-top card-img-back" src={require(`../../assets/images/${productdata.pictures[0]}`)} alt="..." />
                                                        <img className="card-img-top card-img-front" src={require(`../../assets/images/${productdata.pictures[1]}`)} alt="..." />
                                                    </Link>
                                                    <div className="card-info">
                                                        <div className="card-body">
                                                            <div className="product-title"><Link to="/product-single" className="link-title">{productdata.name}</Link>
                                                            </div>
                                                            <div className="mt-1"> <span className="product-price"><del className="text-muted">$ {productdata.price}</del> $ {productdata.salePrice}</span>
                                                                <div className="star-rating"><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card-footer bg-transparent border-0">
                                                            <div className="product-link d-flex align-items-center justify-content-center">
                                                                {!this.WishlistItems(productdata.id) ?
                                                                    <Link to="#" onClick={() => this.Productaddwishlist(productdata.id, productdata.name, productdata.pictures[0], 1, productdata.salePrice, "In Stock")} className="btn btn-compare" id="addtowish1"><i class="lar la-heart mr-1" ></i></Link>
                                                                    :
                                                                    <Link to="/cart" className="btn btn-compare" id="viewwishlist1"><i class="las la-heart mr-1" ></i></Link>
                                                                }
                                                                {!this.CartItems(productdata.id) ?
                                                                    <Link to="#" onClick={() => this.Productaddcart(productdata.id, productdata.name, productdata.pictures[0], 1, productdata.salePrice, "In Stock")} className="btn-cart btn btn-primary btn-animated mx-3" rel="nofollow" id="addtocard1"><i className="las la-shopping-cart mr-1" /></Link>
                                                                    :
                                                                    <Link to="/cart" className="btn-cart btn btn-primary btn-animated mx-3" rel="nofollow" id="viewcart1"><i className="las la-cart-plus mr-1" /></Link>

                                                                }
                                                                <Link to="#" onClick={() => this.onClickQuickView(productdata)} className="btn btn-view" id="quickview1"><i className="las la-eye" /></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            : null
                                    ))}
                                </Row>
                            </TabPane>
                            <TabPane className="fade show" tabId="2">
                                <Row>
                                    {Productlist.map((productdata, index) => (
                                        (index > 10 && index <= 16) ?
                                            <div className="col-lg-4 col-md-6">
                                                <div className="card product-card">
                                                    {!this.WishlistItems(productdata.id) ?
                                                        <Link to="#" onClick={() => this.Productaddwishlist(productdata.id, productdata.name, productdata.pictures[0], 1, productdata.salePrice, "In Stock")} className="btn-wishlist btn-sm" id="addtowish"><i className="lar la-heart" /></Link>
                                                        :
                                                        <Link to="/cart" className="btn-wishlist btn-sm" id="viewwishlist"><i className="las la-heart" /></Link>
                                                    }
                                                    <Link className="card-img-hover d-block" to={`/product-single-left/${productdata.category}/${productdata.id}`}>
                                                        <img className="card-img-top card-img-back" src={require(`../../assets/images/${productdata.pictures[0]}`)} alt="..." />
                                                        <img className="card-img-top card-img-front" src={require(`../../assets/images/${productdata.pictures[1]}`)} alt="..." />
                                                    </Link>
                                                    <div className="card-info">
                                                        <div className="card-body">
                                                            <div className="product-title"><Link to="/product-single" className="link-title">{productdata.name}</Link>
                                                            </div>
                                                            <div className="mt-1"> <span className="product-price"><del className="text-muted">$ {productdata.price}</del> $ {productdata.salePrice}</span>
                                                                <div className="star-rating"><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card-footer bg-transparent border-0">
                                                            <div className="product-link d-flex align-items-center justify-content-center">
                                                                {!this.WishlistItems(productdata.id) ?
                                                                    <Link to="#" onClick={() => this.Productaddwishlist(productdata.id, productdata.name, productdata.pictures[0], 1, productdata.salePrice, "In Stock")} className="btn btn-compare" id="addtowish1"><i class="lar la-heart mr-1" ></i></Link>
                                                                    :
                                                                    <Link to="/cart" className="btn btn-compare" id="viewwishlist1"><i class="las la-heart mr-1" ></i></Link>
                                                                }
                                                                {!this.CartItems(productdata.id) ?
                                                                    <Link to="#" onClick={() => this.Productaddcart(productdata.id, productdata.name, productdata.pictures[0], 1, productdata.salePrice, "In Stock")} className="btn-cart btn btn-primary btn-animated mx-3" rel="nofollow" id="addtocard1"><i className="las la-shopping-cart mr-1" /></Link>
                                                                    :
                                                                    <Link to="/cart" className="btn-cart btn btn-primary btn-animated mx-3" rel="nofollow" id="viewcart1"><i className="las la-cart-plus mr-1" /></Link>

                                                                }
                                                                <Link to="#" onClick={() => this.onClickQuickView(productdata)} className="btn btn-view" id="quickview1"><i className="las la-eye" /></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            : null
                                    ))}
                                </Row>
                            </TabPane>

                            <TabPane className="fade show" tabId="3">
                                <Row>
                                    {Productlist.map((productdata, index) => (
                                        (index > 20 && index <= 26) ?
                                            <div className="col-lg-4 col-md-6">
                                                <div className="card product-card">
                                                    {!this.WishlistItems(productdata.id) ?
                                                        <Link to="#" onClick={() => this.Productaddwishlist(productdata.id, productdata.name, productdata.pictures[0], 1, productdata.salePrice, "In Stock")} className="btn-wishlist btn-sm" id="addtowish"><i className="lar la-heart" /></Link>
                                                        :
                                                        <Link to="/cart" className="btn-wishlist btn-sm" id="viewwishlist"><i className="las la-heart" /></Link>
                                                    }
                                                    <Link className="card-img-hover d-block" to={`/product-single-left/${productdata.category}/${productdata.id}`}>
                                                        <img className="card-img-top card-img-back" src={require(`../../assets/images/${productdata.pictures[0]}`)} alt="..." />
                                                        <img className="card-img-top card-img-front" src={require(`../../assets/images/${productdata.pictures[1]}`)} alt="..." />
                                                    </Link>
                                                    <div className="card-info">
                                                        <div className="card-body">
                                                            <div className="product-title"><Link to="/product-single" className="link-title">{productdata.name}</Link>
                                                            </div>
                                                            <div className="mt-1"> <span className="product-price"><del className="text-muted">$ {productdata.price}</del> $ {productdata.salePrice}</span>
                                                                <div className="star-rating"><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card-footer bg-transparent border-0">
                                                            <div className="product-link d-flex align-items-center justify-content-center">
                                                                {!this.WishlistItems(productdata.id) ?
                                                                    <Link to="#" onClick={() => this.Productaddwishlist(productdata.id, productdata.name, productdata.pictures[0], 1, productdata.salePrice, "In Stock")} className="btn btn-compare" id="addtowish1"><i class="lar la-heart mr-1" ></i></Link>
                                                                    :
                                                                    <Link to="/cart" className="btn btn-compare" id="viewwishlist1"><i class="las la-heart mr-1" ></i></Link>
                                                                }
                                                                {!this.CartItems(productdata.id) ?
                                                                    <Link to="#" onClick={() => this.Productaddcart(productdata.id, productdata.name, productdata.pictures[0], 1, productdata.salePrice, "In Stock")} className="btn-cart btn btn-primary btn-animated mx-3" rel="nofollow" id="addtocard1"><i className="las la-shopping-cart mr-1" /></Link>
                                                                    :
                                                                    <Link to="/cart" className="btn-cart btn btn-primary btn-animated mx-3" rel="nofollow" id="viewcart1"><i className="las la-cart-plus mr-1" /></Link>

                                                                }
                                                                <Link to="#" onClick={() => this.onClickQuickView(productdata)} className="btn btn-view" id="quickview1"><i className="las la-eye" /></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            : null
                                    ))}
                                </Row>
                            </TabPane>

                        </TabContent>
                    </Col>
                </Row>
                <Modal isOpen={this.state.modelview} toggle={this.modelview} className="view-modal">
                    <ModalHeader className="border-bottom-0 pb-0">
                        <Button className="close" color="danger" onClick={() => this.quickview()} ><span aria-hidden="true">×</span></Button>
                    </ModalHeader>
                    <ModalBody>
                        <Row className="align-items-center">
                            <div className="col-lg-5 col-12">
                                {(viewproduct.pictures && viewproduct.pictures.length > 0) ?
                                    <img className="img-fluid rounded" src={require(`../../assets/images/${viewproduct.pictures[0]}`)} alt="" />
                                    : null}
                            </div>
                            <div className="col-lg-7 col-12 mt-5 mt-lg-0">
                                <div className="product-details">
                                    <h3 className="mb-0">{viewproduct.name}</h3>
                                    <div className="star-rating mb-4"><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                                    </div> <span className="product-price h4">${viewproduct.salePrice}<del className="text-muted h6">${viewproduct.price}</del></span>
                                    <ul className="list-unstyled my-4">
                                        <li className="mb-2">Availibility: <span className="text-muted"> In Stock</span>
                                        </li>
                                        <li>Categories :<span className="text-muted"> {viewproduct.category}</span>
                                        </li>
                                    </ul>
                                    <p className="mb-4">{viewproduct.description}</p>
                                    <div className="d-sm-flex align-items-center mb-5">
                                        <div className="d-flex align-items-center mr-sm-4">
                                            <button className="btn-product btn-product-up"> <i className="las la-minus" />
                                            </button>
                                            <input className="form-product" type="number" name="form-product" defaultValue={1} />
                                            <button className="btn-product btn-product-down"> <i className="las la-plus" />
                                            </button>
                                        </div>
                                        <select className="custom-select mt-3 mt-sm-0" id="inputGroupSelect01">
                                            <option selected>Size</option>
                                            {(viewproduct.size) && viewproduct.size.map((sizes, index) => {
                                                return (<option key={index}>{sizes}</option>)
                                            }
                                            )}
                                        </select>
                                        <div className="d-flex text-center ml-sm-4 mt-3 mt-sm-0">
                                            {(viewproduct.size) && viewproduct.colors.map((color, index) => {
                                                return (
                                                    <div className="form-check pl-0 mr-3">
                                                        <div className="form-check pl-0">
                                                            <input type="checkbox" value={color} className="form-check-input" />
                                                            <label className="form-check-label" style={{ background: color }} />
                                                        </div>
                                                        <input type="checkbox" className="form-check-input" id={`color-filter`.index} value={color} />
                                                        <label className="form-check-label" htmlFor={`color-filter`.index} data-bg-color={color} />
                                                    </div>
                                                )
                                            }
                                            )}
                                        </div>
                                    </div>
                                    <div className="d-sm-flex align-items-center mt-5">
                                        {!this.WishlistItems(viewproduct.id) ?
                                            <Link to="#" onClick={() => this.Productaddwishlist(viewproduct.id, viewproduct.name, viewproduct.pictures[0], 1, viewproduct.salePrice, "In Stock")} className="btn btn-animated btn-dark"><i className="lar la-heart mr-1" />Add To Wishlist</Link>
                                            :
                                            <Link to="/wishlist" className="btn btn-animated btn-dark" ><i className="lar la-heart mr-1" />View Wishlist </Link>
                                        }
                                        {!this.CartItems(viewproduct.id) ?
                                            <Link to="#" onClick={() => this.Productaddcart(viewproduct.id, viewproduct.name, viewproduct.pictures[0], 1, viewproduct.salePrice, "In Stock")} className="btn btn-primary btn-animated mr-sm-4 mb-3 mb-sm-0" rel="nofollow" ><i className="las la-shopping-cart mr-1" />Add To Cart</Link>
                                            :
                                            <Link to="/cart" className="btn btn-primary btn-animated mr-sm-4 mb-3 mb-sm-0" rel="nofollow" id="viewcart1"><i className="las la-shopping-cart mr-1" />View Cart</Link>

                                        }

                                    </div>
                                    <div className="d-sm-flex align-items-center border-top pt-4 mt-5">
                                        <h6 className="mb-sm-0 mr-sm-4">Share It:</h6>
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
                    </ModalBody>
                </Modal>

            </>
        );
    }
}

export default Ourproduct;