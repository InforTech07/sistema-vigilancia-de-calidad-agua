"use strict";
//@ts-check
/**
 * Despliega el progreso de las hilos de muestra 
 * @module Dashboard
 * @author kevin-pilo-umg 
 * @copyright - ksksue
 * @version 1.0
 */

/**
 * Importacion de componentes
 * @requires componente:OpcDashboard - opciones del modulo
 * @requires componente:HiloActual - progreso del hilo
 * @requires componente:Historial - listado de los hilos completados
 */
import {OpcDashboard} from './OpcDashboard.js'
import {HiloActual} from './HiloActual.js'
import {Historial} from './Historial.js'

/**
 * Unificacion de componentes del modulo
 * @returns {void} - componentes del modulo
 */
export function Dashboard() {
    const $dashboard=document.createElement('section');
    $dashboard.classList.add('contenedor-modulo');
    $dashboard.appendChild(OpcDashboard());
    const $paginas = document.createElement('div');
    $paginas.classList.add("contenido-pagina")
    $paginas.appendChild(HiloActual());
    $paginas.appendChild(Historial());
    $dashboard.appendChild($paginas);
    return $dashboard;
}