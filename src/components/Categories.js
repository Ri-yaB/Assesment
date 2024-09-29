import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../redux/actions';
import '../styles/Categories.css';

const Categories = ({ selectedCategory, onSelectCategory }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="categories-container">
      <select
        onChange={(e) => onSelectCategory(e.target.value)}
        value={selectedCategory || ''}
        className="categories-select"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category.slug} value={category.slug}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Categories;
