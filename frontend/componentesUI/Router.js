"use strict";
//@ts-check
/**
 * Importacion de modulos 
 * @requires modulo: inicio  pagina inicial de la aplicacion
 * @requires componente: menupagina  opciones iniciales del modulo inicial
 * @requires componente: menuapp opciones  de navegacion en los modulos princiapales
 * @requires modulo: tanque funcionalidades e interfaz del modulo
 * @requires modulo: muestra funcionalidades e interfaz del modulo
 * @requires modulo: dashboard funcionalidades e interfaz del modulo
 * @requires modulo: reporte funcionalidades e interfaz del modulo
 * @requires modulo: usuario funcionalidades e interfaz del modulo
 * @requires modulo: panel funcionalidades e interfaz del modulo
 * @requires modulo: ayuda funcionalidades e interfaz del modulo 
 */
import {Inicio} from './inicio/Inicio.js';
import{MenuPagina} from './aplicacion/MenuPagina.js';
import{MenuApp} from './aplicacion/MenuApp.js';
import {Tanque} from './tanque/Tanque.js';
import {Muestra} from './muestra/Muestra.js';
import {Dashboard} from './dashboard/Dashboard.js';
import {Reporte} from './reporte/Reporte.js';
import {Usuario} from './usuario/Usuario.js';
import {Panel} from './panel/Panel.js';
import {Ayuda} from './ayuda/Ayuda.js';

/**
 * Enrutador de navegacion de modulos de aplicacion
 */

export function Router(){
    const $contenedor = document.getElementById('contenedor-modulo');
    let {hash} = location;
    console.log(hash);
    $contenedor.innerHTML = null;
    switch (hash) {
        case '/':
        case '#/':
            $contenedor.appendChild(MenuPagina());
            $contenedor.appendChild(Inicio());
            break;
        case '#/app/login':
                $contenedor.appendChild(MenuPagina());
               /**
                * modulo de login
                */
        
        break;
        case '#/app/tanque':
                $contenedor.appendChild(MenuApp('m-tanque'));
                $contenedor.appendChild(Tanque());
        
        break;
        case '#/app/muestra':
                $contenedor.appendChild(MenuApp('m-muestra'));
                $contenedor.appendChild(Muestra());
        
        break;
        case '#/app/dashboard':
                $contenedor.appendChild(MenuApp('m-dashboard'));
                $contenedor.appendChild(Dashboard());
        
        break;
        case '#/app/reporte':
                $contenedor.appendChild(MenuApp('m-reporte'));
                $contenedor.appendChild(Reporte());
        
        break;
        case '#/app/usuario':
                $contenedor.appendChild(MenuApp('m-usuario'));
                $contenedor.appendChild(Usuario());
        
        break;
        case '#/app/panel':
                $contenedor.appendChild(MenuApp('m-panel'));
                $contenedor.appendChild(Panel());
        
        break;
        case '#/app/ayuda':
                $contenedor.appendChild(MenuApp('m-ayuda'));
                $contenedor.appendChild(Ayuda());
        
        break;
        default:
                $contenedor.appendChild(MenuPagina());
                $contenedor.appendChild(Inicio());

            break;
    }
}
