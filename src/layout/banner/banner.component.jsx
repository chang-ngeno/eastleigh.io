import React from "react";
import {render} from "react-dom";
import flashItems from "../../api/flashItems";
import {Row, Col} from "reactstrap";

class Banner extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            flashItems: flashItems
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    render(){
        return(
            <Row className={"offset-md-2"}>
                {this.state.flashItems.map((item, index) => (
                    (item.name)?
                        <Col md={3}>{item.name} || {item.price}</Col>
                    : <></>))
                }
            </Row>
        );
    }
}
export default Banner;