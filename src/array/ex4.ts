/*
Exercice 4: Comparer deux inventaires.
Utilise Array.difference (pour obtenir les produits qui sont dans inventory1 mais pas dans inventory2).
Utilise Array.intersection (pour obtenir les produits présents dans les deux inventaires).
Utilise Array.union (pour obtenir tous les produits des deux inventaires sans doublons)
*/
import { Product } from './type';
import { A } from '@mobily/ts-belt';

const inventory1: Product[] = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Mouse', price: 25, inStock: false },
  { name: 'Keyboard', price: 75, inStock: true },
];
const inventory2: Product[] = [
  { name: 'Keyboard', price: 75, inStock: true },
  { name: 'Monitor', price: 200, inStock: false },
];

export const ArrayFn4 = () => {
  console.log('Ex4:');
  const productsOnlyInInventory1 = A.difference(inventory1, inventory2);
  console.log(productsOnlyInInventory1);
  const productsInBothInventories = A.intersection(inventory1, inventory2);
  console.log(productsInBothInventories);
  const allProducts = A.union(inventory1, inventory2);
  console.log(allProducts);
};
