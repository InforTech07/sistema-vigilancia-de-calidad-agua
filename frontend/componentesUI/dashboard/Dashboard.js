"use strict";
//@ts-check
/**
 * Importacion de componentes para el modulo
 * @requires componente: opcPanel  para las opciones del modulo
 */
import {OpcDashboard} from './OpcDashboard.js'
import {HiloActual} from './HiloActual.js'
import {Historial} from './Historial.js'


/**
 * Unificacion de componentes del modulo
 * @returns {void} modulo de panel y funcionalidades
 */
export function Dashboard() {
    /**panel contenedor del modulo */
    const $dashboard=document.createElement('section');
    $dashboard.classList.add('contenedor-modulo');
    $dashboard.appendChild(OpcDashboard());
    /**paginas contenedor de paginas */
    const $paginas = document.createElement('div');
    $paginas.classList.add("contenido-pagina")
    /** aqui se agregan las paginas... */
    $paginas.appendChild(HiloActual());
    $paginas.appendChild(Historial());
    $dashboard.appendChild($paginas);
    return $dashboard;
}