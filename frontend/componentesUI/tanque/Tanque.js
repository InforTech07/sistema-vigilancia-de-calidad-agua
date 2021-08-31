"use strict";
//@ts-check
/**
 * Importacion de componentes para el modulo
 * @requires componente: opcPanel  para las opciones del modulo
 */
import {OpcTanque} from './OpcTanque.js'


/**
 * Unificacion de componentes del modulo
 * @returns {void} modulo de panel y funcionalidades
 */
export function Tanque() {
    /**panel contenedor del modulo */
    const $tanque=document.createElement('section');
    $tanque.classList.add('contenedor-modulo');
    $tanque.appendChild(OpcTanque());
    /**paginas contenedor de paginas */
    const $paginas = document.createElement('div');
    $paginas.classList.add("contenido-pagina")
    /** aqui se agregan las paginas... */
    
    $tanque.appendChild($paginas);
    return $tanque;
}