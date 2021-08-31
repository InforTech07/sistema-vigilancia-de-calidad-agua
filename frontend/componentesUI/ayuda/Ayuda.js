"use strict";
//@ts-check
/**
 * Importacion de componentes para el modulo
 * @requires componente: opcPanel  para las opciones del modulo
 */
import {OpcAyuda} from './OpcAyuda.js'


/**
 * Unificacion de componentes del modulo
 * @returns {void} modulo de panel y funcionalidades
 */
export function Ayuda() {
    /**panel contenedor del modulo */
    const $ayuda=document.createElement('section');
    $ayuda.classList.add('contenedor-modulo');
    $ayuda.appendChild(OpcAyuda());
    /**paginas contenedor de paginas */
    const $paginas = document.createElement('div');
    $paginas.classList.add("contenido-pagina")
    /** aqui se agregan las paginas... */
    
    $ayuda.appendChild($paginas);
    return $ayuda;
}