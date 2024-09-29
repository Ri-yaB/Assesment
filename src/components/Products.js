import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions';
import '../styles/Products.css';

const Products = ({ selectedCategory }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(getProducts(selectedCategory, 10, page * 10)); 
  }, [dispatch, selectedCategory, page]);

  const filteredProducts = products.filter((product) => {
    console.log('Product Category:', product.categorySlug); 
    console.log('Selected Category:', selectedCategory); 
    return selectedCategory ? product.categorySlug === selectedCategory : true;
  });

  const loadMore = () => setPage((prev) => prev + 1);

  return (
    <div className="products-container">
      <div className="product-list">
        {filteredProducts.slice(0, (page + 1) * 10).map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
      {filteredProducts.length > (page + 1) * 10 && (
        <button onClick={loadMore} className="load-more-button">Load More</button>
      )}
      {filteredProducts.length === 0 && <p>No products found for this category.</p>}
    </div>
  );
};

export default Products;
