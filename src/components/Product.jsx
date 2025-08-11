const Product = ({ product }) => {
    const formatPrice = (pence) => (pence/100).toFixed(2);

    return (
        <div className="product-card">
            <img className="product-image" src={`src/assets/img/${product.img}.jpg`} alt="" />
            <h3 className="d-block">{product.name}</h3>
            <div className="product-details">
                <span className="current-price">£{formatPrice(product.price)}</span>
                <span className={`was-price ${!product.was_price ? 'empty' : ''} d-block`}>
                    Was Price: <span className="price">{product.was_price ? `£${formatPrice(product.was_price)}` : ''}</span>
                </span>
                <span className={`review-score d-block ${!product.reviews ? 'empty' : ''}`}>
                    {product.reviews ? `${product.reviews}` : ''}% Review Score
                </span>
                <a className="d-block button" href="javascript:void(0);">Add To Basket</a>
            </div>
        </div>
    );
};

export default Product;
