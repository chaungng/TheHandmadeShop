import React from 'react';
import { connect } from 'react-redux';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import ProductDetail from '../../components/Product/ProductDetail';

const ProductDetailPage = (props) => {
    // console.log("From Product Detail Page");
    // console.log(props);

    return (
        <div className="container" style={{ padding: '6rem 0' }}>
            <div className="card">
                <div className="row">
                    <ProductSlider images={props.product.images} />
                    <ProductDetail product={props.product} />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    const product = state.shop.products.find(product => product.id === +props.match.params.id);
    return { product }
};

export default connect(mapStateToProps, null)(ProductDetailPage);