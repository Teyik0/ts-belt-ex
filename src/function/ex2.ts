// Exercice 2: Appliquer plusieurs prédicats et vérifier si tous sont satisfaits Fonctions à utiliser
// : allPass, tap, when, identityObjectif : Vérifie si un nombre est supérieur à 10 et pair.
//Si oui, affiche 'Validé', sinon retourne simplement la valeur d'origine avec identity.

import { F } from '@mobily/ts-belt';

export const functionFn2 = () => {
  console.log('Ex2:');
  const number = 12;
  const predicates = [(n: number) => n > 10, (n: number) => n % 2 === 0];
  const allPass = F.allPass(predicates);
  const tap = F.tap((n: number) => console.log('Validé'));
  const when = F.when(allPass, tap);
  const identity = F.identity(when);
  console.log(identity(number));
};
