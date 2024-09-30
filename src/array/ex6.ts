/*
Exercice 6: Comparer des listes et tester l'inclusion
Utilise Array.eq (pour comparer deux listes de produits).
Utilise Array.includes (pour vérifier si un produit spécifique est inclus dans la liste)
*/

import { Product } from './type';
import { A } from '@mobily/ts-belt';

const products1: Product[] = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Mouse', price: 25, inStock: false },
];
const products2: Product[] = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Keyboard', price: 75, inStock: true },
];
export const ArrayFn6 = () => {
  console.log('Ex6:');
  const areEqual = A.eq(
    products1,
    products2,
    (p1, p2) =>
      p1.name === p2.name && p1.price === p2.price && p1.inStock === p2.inStock
  );
  console.log(areEqual);

  const isMouseIncluded = A.includes(products1, {
    name: 'Mouse',
    price: 25,
    inStock: false,
  });
  console.log(isMouseIncluded);
};
