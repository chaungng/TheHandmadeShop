import React from 'react';
import { connect } from 'react-redux';
import ProductList from '../../containers/ProductList/ProductList';

const CategoryPage = (props) => {
    return (
        <React.Fragment>
            <div className="container" style={{ paddingTop: '6rem' }} >
                <div className="row">
                    <ProductList category={props.category}/>
                </div>
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = (state, props) => {
    console.log("Category Page mapStateToProps");

    let category = props.match.params.category;
    category = category.charAt(0).toUpperCase() + category.slice(1);

    return { category : category }
};

export default connect(mapStateToProps, null)(CategoryPage);

