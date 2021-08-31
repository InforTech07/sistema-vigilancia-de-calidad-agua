"use strict";
//@ts-check
/**
 * Importacion de componentes para el modulo
 * @requires componente: opcPanel  para las opciones del modulo
 */
import {OpcReporte} from './OpcReporte.js';


/**
 * Unificacion de componentes del modulo
 * @returns {void} modulo de panel y funcionalidades
 */
export function Reporte() {
    /**panel contenedor del modulo */
    const $reporte=document.createElement('section');
    $reporte.classList.add('contenedor-modulo');
    $reporte.appendChild(OpcReporte());
    /**paginas contenedor de paginas */
    const $paginas = document.createElement('div');
    $paginas.classList.add("contenido-pagina")
    /** aqui se agregan las paginas... */
    
    $reporte.appendChild($paginas);
    return $reporte;
}