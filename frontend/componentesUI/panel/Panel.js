"use strict";
/**
 * Componente inicial de modulo panel
 */

/*---- importando componentes*/
import { OpcPanel } from "./OpcPanel.js"; /**opciones del mudulo */
import { Institucion } from "./Institucion.js"; /**pagina de institucion */
import {AppMovil} from "./AppMovil.js"; /**pagina de app mvil */
import { Publicacion } from "./publicion.js"; /**pagina de publicacion */
import { CopiaSeguridad } from "./CopiaSeguridad.js";/**pagina de copia de seguridad */

/**
 * @function panel/constructor  del modulo panel
 * @constant panel elemento generado para contener todo el modulo
 * @constant paginas elemento generado contener todas las paginas
 * **/
export function Panel() {
    const $panel=document.createElement('section');
    $panel.classList.add('contenedor-modulo');
    $panel.appendChild(OpcPanel());
    const $paginas = document.createElement('div');
    $paginas.classList.add("contenido-pagina")
    $paginas.appendChild(Institucion());
    $paginas.appendChild(AppMovil());
    $paginas.appendChild(Publicacion());
    $paginas.appendChild(CopiaSeguridad());
    $panel.appendChild($paginas);
    return $panel;
}