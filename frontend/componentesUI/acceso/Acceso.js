"use strict";
//@ts-check
/**
 * Importacion de componentes para el modulo
 * @requires componente: opcPanel  para las opciones del modulo
 */
import {OpcMuestra} from './OpcMuestra.js.js.js'


/**
 * Unificacion de componentes del modulo
 * @returns {void} modulo de panel y funcionalidades
 */
export function Acceso() {
    /**panel contenedor del modulo */
    const $acceso=document.createElement('section');
    return $acceso;
}