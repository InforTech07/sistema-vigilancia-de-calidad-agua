export function MenuPagina() {
    const $menu=document.createElement('nav');
    $menu.classList.add('menu-pag')
    $menu.innerHTML=`
            <li><a href="#/">INICIO</a></li>
            <li><a href="#/vision-mision">VISION</a></li>
            <li><a href="#/vision-mision">MISION</a></li>
            <li><a href="#/publicacion">LABORES</a></li>
        `;
    return $menu; 
}