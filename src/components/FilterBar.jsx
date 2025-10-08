import React from 'react';

export default function FilterBar({
  categories,
  selectedCategory,
  onSelectCategory,
  minPrice,
  maxPrice,
  onMinPrice,
  onMaxPrice
}) {
  return (
    <div className="bg-white p-4 rounded-md shadow-sm mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div className="flex flex-wrap gap-2 items-center">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-3 py-1 rounded-full text-sm border transition ${selectedCategory === cat ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-200 hover:shadow'}`}
            aria-pressed={selectedCategory === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <label className="text-sm text-gray-600">Price</label>
        <input
          type="number"
          placeholder="min"
          value={minPrice}
          onChange={e => onMinPrice(e.target.value)}
          className="w-24 px-2 py-1 border rounded-md text-sm"
        />
        <span className="mx-1">—</span>
        <input
          type="number"
          placeholder="max"
          value={maxPrice}
          onChange={e => onMaxPrice(e.target.value)}
          className="w-24 px-2 py-1 border rounded-md text-sm"
        />
        <button
          onClick={() => { onMinPrice(''); onMaxPrice(''); onSelectCategory('All'); }}
          className="ml-3 px-3 py-1 text-sm rounded-md border bg-gray-100 hover:bg-gray-200"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
