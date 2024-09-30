/*
Exercice 11: Extraire des sous-listes depuis des positions spécifiques
Utilise Array.slice (pour extraire la sous-liste allant de l'indice 1 à 3).
Utilise Array.takeExactly (pour prendre exactement 2 produits au début de la liste).
Utilise Array.takeWhile (pour prendre les produits tant que leur prix est inférieur à 100).
*/

import { Product } from './type';
import { A } from '@mobily/ts-belt';

const products: Product[] = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Mouse', price: 25, inStock: false },
  { name: 'Keyboard', price: 75, inStock: true },
  { name: 'Monitor', price: 200, inStock: true },
];
export const ArrayFn11 = () => {
  console.log('Ex11:');
  const productsFrom1To3 = A.slice(products, 1, 3);
  console.log(productsFrom1To3);
  const first2Products = A.takeExactly(products, 2);
  console.log(first2Products);
  const productsUntilPriceIs100 = A.takeWhile(
    products,
    (product) => product.price < 100
  );
  console.log(productsUntilPriceIs100);
};
