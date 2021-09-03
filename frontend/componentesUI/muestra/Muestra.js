"use strict";
//@ts-check

/**
 * Modulo Muestra - encargado de ingresar las muestras y creacion de hilos
 * @module Constantes
 * @author nombre del 
 * @copyright - ksksue
 * @version 1.0
 */

/**
 * Importacion de componentes para el modulo
 * @requires componente:Opciones - opciones del modulo
 */
import {OpcMuestra} from './OpcMuestra.js';



/**
 * Unificacion de todos los componentes del modulo
 * @returns {HTMLDivElement}
 */
export function Muestra() {
    const $muestra=document.createElement('section');
    $muestra.classList.add('contenedor-modulo');
    $muestra.appendChild(OpcMuestra());
    const $paginas = document.createElement('div');
    $paginas.classList.add("contenido-pagina")
    /** aqui se agregan las paginas... */

    $muestra.appendChild($paginas);
    return $muestra;
}