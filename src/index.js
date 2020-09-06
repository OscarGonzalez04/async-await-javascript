import './styles.css';
import { obtenerHeroesArr, obtenerHeroeAwait, heroesCiclo, heroeIfAwait } from './js/await';

// console.time('await');
// obtenerHeroesArr().then( ([hero1, heroe2, heroe3]) => {
//     console.log(hero1, heroe2, heroe3);
//     console.timeEnd('await');
// })

// obtenerHeroesArr().then( (heroes) => {
//     console.table(heroes);
//     console.timeEnd('await');
// })

// obtenerHeroeAwait('capi2').then( (heroe) => {
//     console.log(heroe);
//     console.timeEnd('await');
// })
// .catch((error)=> console.warn (error) )
heroesCiclo();
heroeIfAwait('iron');