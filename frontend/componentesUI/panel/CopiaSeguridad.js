export function CopiaSeguridad(){
    const $copiaseguridad = document.createElement('div');
        $copiaseguridad.classList.add("pagina");
        $copiaseguridad.setAttribute('id',"pg4");
        $copiaseguridad.setAttribute('style',"display:none;")
        $copiaseguridad.innerHTML=`
        <h2> Copias de seguridad</h2>
        `;
        return $copiaseguridad;
}