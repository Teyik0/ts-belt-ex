/*
Exercice 5: Manipuler un Result à partir d'une exécution et convertir en option
Fonctions à utiliser : fromExecution, map, toOptionObjectif : 
Transformer une exécution en Result, appliquer une transformation, puis convertir le résultat en option.
*/

import { R } from '@mobily/ts-belt';

export const resultFn5 = () => {
  console.log('Ex5:');
  const riskyFunction = () => {
    if (Math.random() > 0.5) {
      return 150;
    }
    throw new Error('Erreur');
  };
  const result = R.fromExecution(riskyFunction);
  const mappedResult = R.map(result, (value) => value * 2);
  const option = R.toOption(mappedResult);
  console.log(option);
};
