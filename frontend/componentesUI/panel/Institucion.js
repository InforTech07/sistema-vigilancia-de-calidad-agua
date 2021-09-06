import PeticionPanel from './ControladorPanel.js';
export function Institucion(){
    const $institucion = document.createElement('div');
        $institucion.classList.add("pagina");
        $institucion.setAttribute('id',"pg1");
        $institucion.setAttribute('style',"display:block;")
        $institucion.innerHTML=`
        <table>
            <thead>
                <tr>
                <th>nombre</th>
                <th>correo</th>
                <th>Opciones</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th colspan='2'>listado usuario</th>
            </tr>
        </tfoot>
        <tbody id="datos-institucion">
        </tbody>
        </table>
        `;
        function iniInstucion() {
            const peticonPanel = new PeticionPanel();
            peticonPanel.hacerPeticion(null,{},'GET').then(datos=>{
            const $list = document.getElementById('datos-institucion');
            console.table(datos.results)
            for (const iterator of datos.results) {
                console.log(iterator)
                $list.innerHTML +=`
                <tr>
                    <td>${iterator.name}</td>
                    <td>${iterator.url}</td>
                <td>
                <a class='button' href='#'>opcion</a>
                <a class='button' href='#'>opcion2</a>
                </td>
                </tr>
                `;
            }
            })
        }
        setTimeout(()=>iniInstucion(),100);
        return $institucion;
}