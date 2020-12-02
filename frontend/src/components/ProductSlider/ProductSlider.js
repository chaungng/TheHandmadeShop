import React, { useState } from 'react';
import './ProductSlider.scss';

const ProductSlider = ({ images }) => {
    const imageRef = React.createRef();
    const [img, setImg] = useState(images[0]);
    const [index, setIndex] = useState(0);

    const changeImage = (i) => {
        setImg(images[i]);
        setIndex(i);
    }

    return (
        <aside className="col-sm-5 border-right">
            <article className="gallery-wrap">
                <div className="img-big-wrap">
                    <div style={{ padding: '2rem' }}><img
                        ref={imageRef}
                        src={img}
                        style={{
                            width: '100%',
                            height: '100%'
                        }} alt={index}
                    /></div>
                </div>
                <div className="img-small-wrap">
                    {images.map((img, i) => (
                        <div className="item-gallery" onClick={() => { changeImage(i) }}><img src={img} alt={index} /></div>
                    ))}
                </div>
            </article>
        </aside>
    )
}

export default ProductSlider;
