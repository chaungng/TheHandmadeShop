import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addProductToCart } from '../../actions';

const ProductDetail = (props) => {

    const {
        name,
        category,
        price,
        volume,
        description,
        ingredients,
    } = props.product;

    const [productQuantity, setProductQuantity] = useState(0);

    const onCart = () => {
        console.log(props.product);
        let product = {
            product: props.product,
            quantity: productQuantity
        }
        props.dispatch(addProductToCart(product));
    };

    const handleQuantityChanged = (e) => {
        console.log(e.target.value)
        let qtyNumber = parseInt(e.target.value, 10)
        console.log("Quantity " + qtyNumber)
        setProductQuantity(qtyNumber)
    }

    return (
        <aside className="col-sm-7">
            <article className="card-body p-5">
                <h3 className="title mb-3">{name}</h3>
                <p className="price-detail-wrap">
                    <span className="price h3 text-warning">
                        <span className="currency"></span><span className="num">{price}</span>
                    </span>
                </p>
                <dl className="item-property">
                    <dt>Category</dt>
                    <dd><p className="text-capitalize">{category}</p></dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Volume</dt>
                    <dd className="text-capitalize">{volume}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Description</dt>
                    <dd>{description}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Ingredients</dt>
                    <dd>{ingredients}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Quantity</dt>
                    <dd><input type="number" placeholder="Select quantity" class="form-control" id="quantity"
                        value={productQuantity}
                        name="quantity" min="1" onChange={handleQuantityChanged} /></dd>
                </dl>

                <button onClick={onCart} className="btn btn-lg btn-outline-primary text-uppercase">
                    <i className="fa fa-shopping-cart" /> Add to cart
                </button>
            </article>
        </aside>
    );
};

export default connect()(ProductDetail);