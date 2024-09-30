/*
Exercice 6: Créer une option à partir d'une promesse, appliquer une fonction, et récupérer la valeur avec une exception
Fonctions à utiliser : fromPromise, map, getExn
Objectif : Créer une option à partir d'une promesse, appliquer une transformation qui ajoute ' reçu' au résultat, 
puis extraire la valeur avec exception.
*/
import { O } from '@mobily/ts-belt';

const fetchData = async () => {
  if (Math.random() > 0.5) {
    return 'Données';
  }
  throw new Error('Erreur');
};
export const optionFn6 = () => {
  console.log('Ex6:');
  const promise = fetchData();
  const option = O.fromPromise(promise);
  const newValue = O.map(option, (value) => value + ' reçu');
  console.log(O.getExn(newValue));
};
