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
        <h2>soy el titulolo</h2>
        <button class="primer-btn">soy boton</button>
        <form action="">
            <input type="text" placeholder="nombre">
            <input type="text" placeholder="email">
            <button class="tercer-btn">enviar</button>
        </form>
        `;
        return $appmovil;
}