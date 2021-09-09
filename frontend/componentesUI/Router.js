"use strict";
//@ts-check

/**
 * Modulo Muestra - encargado de ingresar las muestras y creacion de hilos
 * @module router - enrutador de componentes
 * @author autor
 * @copyright - 
 * @version 1.0
 */

/**
 * Importacion de modulos 
 * @requires modulo:inicio  -pagina inicial de la aplicacion
 * @requires componente:menupagina  -opciones iniciales del modulo inicial
 * @requires componente:menuapp -opciones  de navegacion en los modulos princiapales
 * @requires modulo:tanque -funcionalidades e interfaz del modulo
 * @requires modulo:muestra -funcionalidades e interfaz del modulo
 * @requires modulo:dashboard -funcionalidades e interfaz del modulo
 * @requires modulo:reporte -funcionalidades e interfaz del modulo
 * @requires modulo:usuario -funcionalidades e interfaz del modulo
 * @requires modulo:panel -funcionalidades e interfaz del modulo
 * @requires modulo:ayuda -funcionalidades e interfaz del modulo 
 */
import {Inicio} from './inicio/Inicio.js';
import{MenuPagina} from './aplicacion/MenuPagina.js';
import{MenuApp} from './aplicacion/MenuApp.js';
import{Login} from './aplicacion/Login.js';
import {Tanque} from './tanque/Tanque.js';
import {Muestra} from './muestra/Muestra.js';
import {Dashboard} from './dashboard/Dashboard.js';
import {Reporte} from './reporte/Reporte.js';
import {Usuario} from './usuario/Usuario.js';
import {Panel} from './panel/Panel.js';
import {Ayuda} from './ayuda/Ayuda.js';

/**
 * identificadores de los modulos
 * @type {string} -id de modulo
 */
const M_TANQUE='m-tanque';
const M_MUESTRA='m-muestra';
const M_DASHBOARD='m-dashboard';
const M_REPORTE='m-reporte';
const M_USUARIO='m-usuario';
const M_PANEL='m-panel';
const M_AYUDA='m-ayuda';  
/**
 * Enrutador de navegacion de modulos de aplicacion
 * @returns {void} - muestra el componente seleccionado
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
        $contenedor.appendChild(Login());
        break;
      case '#/app/tanque':
        $contenedor.appendChild(MenuApp(M_TANQUE));
        $contenedor.appendChild(Tanque());
        break;
      case '#/app/muestra':
        $contenedor.appendChild(MenuApp(M_MUESTRA));
        $contenedor.appendChild(Muestra());
        break;
      case '#/app/dashboard':
        $contenedor.appendChild(MenuApp(M_DASHBOARD));
        $contenedor.appendChild(Dashboard());  
        break;
      case '#/app/reporte':
        $contenedor.appendChild(MenuApp(M_REPORTE));
        $contenedor.appendChild(Reporte());
        break;
      case '#/app/usuario':
        $contenedor.appendChild(MenuApp(M_USUARIO));
        $contenedor.appendChild(Usuario());
        break;
      case '#/app/panel':
        $contenedor.appendChild(MenuApp(M_PANEL));
        $contenedor.appendChild(Panel());
        break;
      case '#/app/ayuda':
        $contenedor.appendChild(MenuApp(M_AYUDA));
        $contenedor.appendChild(Ayuda());
        break;
      default:
        $contenedor.appendChild(MenuPagina());
        $contenedor.appendChild(Inicio());
        break;
    }
}
