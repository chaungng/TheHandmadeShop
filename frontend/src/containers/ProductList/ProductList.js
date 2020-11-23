import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from "../../components/Product/Product";
import { paginationPipe } from "../../pipes/paginationFilter";
import Pagination from "../../components/Pagination/Pagination";
import { products } from '../../data/productsData';

class ProductList extends Component {

    state = {
        colValue: 'col-lg-3',
        perPage: 8,
        currentPage: 1,
        pagesToShow: 3,
        gridValue: 4
    };


    onPrev = () => {
        const updatedState = {...this.state};
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

        let isActive = this.state.colValue[this.state.colValue.length - 1];

        return (
            <div className="col-lg-12">
                {/* <div className="row mb-3">
                    <div className="col-12 d-none d-lg-block d-xl-block">
                        <div className="card ">
                            <div className="card-header d-flex justify-content-end">
                                <span className="mr-3">Change Layout: </span>
                                <LayoutMode len={3} isActive={this.state.gridValue === 3} click={this.changeLayout} />
                                <LayoutMode len={4} isActive={this.state.gridValue === 4}  click={this.changeLayout} />
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="row">
                    {paginationPipe(this.props.products, this.state).map(product => {
                        let classes = `${this.state.colValue} col-md-6 mb-4`;
                        return (<div className={classes}>
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

// const mapStateToProps = state => {
//     const brands = state.brandFilter;
//     const orderBy = state.orderBy;

//     const filterByBrandArr = brandFilter(state.shop.products, brands);
//     const filterByOrderArr = orderByFilter(filterByBrandArr, orderBy);


//     return {products: filterByOrderArr }
// };

const mapStateToProps = state => {
    // const brands = state.brandFilter;
    // const orderBy = state.orderBy;

    // const filterByBrandArr = brandFilter(state.shop.products, brands);
    // const filterByOrderArr = orderByFilter(filterByBrandArr, orderBy);


    return {products: products }
};

export default connect(mapStateToProps, null)(ProductList);

// export default connect()(ProductList);