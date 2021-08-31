import {Inicio} from './inicio/Inicio.js';
import{MenuPagina} from './aplicacion/MenuPagina.js';
import{MenuApp} from './aplicacion/MenuApp.js';
import {Panel} from './panel/Panel.js';

export function Router(){
    const $contenedor = document.getElementById('contenedor-modulo');
    let {hash} = location;
    console.log(hash);
    $contenedor.innerHTML = null;
    switch (hash) {
        case '/':
        case '#/':
            $contenedor.appendChild(MenuPagina());
            $contenedor.appendChild(Inicio());
            break;
        case '#/app/login':
                $contenedor.appendChild(Inicio());
        
        break;
        case '#/app/tanque':
                $contenedor.appendChild(MenuApp());
                $contenedor.appendChild(Inicio());
        
        break;
        case '#/app/muestra':
                $contenedor.appendChild(MenuApp());
                $contenedor.appendChild(Inicio());
        
        break;
        case '#/app/dashboard':
                $contenedor.appendChild(MenuApp());
                $contenedor.appendChild(Inicio());
        
        break;
        case '#/app/reporte':
                $contenedor.appendChild(MenuApp());
                $contenedor.appendChild(Inicio());
        
        break;
        case '#/app/usuario':
                $contenedor.appendChild(MenuApp());
                $contenedor.appendChild(Inicio());
        
        break;
        case '#/app/panel':
                $contenedor.appendChild(MenuApp());
                $contenedor.appendChild(Panel());
        
        break;
        case '#/app/ayuda':
                $contenedor.appendChild(MenuApp());
                $contenedor.appendChild(Inicio());
        
        break;
        default:
                $contenedor.appendChild(MenuPagina());
                $contenedor.appendChild(Inicio());

            break;
    }
}
