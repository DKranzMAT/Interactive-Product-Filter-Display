import React from 'react';
import { asset } from '../utils/asset';

export default function ProductList({ products }) {
  if (!products || products.length === 0) {
    return <div className="text-gray-500">No products match your filters.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((p) => {
        const imgPath =
          p.imageUrl.startsWith('/') || p.imageUrl.startsWith('images/')
            ? p.imageUrl
            : `images/${p.imageUrl}`;

        return (
          <div key={p.id} className="bg-white rounded-lg shadow p-4 flex flex-col">
            <img
              src={asset(imgPath)}
              alt={p.name}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <div className="flex-1">
              <h3 className="font-medium text-lg">{p.name}</h3>
              <p className="text-sm text-gray-500">{p.category}</p>
            </div>
            <div className="mt-3">
              <span className="text-xl font-semibold">${p.price.toFixed(2)}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
