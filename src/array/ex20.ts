/*
Exercice 20: Créer une liste répétitive et la transformer
Utilise Array.repeat (pour créer une liste en répétant un produit 5 fois).
Utilise Array.map (pour appliquer une transformation à chaque produit répété).
*/

import { Product } from './type';
import { A } from '@mobily/ts-belt';

const product: Product = { name: 'Mouse', price: 25, inStock: true };
export const ArrayFn20 = () => {
  console.log('Ex20:');
  const products = A.repeat(5, product);
  console.log(products);
  const productsWithDiscount = A.map(products, (product) => ({
    ...product,
    price: product.price - 5,
  }));
  console.log(productsWithDiscount);
};
