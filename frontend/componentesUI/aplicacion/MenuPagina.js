export function MenuPagina() {
    const $menu=document.createElement('nav');
    $menu.classList.add('menu-pag')
    $menu.innerHTML=`
        <ul>
            <li><a href="#/">INICIO</a></li>
            <li><a href="#/vision-mision">VISION</a></li>
            <li><a href="#/vision-mision">MISION</a></li>
            <li><a href="#/publicacion">LABORES</a></li>
        </ul>
        `;
    return $menu; 
}