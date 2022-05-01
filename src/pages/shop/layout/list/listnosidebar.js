import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FilterProduct } from '../../../../services';
import { Pagination } from 'antd';
import { connect } from 'react-redux';
import Topbar from '../../../../widgets/filter/Topbar';
import Listview from '../../../../widgets/shop/listview';
import Pageheading from '../../../../widgets/pageheading';

const ProductParPage = 9;
class listnosidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            minValue: 0,
            maxValue: 9,
            status: true,
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    handleChange = value => {

        this.setState({
            minValue: (value - 1) * ProductParPage,
            maxValue: value * ProductParPage
        });
    };
    itemRender = (current, type, originalElement) => {
        if (type === 'prev') {
            return <Link className="page-link" to="/">Previous</Link>;
        }
        if (type === 'next') {
            return <Link className="page-link" to="/">Next</Link>;
        }
        return originalElement;
    }
    render() {
        let { products } = this.props;
        let { status } = this.state;
        return (
            <>
                {/*hero section start*/}
                <section className="bg-light">
                    <Pageheading foldername={"Shop"} title={"Shop Grid No Sidebar"} />
                </section>
                {/*body content start*/}
                {status ?
                    <div className="page-content">
                        <section>
                            <Container>
                                <Topbar productdata={products.length} listview="list" />
                                <Row>
                                    {(products.length > 0) ?
                                        <>
                                            {products.slice(this.state.minValue, this.state.maxValue).map((product, index) => (
                                                <Listview productdata={product} key={index} />
                                            ))}
                                            <div className="text-center col-12">
                                                <Pagination
                                                    defaultCurrent={1}
                                                    defaultPageSize={ProductParPage}
                                                    onChange={this.handleChange}
                                                    total={products.length}
                                                    itemRender={this.itemRender}
                                                />
                                            </div>
                                        </>
                                        :
                                        <Col lg={9} md={12} className="order-lg-12">
                                            <Row className="text-center12">
                                                <h3>Sorry! No products were found matching your selection!    </h3>
                                                <p>Please try to other words.</p>
                                            </Row>
                                        </Col>
                                    }
                                </Row>
                            </Container>
                        </section>
                    </div>
                    : <div>Loading</div>
                }
            </>
        );
    }
}


const ProductDispatchToProps = (state) => ({
    products: FilterProduct(state.data, state.filters)

})
export default connect(
    ProductDispatchToProps, {}
)(listnosidebar);