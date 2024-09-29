import React, { useState } from 'react';
import { BrowserRouter as Router, useNavigate, useLocation } from 'react-router-dom';
import Categories from './components/Categories';
import Products from './components/Products';
import Search from './components/Search';
import Layout from './components/Layout';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [selectedCategory, setSelectedCategory] = useState(queryParams.get('category') || '');
  const [searchQuery, setSearchQuery] = useState(queryParams.get('q') || '');

  const updateQueryParams = (category, query) => {
    const params = new URLSearchParams();
    if (category) params.set('category', category);
    if (query) params.set('q', query);
    navigate({ search: params.toString() });
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    updateQueryParams(category, searchQuery);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    updateQueryParams(selectedCategory, query);
  };

  return (
    <Layout>
      <Search onSearch={handleSearch} />
      <Categories selectedCategory={selectedCategory} onSelectCategory={handleCategorySelect} />
      <Products selectedCategory={selectedCategory} />
    </Layout>
  );
};

export default App;
