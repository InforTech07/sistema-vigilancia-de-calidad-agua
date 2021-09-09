"use strict";
//@ts-check
/**
 * Importacion de componentes para el modulo
 * @requires componente: opcPanel  para las opciones del modulo
 */
import {OpcTanque} from './OpcTanque.js'
import { Tanques } from './Tanques.js';
import { Nuevo } from './Nuevo.js';
import { Mantenimiento } from './Mantenimiento.js';
import { MetodoCloracion } from './MetodoCloracion.js';

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
    $paginas.appendChild(Tanques());
    $paginas.appendChild(Nuevo());
    $paginas.appendChild(Mantenimiento());
    $paginas.appendChild(MetodoCloracion());
    
    $tanque.appendChild($paginas);
    return $tanque;
}