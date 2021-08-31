"use strict";
/**
 * Componente inicial de modulo panel
 */
/**
 * @function AppMovil/constructor genera  la pagina de app movil
*/
export function AppMovil(){
    const $appmovil = document.createElement('div');
        $appmovil.classList.add("pagina");
        $appmovil.setAttribute('id',"pg2");
        $appmovil.setAttribute('style',"display:none;")
        $appmovil.innerHTML=`
        <h2>Pagina App movil</h2>
        `;
        return $appmovil;
}