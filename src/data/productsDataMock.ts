import { Product } from '../redux/products/productsSlice';

const productsData: Product[] = [
  {
    name: 'tomato',
    amount: 1,
    inStock: true,
  },
  { name: 'onion', amount: 2, inStock: true },
  {
    name: 'butter',
    weight: 100,
    inStock: true,
  },
  { name: 'flour', weight: 200, inStock: true },
];

export default productsData;
