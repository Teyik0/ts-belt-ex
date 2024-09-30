/*
Exercice 2: Transformer une option à partir d'un prédicat, puis extraire une valeur
Fonctions à utiliser : fromPredicate, map, getWithDefaultObjectif : 
Créer une option à partir d'un prédicat (valeur > 50), transformer cette option en multipliant la valeur par 2, 
puis obtenir une valeur par défaut de 0 si l'option est vide.
*/
import { O } from '@mobily/ts-belt';
const value = 75;
export const optionFn2 = () => {
  console.log('Ex2:');
  const option = O.fromPredicate(value, (value) => value > 50);
  const transformedOption = O.map(option, (value) => value * 2);
  const result = O.getWithDefault(transformedOption, 0);
  console.log(result);
};
