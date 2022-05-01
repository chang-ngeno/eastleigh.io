import React, { Component } from 'react';
import navlink from '../../api/navlinks';
import { Link } from 'react-router-dom';
import {
    Col,
    Container,
    Row,
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Modal,
    ModalHeader,
    ModalBody
} from 'reactstrap'
import Headertop from './siteheader/header-top';
import Headerlogo from './siteheader/header-logo';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            cartview: false,
            loader: true
        }
        this.cartview = this.cartview.bind(this)
        this.GetCartItems = this.GetCartItems.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.toggle = this.toggle.bind(this)
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
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
    cartview() {
        this.setState(prevState => ({
            cartview: !prevState.cartview
        }));
    }
    toggle() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }
    handleClick(event) {
        var elems = document.querySelectorAll(".childsubmenu");
        [].forEach.call(elems, function (el) {
            el.classList.remove("show");
        });
    }
    handleScroll() {

        var scrollTop = (document.documentElement && document.documentElement.scrollTop) ||
            document.body.scrollTop;
        if (scrollTop > 100) {
            this.setState({
                visible: true
            });
        }
        else {
            this.setState({
                visible: false
            });
        }

    }
    render() {
        const { visible } = this.state;
        if (this.state.loader == true) {
            setTimeout(function () {
                this.setState({ loader: false });
            }.bind(this), 2000);
        }
        return (
            <>
            {(this.state.loader == false) ?
                <>
                    <header className="site-header">
                        <Headertop />
                        <Headerlogo />
                        <div id="header-wrap" className={`${(visible) ? "shadow-sm fixed-header " : "shadow-sm"}`} >
                            <Container>
                                <Row>
                                    <Col>
                                        <Navbar className="navbar-expand-lg navbar-light position-static">
                                            <Link className="navbar-brand logo d-lg-none" to="/">
                                                <img className="img-fluid" src={require(`../../assets/images/logo.png`)} alt="" />
                                            </Link>
                                            <NavbarToggler onClick={this.toggle} />
                                            <Collapse isOpen={this.state.isOpen} className="navbar-collapse" navbar>
                                                <Nav className="navbar-nav" navbar>
                                                    {navlink.map((navlink, index) => (
                                                        (navlink.type && navlink.type === 'subMenu') ?
                                                            <UncontrolledDropdown nav inNavbar key={index}>
                                                                <DropdownToggle nav caret >
                                                                    {navlink.menu_title}
                                                                </DropdownToggle>
                                                                <DropdownMenu id={`submenu_${index}`} className="childsubmenu">
                                                                    {navlink.child_routes && navlink.child_routes.map((subnavlink, index) => (
                                                                        (subnavlink.type && subnavlink.type === 'childsubMenu') ?
                                                                            <UncontrolledDropdown nav inNavbar key={index}>
                                                                                <DropdownToggle nav caret className="dropdown-item" >
                                                                                    {subnavlink.menu_title}
                                                                                </DropdownToggle>
                                                                                <DropdownMenu id={`childsubmenu_${index}`}>
                                                                                    {subnavlink.child_routes && subnavlink.child_routes.map((Childsubnavlink, i) =>
                                                                                        <DropdownItem key={i} tag={Link} to={Childsubnavlink.path} onClick={this.handleClick.bind(this)} >{Childsubnavlink.menu_title}
                                                                                        </DropdownItem>
                                                                                    )}
                                                                                </DropdownMenu>
                                                                            </UncontrolledDropdown>
                                                                            :
                                                                            <DropdownItem key={index} tag={Link} to={subnavlink.path}>{subnavlink.menu_title}
                                                                            </DropdownItem>
                                                                    ))}
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                            : (navlink.type && navlink.type === 'megaMenu') ?
                                                                <UncontrolledDropdown nav inNavbar key={index} >
                                                                    <DropdownToggle nav caret >
                                                                        {navlink.menu_title}
                                                                    </DropdownToggle>
                                                                    <DropdownMenu id={`submenu_${index}`} className="custom-drop childsubmenu">
                                                                        <div className="container p-0">
                                                                            <Row className="w-100 no-gutters">
                                                                                {navlink.child_routes && navlink.child_routes.map((subnavlink, subnav) => (
                                                                                    <div className="col-12 col-md-4 p-3" key={subnav}>
                                                                                        {/* Heading */}
                                                                                        <div className="mb-2 font-weight-bold">{subnavlink.menu_title}</div>
                                                                                        {/* Links */}
                                                                                        <ul className="list-unstyled">
                                                                                            {subnavlink.child_routes && subnavlink.child_routes.map((megamenu, i) => (
                                                                                                <li key={i}>
                                                                                                    <Link to={megamenu.path} onClick={this.handleClick.bind(this)}>{megamenu.menu_title}</Link>
                                                                                                </li>
                                                                                            ))}
                                                                                        </ul>
                                                                                    </div>
                                                                                ))}
                                                                                <div className="col-12 col-md-4">
                                                                                    <img className="img-fluid rounded-bottom rounded-top" src={require(`../../assets/images/header-img2.jpg`)} alt="..." />
                                                                                </div>
                                                                            </Row>
                                                                        </div>
                                                                    </DropdownMenu>
                                                                </UncontrolledDropdown>
                                                                :
                                                                <NavItem key={index}>
                                                                    <Link to={navlink.path} className="nav-link"> {navlink.menu_title}</Link>
                                                                </NavItem>
                                                    ))}
                                                </Nav>
                                            </Collapse>
                                            <div className="right-nav align-items-center d-flex justify-content-end"> <Link className="mr-1 mr-sm-3" to="#"><i className="las la-user-alt" /></Link>
                                                <Link className="mr-3 d-none d-sm-inline" to="/wishlist"><i className="lar la-heart" /></Link>
                                                <div>
                                                    <Link className="d-flex align-items-center" to="#" id="header-cart-btn" onClick={this.cartview} >
                                                        {(this.GetCartItems() != null && this.GetCartItems().length > 0) ?
                                                            <>
                                                                <span className="bg-white px-2 py-1 shadow-sm rounded" data-cart-items={this.GetCartItems().length}>
                                                                    <i className="las la-shopping-cart" />
                                                                </span>
                                                                <div className="ml-4 d-none d-md-block"> <small className="d-block text-muted">My Cart</small>
                                                                    <span className="text-dark">{this.GetCartItems().length} Items - ${this.GetCartItems().reduce((fr, CartItem) => fr + (CartItem.Qty * CartItem.Rate), 0).toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</span>
                                                                </div>
                                                            </>
                                                            :
                                                            <span className="bg-white px-2 py-1 shadow-sm rounded" data-cart-items={0}>
                                                                <i className="las la-shopping-cart" />
                                                            </span>}

                                                    </Link>
                                                </div>
                                            </div>
                                        </Navbar>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </header>
                    <Modal isOpen={this.state.cartview} toggle={this.cartview} className="cart-modal">
                        <ModalHeader toggle={this.cartview}>Your Cart (2)</ModalHeader>
                        <ModalBody>
                            {(this.GetCartItems() != null && this.GetCartItems().length > 0) ?
                                <>
                                    {this.GetCartItems().map((CartItem, index) => (
                                        <>
                                            <div>
                                                <div className="row align-items-center">
                                                    <div className="col-5 d-flex align-items-center">
                                                        <div className="mr-4">
                                                            <Link type="submit" className="btn btn-primary btn-sm" onClick={() => this.RemoveItem(index)}><i className="las la-times" />
                                                            </Link>
                                                        </div>
                                                        {/* Image */}
                                                        <a href="product-left-image.html">
                                                            <img className="img-fluid" src={require(`../../assets/images/${CartItem.ProductImage}`)} alt="..." />
                                                        </a>
                                                    </div>
                                                    <div className="col-7">
                                                        {/* Title */}
                                                        <h6><a className="link-title" href="product-left-image.html">{CartItem.ProductName}</a></h6>
                                                        <div className="product-meta"><span className="mr-2 text-primary">${(CartItem.Rate * CartItem.Qty).toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</span><span className="text-muted">x {CartItem.Qty}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="my-5" />
                                        </>
                                    ))}


                                    <div className="d-flex justify-content-between align-items-center mb-8"> <span className="text-muted">Subtotal:</span>  <span className="text-dark">${this.GetCartItems().reduce((fr, CartItem) => fr + (CartItem.Qty * CartItem.Rate), 0).toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</span>
                                    </div> <Link to="/cart" className="btn btn-primary btn-animated mr-2"><i className="las la-shopping-cart mr-1" />View Cart</Link>
                                    <Link to="/checkout" className="btn btn-dark"><i className="las la-money-check mr-1" />Continue To Checkout</Link>
                                </>
                                :
                                <div>
                                    <div className="row align-items-center">
                                        <h3 className="mb-4">Your cart is Currently Empty.</h3>
                                    </div>
                                </div>
                            }
                        </ModalBody>
                    </Modal>
                </>
                :
                <div id="ht-preloader">
                    <div className="loader clear-loader">
                        <img className="img-fluid" src={require(`../../assets/images/loader.gif`)}  alt="" />
                    </div>
                </div>
            }
            </>
        );
}
}

export default Header;