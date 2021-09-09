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
import {Hilos} from './Hilos.js';
import {NuevoHilo} from './NuevoHilo.js';
import { IngresoMuestra } from './IngresoMuestra.js';
import { TipoMuestra } from './TipoMuestra.js';



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
    $paginas.appendChild(Hilos());
    $paginas.appendChild(NuevoHilo());
    $paginas.appendChild(IngresoMuestra());
    $paginas.appendChild(TipoMuestra());

    $muestra.appendChild($paginas);
    return $muestra;
}