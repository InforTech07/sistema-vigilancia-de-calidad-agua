"use strict";
//@ts-check
/**
 * Importacion de componentes para el modulo
 * @requires componente: opcPanel  para las opciones del modulo
 */
import {OpcMuestra} from './OpcMuestra.js'


/**
 * Unificacion de componentes del modulo
 * @returns {void} modulo de panel y funcionalidades
 */
export function Muestra() {
    /**panel contenedor del modulo */
    const $muestra=document.createElement('section');
    $muestra.classList.add('contenedor-modulo');
    $muestra.appendChild(OpcMuestra());
    /**paginas contenedor de paginas */
    const $paginas = document.createElement('div');
    $paginas.classList.add("contenido-pagina")
    /** aqui se agregan las paginas... */
    
    $muestra.appendChild($paginas);
    return $muestra;
}