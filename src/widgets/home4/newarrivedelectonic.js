import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'reactstrap';
import Productlist from '../../api/product';

function Rating(props) {
    let stars = [];
    for (let i = 0; i <= props.rating; i++) {
        stars.push(<i className="las la-star" />);
    }
    return stars;
}

class NewarrivedElectonic extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Row>
                <div className="col-lg-4 col-md-6">
                    <h5 className="mb-5 font-w-5"><span className="text-primary">—</span> New Arrived</h5>
                    {Productlist.filter(product => product.rating == 5).map((productdata, index) =>
                    (
                        (index >= 9 && index < 13) ?

                            <div className="media align-items-center mb-4">
                                <Link className="d-block mr-3" to={`/product-single-left/${productdata.category}/${productdata.id}`}>
                                    <img className="rounded" src={require(`../../assets/images/${productdata.pictures[0]}`)} alt="Product" width={100} />
                                </Link>
                                <div className="media-body">
                                    <div className="product-title"><Link className="link-title" to={`/product-single-left/${productdata.category}/${productdata.id}`}>{productdata.name}</Link>
                                    </div>

                                    <div className="star-rating">
                                        <Rating rating={productdata.rating} />
                                    </div>
                                    <span className="product-price"><del className="text-muted">{productdata.price}</del> $ {productdata.salePrice}</span>
                                </div>
                            </div>
                            : null
                    ))}
                </div>
                <div className="col-lg-4 col-md-6 mt-8 mt-md-0">
                    <h5 className="mb-5 font-w-5"><span className="text-primary">—</span> Best Seller</h5>
                    {Productlist.map((productdata, index) => (
                         (index >= 12 && index < 16) ?

                            <div className="media align-items-center mb-4">
                                <Link className="d-block mr-3" to={`/product-single-left/${productdata.category}/${productdata.id}`}>
                                    <img className="rounded" src={require(`../../assets/images/${productdata.pictures[0]}`)} alt="Product" width={100} />
                                </Link>
                                <div className="media-body">
                                    <div className="product-title"><Link className="link-title" to={`/product-single-left/${productdata.category}/${productdata.id}`}>{productdata.name}</Link>
                                    </div>

                                    <div className="star-rating">
                                        <Rating rating={productdata.rating} />
                                    </div>
                                    <span className="product-price"><del className="text-muted">{productdata.price}</del> $ {productdata.salePrice}</span>
                                </div>
                            </div>
                            : null
                    ))}
                </div>
                <div className="col-lg-4 col-md-6 mt-8 mt-lg-0">
                    <h5 className="mb-5 font-w-5"><span className="text-primary">—</span> Featured Item</h5>
                    {Productlist.map((productdata, index) => (
                       (index >= 11 && index < 15) ?
                            <div className="media align-items-center mb-4">
                                <Link className="d-block mr-3" to={`/product-single-left/${productdata.category}/${productdata.id}`}>
                                    <img className="rounded" src={require(`../../assets/images/${productdata.pictures[0]}`)} alt="Product" width={100} />
                                </Link>
                                <div className="media-body">
                                    <div className="product-title"><Link className="link-title" to={`/product-single-left/${productdata.category}/${productdata.id}`}>{productdata.name}</Link>
                                    </div>

                                    <div className="star-rating">
                                        <Rating rating={productdata.rating} />
                                    </div>
                                    <span className="product-price"><del className="text-muted">{productdata.price}</del> $ {productdata.salePrice}</span>
                                </div>
                            </div>
                            : null
                    ))}
                </div>
            </Row>
        );
    }
}

export default NewarrivedElectonic;