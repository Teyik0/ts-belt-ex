// Exercice 1: Vérifier si tous les produits sont en stock et leur nombre
// Utilise Array.all (pour vérifier si tous les produits sont en stock).
// Utilise Array.any (pour vérifier si au moins un produit n’est pas en stock).
// Utilise Array.length (pour obtenir le nombre total de produits).

import { Product } from './type';
import { A } from '@mobily/ts-belt';

const products: Product[] = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Mouse', price: 25, inStock: false },
  { name: 'Keyboard', price: 75, inStock: true },
];

export const ArrayFn1 = () => {
  console.log('Ex1:');
  const allProductsInStock = A.all(products, (product) => product.inStock);
  console.log(allProductsInStock);

  const someProductsNotInStock = A.any(products, (product) => !product.inStock);
  console.log(someProductsNotInStock);

  const totalProducts = A.length(products);
  console.log(totalProducts);
};
