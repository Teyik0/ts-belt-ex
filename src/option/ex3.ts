/*
Exercice 3: Associer deux options et appliquer une fonction
Fonctions à utiliser : fromNullable, zipWith, mapObjectif :
Associer deux options, puis utiliser une fonction pour ajouter les deux valeurs ensemble,
et enfin transformer le résultat pour afficher une chaîne.
*/
import { O } from '@mobily/ts-belt';
const value1 = 100;
const value2 = 50;
export const optionFn3 = () => {
  console.log('Ex3:');
  const option1 = O.fromNullable(value1);
  const option2 = O.fromNullable(value2);
  const sum = O.zipWith(option1, option2, (a, b) => a + b);
  const result = O.map(
    sum,
    (value) => `The sum of ${value1} and ${value2} is ${value}`
  );
  console.log(result);
};
