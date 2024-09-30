/*
Exercice 1: Vérifier et filtrer une option, puis obtenir une valeur par défaut 
Fonctions à utiliser : fromNullable, filter, getWithDefaultObjectif
Créer une option à partir de 'Laptop', filtrer les options contenant la lettre 'L', 
puis obtenir la valeur par défaut 'No Item' si l'option est vide.
*/
import { O } from '@mobily/ts-belt';
const item = 'Laptop';
export const optionFn1 = () => {
  console.log('Ex1:');
  const option = O.fromNullable(item);
  const filteredOption = O.filter(option, (item) => item.includes('L'));
  const value = O.getWithDefault(filteredOption, 'No Item');
  console.log(value);
};
