import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from "../../components/Product/Product";
import { paginationPipe } from "../../pipes/paginationFilter";
import Pagination from "../../components/Pagination/Pagination";
import {categoryFilter} from "../../pipes/categoryFilter";

class ProductList extends Component {

    state = {
        colValue: 'col-lg-3',
        perPage: 8,
        currentPage: 1,
        pagesToShow: 3,
        gridValue: 4
    };


    onPrev = () => {
        const updatedState = { ...this.state };
        updatedState.currentPage = this.state.currentPage - 1;
        this.setState(updatedState);
    };


    onNext = () => {
        this.setState({
            ...this.state,
            currentPage: this.state.currentPage + 1
        });
    };

    goPage = (n) => {
        this.setState({
            ...this.state,
            currentPage: n
        });
    };

    render() {
        return (
            <div className="col-lg-12">
                <div className="row">
                    {paginationPipe(this.props.products, this.state).map(product => {
                        let classes = `${this.state.colValue} col-md-6 mb-4`;
                        return (<div className={classes} key={product.id}>
                            <Product key={product.id} product={product} />
                        </div>)
                    })}
                </div>
                <div className="d-flex justify-content-end">
                    <Pagination
                        totalItemsCount={this.props.products.length}
                        currentPage={this.state.currentPage}
                        perPage={this.state.perPage}
                        pagesToShow={this.state.pagesToShow}
                        onGoPage={this.goPage}
                        onPrevPage={this.onPrev}
                        onNextPage={this.onNext}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    console.log("From Product List");
    console.log(state);

    const filterByCategoryArr = categoryFilter(state.shop.products, props.category)

    return { products: filterByCategoryArr }
};

export default connect(mapStateToProps, null)(ProductList);