import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Blogcart from '../../widgets/blog/blogcart';
import Pageheading from '../../widgets/pageheading';

class blogcart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <>
                {/*hero section start*/}
                <section className="bg-light">
                    <Pageheading foldername={"Pages"} title={"Blog Card"} />
                </section>
                {/*hero section end*/}
                {/*body content start*/}
                <div className="page-content">
                    <section>
                        <Container>
                            <Row>
                                <Blogcart />
                                <Blogcart />
                            </Row>
                            <Row className="mt-8">
                                <Col>
                                    <nav aria-label="Page navigation">
                                        <ul className="pagination">
                                            <li className="page-item"><Link className="page-link" to="#">Previous</Link>
                                            </li>
                                            <li className="page-item"><Link className="page-link" to="#">1</Link>
                                            </li>
                                            <li className="page-item"><Link className="page-link" to="#">2</Link>
                                            </li>
                                            <li className="page-item"><Link className="page-link" to="#">3</Link>
                                            </li>
                                            <li className="page-item"><Link className="page-link" to="#">Next</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    {/*blog end*/}
                </div>
                {/*body content end*/}
            </>
        );
    }
}

export default blogcart;