// src/App.tsx

import './App.css';
import ProductCard from './components/ProductCard';

function App() {
  const username = "John Doe";

  const add = (a: number, b: number): number => a + b;

  return (
    <div className="app">
      <h1>Welcome to TypeScript, {username}</h1>
      <h2>Sum of 2 and 3 is {add(2, 3)}</h2>

      <div className="product-list">
        <ProductCard productName="Product 1" productDesc="Product 1 Description" price={500} productImg="https://via.placeholder.com/150" buyFunc={() => alert('Product 1 added to cart')} />
        <ProductCard productName="Product 2" productDesc="Product 2 Description" price={600} productImg="https://via.placeholder.com/150" buyFunc={() => alert('Product 2 added to cart')} />
        <ProductCard productName="Product 3" productDesc="Product 3 Description" price={700} productImg="https://via.placeholder.com/150" buyFunc={() => alert('Product 3 added to cart')} />
      </div>
    </div>
  );
}

export default App;
