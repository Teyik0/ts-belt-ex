/*
Exercice 10: Insérer des produits à des positions spécifiques
Utilise Array.insertAt (pour insérer un produit à l'indice 1).
Utilise Array.prependToAll (pour ajouter un produit à chaque élément d'une liste).
Utilise Array.append (pour ajouter un produit à la fin de la liste)
*/

import { Product } from './type';
import { A } from '@mobily/ts-belt';

const products: Product[] = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Mouse', price: 25, inStock: false },
  { name: 'Keyboard', price: 75, inStock: true },
];
export const ArrayFn10 = () => {
  console.log('Ex10:');
  const newProduct: Product = { name: 'Monitor', price: 200, inStock: true };
  const productsWithMonitor = A.insertAt(products, 1, newProduct);
  console.log(productsWithMonitor);
  const productsWithMonitorPrepended = A.prependToAll(products, newProduct);
  console.log(productsWithMonitorPrepended);
  const productsWithMonitorAppended = A.append(products, newProduct);
  console.log(productsWithMonitorAppended);
};
