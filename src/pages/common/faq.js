import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Pageheading from '../../widgets/pageheading';
import AccordionDemo from '../../widgets/faq/accordion';

class faq extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }   
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <>
            {/*hero section start*/}
            <section className="bg-light">
              <Pageheading foldername={"Pages"} title={"Frequently Asked Questions"}  />
            </section>
            <div className="page-content">
              <section>
                <Container>
                  <Row className="align-items-center justify-content-center">
                    <Col  lg={10} className="col-12">
                      <AccordionDemo />
                    </Col>
                  </Row>
                </Container>
              </section>
            </div>
          </> 
        );
    }
}

export default faq;