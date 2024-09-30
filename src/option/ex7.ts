/*
Exercice 7: Transformer une option falsy en valeur par défaut et l'utiliser avec un tuple
Fonctions à utiliser : fromFalsy, getWithDefault, zipObjectif : 
Créer une option à partir d'une valeur falsy, récupérer la valeur par défaut 'Inconnu',
puis l'associer à une autre option pour former un tuple.
*/
import { O } from '@mobily/ts-belt';
export const optionFn7 = () => {
  console.log('Ex7:');
  const option1 = O.fromNullable(NaN);
  const defaultValue = O.getWithDefault(option1, 12);
  const option2 = O.Some('Hello');
  const tuple = O.zip(defaultValue, option2);
  console.log(tuple);
};
