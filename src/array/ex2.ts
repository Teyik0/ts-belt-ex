// Exercice 2: Ajouter des produits et récupérer un élément à une position donnéeUtilise Array.prepend (pour ajouter le produit Monitor au début de la liste).Utilise Array.append (pour ajouter le produit Keyboard à la fin de la liste).Utilise Array.at (pour récupérer le produit à l'indice 2).

import { Product } from './type';
import { A } from '@mobily/ts-belt';

const products: Product[] = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Mouse', price: 25, inStock: false },
  { name: 'Headphones', price: 50, inStock: true },
];

export const ArrayFn2 = () => {
  console.log('Ex2:');
  const productsWithMonitor = A.prepend(products, {
    name: 'Monitor',
    price: 300,
    inStock: true,
  });

  const productsWithKeyboard = A.append(productsWithMonitor, {
    name: 'Keyboard',
    price: 75,
    inStock: true,
  });

  const productAtIndex2 = A.at(productsWithKeyboard, 2);
  console.log(productAtIndex2);
};
