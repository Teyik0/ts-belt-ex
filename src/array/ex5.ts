/*
Exercice 5: Supprimer des produits selon des critères
Utilise Array.drop (pour retirer le premier produit de la liste).
Utilise Array.dropExactly (pour retirer exactement deux produits depuis le début).
Utilise Array.dropWhile (pour retirer les produits tant qu'ils sont en stock)
*/
import { Product } from './type';
import { A } from '@mobily/ts-belt';

const products: Product[] = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Mouse', price: 25, inStock: false },
  { name: 'Keyboard', price: 75, inStock: true },
  { name: 'Monitor', price: 200, inStock: true },
];

export const ArrayFn5 = () => {
  console.log('Ex5:');
  const productsWithoutFirst = A.drop(products, 1);
  console.log(productsWithoutFirst);
  const productsWithoutTwoFirst = A.dropExactly(products, 2);
  console.log(productsWithoutTwoFirst);
  const productsWithoutInStock = A.dropWhile(
    products,
    (product) => product.inStock
  );
  console.log(productsWithoutInStock);
};
