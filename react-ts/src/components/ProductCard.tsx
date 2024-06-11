// src/components/ProductCard.tsx
import React from 'react';
import './ProductCard.css'; // Import the CSS file for styling
import { ProductCardProps } from './ProductInterface';

const ProductCard: React.FC<ProductCardProps> = ({ productName, productDesc, price, productImg, buyFunc }) => {
  return (
    <div className="product-card">
      <img src={productImg} alt={productName} className="product-image" />
      <div className="product-details">
        <h3 className="product-name"> {productName}</h3>
        <p className="product-desc"> {productDesc}</p>
        <p className="product-price">Price: ${price}</p>
        <button className="buy-button" onClick={buyFunc}>Buy</button>
      </div>
    </div>
  );
};

export default ProductCard;
