/*
Exercice 7: Filtrer les produits par condition et index
Utilise Array.filter (pour garder uniquement les produits en stock).
Utilise Array.filterWithIndex (pour garder les produits à des indices pairs).
Utilise Array.filterMap (pour appliquer une transformation sur les produits filtrés).
*/

import { Product } from './type';
import { A } from '@mobily/ts-belt';

const products: Product[] = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Mouse', price: 25, inStock: false },
  { name: 'Keyboard', price: 75, inStock: true },
  { name: 'Monitor', price: 200, inStock: true },
  { name: 'Headphones', price: 50, inStock: false },
];
export const ArrayFn7 = () => {
  console.log('Ex7:');
  const inStockProducts = A.filter(products, (product) => product.inStock);
  console.log(inStockProducts);
  const pairIndexProducts = A.filterWithIndex(
    products,
    (index, _) => index % 2 === 0
  );
  console.log(pairIndexProducts);
  const inStockPairIndexProducts = A.filterMap(products, (product) => {
    if (product.inStock) {
      return product;
    }
    return;
  });
  console.log(inStockPairIndexProducts);
};
