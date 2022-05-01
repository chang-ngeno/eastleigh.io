import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Row} from 'reactstrap';
class Productbanner2 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Row>
                <div className="col-12 col-lg-6">
                    <div className="position-relative rounded overflow-hidden text-right shadow-sm">
                        {/* Background */}
                        <img className="img-fluid hover-zoom" src={require(`../../assets/images/product-ad/05.jpg`)} alt="" />
                        {/* Body */}
                        <div className="position-absolute top-50 pl-5 text-left">
                            <h6 className="text-dark">Summer Collection</h6>
                            {/* Heading */}
                            <h3 className="font-w-7">Women Fashion</h3>
                            {/* Link */} <Link className="btn btn-sm btn-primary btn-animated" to="#">Shop Now
                  </Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                    <div className="position-relative rounded overflow-hidden text-right shadow-sm">
                        {/* Background */}
                        <img className="img-fluid hover-zoom" src={require(`../../assets/images/product-ad/06.jpg`)} alt="" />
                        {/* Body */}
                        <div className="position-absolute top-50 pl-5 text-left">
                            <h6 className="text-dark">Bag Collection</h6>
                            {/* Heading */}
                            <h3 className="font-w-7">New Trend</h3>
                            {/* Link */} <Link className="btn btn-sm btn-primary btn-animated" to="#">Shop Now
                  </Link>
                        </div>
                    </div>
                </div>
            </Row>
        );
    }
}

export default Productbanner2;