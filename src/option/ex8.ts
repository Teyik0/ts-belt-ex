/*
Exercice 8: Transformer une option à partir d'une valeur nullable et vérifier si elle est vide
Fonctions à utiliser : fromNullable, isNone, toResultObjectif : 
Transformer une valeur nullable en option, vérifier si l'option est vide, 
puis la convertir en Result avec une erreur si elle est vide.
*/
import { O, R } from '@mobily/ts-belt';

export const optionFn8 = () => {
  const option = O.fromNullable(null);
  if (O.isNone(option)) {
    const result = O.toResult(option, 'Option is empty');
    console.log(result);
  } else {
    console.log(option);
  }
};
