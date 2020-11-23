import React from 'react';
import { connect } from 'react-redux';
import ProductDetail from '../../components/Product/ProductDetail';

const ProductDetailPage = (props) => {
    console.log(props);

    return (
        <div className="container" style={{ padding: '6rem 0' }}>
            <div className="card">
                <div className="row">
                    {/* <ProductSlider images={props.product.images} /> */}
                    <ProductDetail product={props.product} />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    console.log(state);
    const product = state.shopReducer.products.find(product => product.id === +props.match.params.id);
    return { product }
};

export default connect(mapStateToProps, null)(ProductDetail);