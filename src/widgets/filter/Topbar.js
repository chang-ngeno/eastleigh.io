import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'reactstrap';
import { Sorting } from '../../actions/saidfilter';
import { connect } from 'react-redux';
import { FilterProduct } from '../../services';
import Products from '../../api/product';

class Topbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    //Grid view
    Gridview() {
        var removeelems = document.getElementsByClassName("sky-list-view");
        [].forEach.call(removeelems, function (el) {
            el.classList.remove('active');
        });

        document.querySelector(".sky-grid-view").classList.add("active");
        localStorage.setItem("ProductLayout", 'Gridview');
    }
    // List View
    Listview() {
        var removeelems = document.getElementsByClassName("sky-grid-view");
        [].forEach.call(removeelems, function (el) {
            el.classList.remove('active');
        });

        document.querySelector(".sky-list-view").classList.add("active");
        localStorage.setItem("ProductLayout", 'Listing');
    }
    render() {
        const productdata = this.props.productdata;
        var listview = this.props.listview;
        if (listview == "list") {
            localStorage.setItem("ProductLayout", 'Listing');
        }
        return (
            <Row className="mb-4 align-items-center">
                <div className="col-md-5 mb-3 mb-md-0">
                    {productdata > 0 ?
                        <span className="text-muted">
                            Showing 1 to {productdata} of {Products.length}
                        </span>
                        :
                        <span className="text-muted">
                            Showing 0 of {Products.length}
                        </span>
                    }
                </div>
                <div className="col-md-7 d-flex align-items-center justify-content-md-end">
                    <div className="view-filter">

                        {(listview == "list") ?
                            <>
                                <Link className="sky-grid-view " onClick={() => this.Gridview()}>
                                    <i className="lab la-buromobelexperte" />
                                </Link>
                                <Link to="#" className="sky-list-view active" onClick={() => this.Listview()} >
                                    <i className="las la-list" />
                                </Link>
                            </>
                            :
                            <>
                                <Link className="sky-grid-view active" onClick={() => this.Gridview()}>
                                    <i className="lab la-buromobelexperte" />
                                </Link>
                                <Link to="#" className="sky-list-view " onClick={() => this.Listview()} >
                                    <i className="las la-list" />
                                </Link>
                            </>
                        }
                    </div>
                    <div className="sort-filter ml-2 d-flex align-items-center">
                        <select className="custom-select" id="inputGroupSelect02" onChange={(e) => this.props.Sorting(e.target.value)}>
                            <option selected>Sort By</option>
                            <option value={1}>Newest Item</option>
                            <option value={2}>High to Low</option>
                            <option value={3}>Low to High</option>
                        </select>
                    </div>
                </div>
            </Row>
        );
    }
}

const mapStatetopFilterProps = state => ({
    products: FilterProduct(state.data, state.filters)
})

export default connect(mapStatetopFilterProps, { Sorting })(Topbar);