// src/components/ProductInterface.ts
export interface ProductCardProps {
    productName: string;
    productDesc: string;
    price: number;
    productImg: string;
    buyFunc: () => void;
  }
  