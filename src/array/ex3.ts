// Exercice 3: Fusionner et copier des listesUtilise Array.concat (pour combiner deux listes de produits).Utilise Array.concatMany (pour ajouter plusieurs listes de produits).Utilise Array.copy (pour créer une copie de la liste combinée).

import { Product } from './type';
import { A } from '@mobily/ts-belt';

const products: Product[] = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Mouse', price: 25, inStock: false },
];
const accessories: Product[] = [
  { name: 'Keyboard', price: 75, inStock: true },
  { name: 'Monitor', price: 200, inStock: true },
];

export const ArrayFn3 = () => {
  console.log('Ex3:');
  const allProducts = A.concat(products, accessories);
  console.log(allProducts);
  const allProductsCopy = A.concatMany([products, accessories]);
  console.log(allProductsCopy);
  const allProductsCopy2 = A.copy(allProducts);
  console.log(allProductsCopy2);
};
