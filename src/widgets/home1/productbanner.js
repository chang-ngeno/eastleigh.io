import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Row} from 'reactstrap';

class Productbanner extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Row className="align-items-center">
                <div className="col-12 col-md-8">
                    <div className="position-relative rounded overflow-hidden text-right shadow-sm">
                        {/* Background */}
                        <img className="img-fluid hover-zoom" src={require(`../../assets/images/product-ad/01.jpg`)} alt="" />
                        {/* Body */}
                        <div className="position-absolute top-50 pl-5 text-left">
                            <h6 className="text-dark">New Women's Collection</h6>
                            {/* Heading */}
                            <h3><span className="font-w-7 text-primary d-block">50% OFF</span> Popular Items!</h3>
                            <Link className="btn btn-sm btn-primary btn-animated" to="#">Shop Now</Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 mt-5 mt-md-0">
                    <div className="position-relative rounded overflow-hidden">
                        {/* Background */}
                        <img className="img-fluid w-100 hover-zoom" src={require(`../../assets/images/product-ad/02.jpg`)} alt="" />
                        {/* Body */}
                        <div className="position-absolute top-50 pl-5">
                            <h4 className="mb-0">New Men's<br /> Collection</h4>
                        </div>
                    </div>
                    <div className="position-relative rounded overflow-hidden mt-5 shadow-sm">
                        {/* Background */}
                        <img className="img-fluid w-100 hover-zoom" src={require(`../../assets/images/product-ad/03.jpg`)} alt="" />
                        {/* Body */}
                        <div className="position-absolute top-50 pl-5">
                            <h4 className="mb-0">Leather Bags<br /> And Purses</h4>
                        </div>
                    </div>
                </div>
            </Row>
        );
    }
}

export default Productbanner;