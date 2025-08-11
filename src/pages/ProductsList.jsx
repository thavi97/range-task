import React, { useEffect, useState } from 'react';
import Product from '../components/Product';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [sortedProducts, setSortedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost/range-task/api/retrieve-products.php')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Responded with an error status: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                setProducts(data.product_arr);
                setSortedProducts(data.product_arr);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const sortBy = (key) => {
        let filtered;

        if (key === 'saving') {
            filtered = products.filter(p =>
                typeof p.was_price === 'number' &&
                typeof p.price === 'number' &&
                p.was_price > p.price
            );
        } else {
            filtered = products.filter(p => p[key] !== false && p[key] !== undefined && p[key] !== null);
        }

        const sorted = [...filtered].sort((a, b) => {
            if (key === 'name') {
                return a.name.localeCompare(b.name);
            }
            if (key === 'saving') {
                return (a.was_price - a.price) - (b.was_price - b.price);
            }
            return a[key] - b[key];
        });

        setSortedProducts(sorted);
    };

    const clearSorting = () => {
        setSortedProducts(products);
    };

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="container my-4">
            <h2 className="text-center text-sm-start">Office Essentials</h2>

            <div className="mb-3 text-center text-sm-start sort-buttons">
                <button className="btn sort-btn me-2" onClick={() => sortBy('price')}>
                    Sort By Price
                </button>
                <button className="btn sort-btn me-2" onClick={() => sortBy('reviews')}>
                    Sort By Review
                </button>
                <button className="btn sort-btn me-2" onClick={() => sortBy('name')}>
                    Sort By Name
                </button>
                <button className="btn sort-btn me-2" onClick={() => sortBy('saving')}>
                    Sort By Saving
                </button>
                <button className="btn sort-btn me-2" style={{ color: 'red' }} onClick={clearSorting}>
                    Clear Sorting
                </button>
            </div>

            {sortedProducts.length === 0 ? (
                <p>No products found.</p>
            ) : (
                <div className="row">
                    {sortedProducts.map((product, index) => (
                        <div
                            key={index}
                            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
                        >
                            <Product product={product} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductList;
