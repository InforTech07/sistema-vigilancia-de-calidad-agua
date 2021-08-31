export function Publicacion(){
    const $publicacion = document.createElement('div');
        $publicacion.classList.add("pagina");
        $publicacion.setAttribute('id',"pg3");
        $publicacion.setAttribute('style',"display:none;")
        $publicacion.innerHTML=`
        <h2> Pagina Publicaciones</h2>
        `;
        return $publicacion;
}