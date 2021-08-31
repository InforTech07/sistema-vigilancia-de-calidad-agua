import {Encabezado}from './componentesUI/aplicacion/Encabezado.js';
import {Cuerpo} from './componentesUI/aplicacion/Cuerpo.js';
import {Router} from './componentesUI/Router.js';

export function App(){
    const $root = document.getElementById('root');
        $root.innerHTML = null;
        $root.appendChild(Encabezado());
        $root.appendChild(Cuerpo());
    Router();
}