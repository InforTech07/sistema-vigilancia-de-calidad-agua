"use strict";
//@ts-check
/**
 * importacion del general
 * @requires modulo: App  todos los componentes de la aplicacion
 */
import {App} from './App.js';
/**-- escuchadores al documento --- */
document.addEventListener('DOMContentLoaded',App);
window.addEventListener('hashchange',App);