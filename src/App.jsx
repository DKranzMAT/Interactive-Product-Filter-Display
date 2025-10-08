import React, { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import FilterBar from './components/FilterBar';
import productsData from './data/products.json';

export default function App() {
  const [products] = useState(productsData);
  const [filtered, setFiltered] = useState(productsData);
  const [category, setCategory] = useState('All');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  useEffect(() => {
    let result = products.slice();
    if (category !== 'All') result = result.filter(p => p.category === category);
    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);
    if (!Number.isNaN(min)) result = result.filter(p => p.price >= min);
    if (!Number.isNaN(max)) result = result.filter(p => p.price <= max);
    setFiltered(result);
  }, [category, minPrice, maxPrice, products]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">Product Browser</h1>
        <FilterBar
          categories={categories}
          selectedCategory={category}
          onSelectCategory={setCategory}
          minPrice={minPrice}
          maxPrice={maxPrice}
          onMinPrice={setMinPrice}
          onMaxPrice={setMaxPrice}
        />
        <ProductList products={filtered} />
      </div>
    </div>
  );
}
