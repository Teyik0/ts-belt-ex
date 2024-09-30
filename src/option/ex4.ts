/*
Exercice 4: Vérifier une option, appliquer une transformation, puis obtenir le résultat sous forme nullable
Fonctions à utiliser : fromNullable, isSome, map, toNullableObjectif : 
Créer une option à partir d'une valeur, vérifier si elle est présente, 
appliquer une transformation en augmentant de 10%, puis retourner cette option sous forme nullable.
*/
import { O } from '@mobily/ts-belt';
export const optionFn4 = () => {
  console.log('Ex4:');
  const value = 1000;
  const option = O.fromNullable(value);
  if (O.isSome(option)) {
    const newValue = O.map(option, (value) => value * 1.1);
    console.log(O.toNullable(newValue));
  }
};
