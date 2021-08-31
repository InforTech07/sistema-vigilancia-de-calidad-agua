"use strict";
//@ts-check
/**
 * Importacion de componentes para el modulo
 * @requires componente: opcPanel  para las opciones del modulo
 * @requires componente: Institucion  pagina del modulo
 * @requires componente: AppMovil  pagina del modulo
 * @requires componente: Publicacion  pagina del modulo
 * @requires componente: copia seguridad  pagina del modulo
 */
import { OpcPanel } from "./OpcPanel.js"; 
import { Institucion } from "./Institucion.js"; 
import {AppMovil} from "./AppMovil.js"; 
import { Publicacion } from "./publicion.js"; 
import { CopiaSeguridad } from "./CopiaSeguridad.js";

/**
 * Unificacion de componentes del modulo
 * @returns {void} modulo de panel y funcionalidades
 */
export function Panel() {
    /**panel contenedor del modulo */
    const $panel=document.createElement('section');
    $panel.classList.add('contenedor-modulo');
    $panel.appendChild(OpcPanel());
    /**paginas contenedor de paginas */
    const $paginas = document.createElement('div');
    $paginas.classList.add("contenido-pagina")
    $paginas.appendChild(Institucion());
    $paginas.appendChild(AppMovil());
    $paginas.appendChild(Publicacion());
    $paginas.appendChild(CopiaSeguridad());
    $panel.appendChild($paginas);
    return $panel;
}