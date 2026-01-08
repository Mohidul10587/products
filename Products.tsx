import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

const ProductContainer: React.FC = () => {
  const products = [
    { id: 1, name: "Wireless Headphones", price: 99.99, rating: 4.5, image: "https://picsum.photos/200/200?random=1" },
    { id: 2, name: "Smart Watch", price: 199.99, rating: 4.8, image: "https://picsum.photos/200/200?random=2" },
    { id: 3, name: "Laptop Stand", price: 49.99, rating: 4.2, image: "https://picsum.photos/200/200?random=3" },
    { id: 4, name: "Bluetooth Speaker", price: 79.99, rating: 4.6, image: "https://picsum.photos/200/200?random=4" },
    { id: 5, name: "USB-C Hub", price: 39.99, rating: 4.3, image: "https://picsum.photos/200/200?random=5" },
    { id: 6, name: "Wireless Mouse", price: 29.99, rating: 4.4, image: "https://picsum.photos/200/200?random=6" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg p-4">
          <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded mb-2" />
          <h3 className="font-semibold mb-2">{product.name}</h3>
          <div className="flex items-center mb-2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="ml-1">{product.rating}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold">${product.price}</span>
            <button className="flex items-center bg-blue-600 text-white px-3 py-1 rounded">
              <ShoppingCart className="w-4 h-4 mr-1" />
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductContainer;
