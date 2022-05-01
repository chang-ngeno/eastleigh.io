import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Getcategory, Getprice, Getcolor,Getsize } from '../../actions/saidfilter';
import { CategoryList, GetMinMaxPrice, GetColorsList,GetsizeList } from '../../services/index';
import { Slider } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priceplace: [this.props.prices.min, this.props.prices.max],
        }
    }
    CategoryFilter(event, categorys) {

        var index = categorys.indexOf(event.target.value);
        if (event.target.checked) {
            categorys.push(event.target.value);
        }
        else {
            categorys.splice(index, 1);
        }
        this.props.Getcategory(categorys);
    }
    PriceFilter = values => {
        var maximumval = this.props.prices.max / 5;

        var value = {
            min: values['0'],
            max: values['1']
        }
        if (value.min == 0) {
            value.min = 0;
        }
        else if (value.min > 0 && value.min <= 20) {
            value.min = parseInt(this.fncl(value.min * (maximumval * 1) / 20));
        }
        else if (value.min > 20 && value.min <= 40) {
            value.min = parseInt(this.fncl(value.min * (maximumval * 2) / 40));
        }
        else if (value.min > 40 && value.min <= 60) {
            value.min = parseInt(this.fncl(value.min * (maximumval * 3) / 60));
        }
        else if (value.min > 60 && value.min <= 80) {
            value.min = parseInt(this.fncl(value.min * (maximumval * 4) / 80));
        }
        else if (value.min > 80 && value.min <= 100) {
            value.min = parseInt(this.fncl(value.min * (maximumval * 5) / 100));
        }
        else {
            value.min = false;
        }

        if (value.max === 0) {
            value.max = 0;
        }
        else if (value.max > 0 && value.max <= 20) {
            value.max = parseInt(this.fncl(value.max * (maximumval * 1) / 20));
        }
        else if (value.max > 20 && value.max <= 40) {
            value.max = parseInt(this.fncl(value.max * (maximumval * 2) / 40));
        }
        else if (value.max > 40 && value.max <= 60) {
            value.max = parseInt(this.fncl(value.max * (maximumval * 3) / 60));
        }
        else if (value.max > 60 && value.max <= 80) {
            value.max = parseInt(this.fncl(value.max * (maximumval * 4) / 80));
        }
        else if (value.max > 80 && value.max <= 100) {
            value.max = parseInt(this.fncl(value.max * (maximumval * 5) / 100));
        }
        else {
            value.max = false;
        }
        this.setState({
            priceplace: values
        });
        this.props.Getprice({ value })
    }
    fncl = (value) => {
        return Number.parseFloat(value).toFixed(0);
    }
    ValueinDecimal = (labelValue) => {
        return labelValue.toLocaleString("en", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        })
    }

    PriceFormatter = value => {
        var maximumval = this.props.prices.max / 5;
        if (value === 0) {
            value = "0";
        }
        else if (value > 0 && value <= 20) {
            value = value * (maximumval * 1) / 20;
        }
        else if (value > 20 && value <= 40) {
            value = value * (maximumval * 2) / 40;
        }
        else if (value > 40 && value <= 60) {
            value = value * (maximumval * 3) / 60;
        }
        else if (value > 60 && value <= 80) {
            value = value * (maximumval * 4) / 80;
        }
        else if (value > 80 && value <= 100) {
            value = value * (maximumval * 5) / 100;
        }
        return this.ValueinDecimal(value);
    }

    PriceFilterClear(pricesval) {
        var value = {
            min: pricesval.min,
            max: pricesval.max
        }
        this.setState({
            priceplace: [this.props.prices.min, this.props.prices.max]
        })
        this.props.Getprice({ value })
    }
    ColorFilter = (event, colors) => {
        
        var index = colors.indexOf(event.target.value);
        if (event.target.checked) {
            colors.push(event.target.value);
        }
        else {
            colors.splice(index, 1);
        }
       
        this.props.Getcolor(colors)
    }
    onClickSizeFilter(event, sizes) {
        var index = sizes.indexOf(event.target.value);
        if (event.target.checked) {
            sizes.push(event.target.value);
        }
        else {
            sizes.splice(index, 1);
        }
        this.props.Getsize(sizes);
    }

    render() {
        const categoryFilterValues = this.props.filters.category;
        const colorsFilterValues = this.props.filters.color;
        const sizeFilterValues = this.props.filters.size;

        var max = this.props.prices.max;
        var maxdivide = max / 5;
        const marks = {
            0: 0,
            20: ((maxdivide * 1).toLocaleString(navigator.language, { minimumFractionDigits: 0 })),
            40: ((maxdivide * 2).toLocaleString(navigator.language, { minimumFractionDigits: 0 })),
            60: ((maxdivide * 3).toLocaleString(navigator.language, { minimumFractionDigits: 0 })),
            80: ((maxdivide * 4).toLocaleString(navigator.language, { minimumFractionDigits: 0 })),
            100: max.toLocaleString(navigator.language, { minimumFractionDigits: 0 })
        };
        return (
            <div className="shadow-sm p-5">
                <div className="widget widget-categories mb-4 pb-4 border-bottom">
                    <h4 className="widget-title mb-3">Categories</h4>
                    <Scrollbars style={{  height: 300 }}>
                    {this.props.categorys.map((cate, index) => (
                        <div className="custom-control custom-checkbox mb-2">
                            <input type="checkbox" onClick={(e) => this.CategoryFilter(e, categoryFilterValues)} value={cate} defaultChecked={categoryFilterValues.includes(cate) ? true : false}  className="custom-control-input" id={cate}  value={cate} />
                            <label className="custom-control-label"htmlFor={cate}> {cate}</label>
                        </div>
                    ))}
                    </Scrollbars>
                </div>
                <div className="widget widget-price mb-4 pb-4 border-bottom">
                    <h4 className="widget-title mb-3">Price</h4>
                    <button className="border-0 p-0 bg-transparent btn-link" onClick={() => this.PriceFilterClear(this.props.prices)}>clear</button>
                    <div className="price_slider_wrapper">
                        <Slider
                            range
                            step={1}
                            min={0}
                            max={100}
                            tipFormatter={this.PriceFormatter}
                            value={this.state.priceplace}
                            onChange={this.PriceFilter}
                            marks={marks}
                        />
                    </div>
                </div>
                <div className="widget widget-brand mb-4 pb-4 border-bottom">
                    <h4 className="widget-title mb-3">Brand</h4>
                    <div className="custom-control custom-checkbox mb-2">
                        <input type="checkbox" className="custom-control-input" id="brandCheck1" />
                        <label className="custom-control-label" htmlFor="brandCheck1">Raymond</label>
                    </div>
                    <div className="custom-control custom-checkbox mb-2">
                        <input type="checkbox" className="custom-control-input" id="brandCheck2" />
                        <label className="custom-control-label" htmlFor="brandCheck2">Adidas</label>
                    </div>
                    <div className="custom-control custom-checkbox mb-2">
                        <input type="checkbox" className="custom-control-input" id="brandCheck3" />
                        <label className="custom-control-label" htmlFor="brandCheck3">Levi's</label>
                    </div>
                    <div className="custom-control custom-checkbox mb-2">
                        <input type="checkbox" className="custom-control-input" id="brandCheck4" />
                        <label className="custom-control-label" htmlFor="brandCheck4">Reebok</label>
                    </div>
                    <div className="custom-control custom-checkbox mb-2">
                        <input type="checkbox" className="custom-control-input" id="brandCheck5" />
                        <label className="custom-control-label" htmlFor="brandCheck5">Killer</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="brandCheck6" />
                        <label className="custom-control-label" htmlFor="brandCheck6">John Players</label>
                    </div>
                </div>
                <div className="widget widget-color mb-4 pb-4 border-bottom">
                    <h4 className="widget-title mb-3">Color</h4>
                    <ul className="list-inline">
                        {this.props.colors.map((col, index) => {
                             return (
                                <li key={index} className="form-check pl-0">
                                    <div className="form-check pl-0">
                                       <input type="checkbox" onClick={(e) => this.ColorFilter(e, colorsFilterValues)} value={col} defaultChecked={colorsFilterValues.includes(col) ? true : false} className="form-check-input" id={col} />
                                       <label className="form-check-label" style={{ background: col }} htmlFor={col}/>
                                   </div><small>{col}</small>
                                 </li>
                            )

                        })}
                    </ul>
                </div>
                <div className="widget widget-size">
                    <h4 className="widget-title mb-3">Size</h4>
                    <ul className="list-inline clearfix">
                        {this.props.sizes.map((size, index) => {
                            return( 
                                    <li key={index}>
                                        <input name="sc" type="checkbox"  onClick={(e) => this.onClickSizeFilter(e, sizeFilterValues)} defaultChecked={sizeFilterValues.includes(size) ? true : false} value={size} id={size} />
                                        <label  htmlFor={size}>{size}</label>
                                    </li>
                                )
                        })}
                     </ul>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = state => ({
    categorys: CategoryList(state.data.products),
    prices: GetMinMaxPrice(state.data.products),
    colors: GetColorsList(state.data.products),
    sizes: GetsizeList(state.data.products),
    filters: state.filters
})
export default connect(
    mapDispatchToProps,
    { Getcategory, Getprice, Getcolor,Getsize }
)(Sidebar);
