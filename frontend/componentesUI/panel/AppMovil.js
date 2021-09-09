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
        <section class="contenedor-panel">
      <div class="form-habilitar-app">
        <h3>Habilitar Dispositivo</h3>
        <hr>
        <form action="">
            <p><label for="" class="input-label">Usuario:</label>
                <input type="text" class="input-dato" id="" placeholder="cperez" required=""/></p>
            <p>
                <label for="" class="input-label"></label>
                <button class="primer-btn">Habilitar</button> 
            </p>
        </form>          
      </div>
      <div>
          <h3>Usuarios de la aplicacion</h3>
          <hr>
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Usuario</th>
                  <th>Empleado</th>
                  <th>Cargo</th>
                  <th>Fecha Habilitacion</th>
                  <th>Estado</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th colspan='7'>Usuario habilitados</th>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                    <td>1</td>
                    <td>cperez</td>
                    <td>carlos perez</td>
                    <td>Tecnico de agua</td>
                    <td>12/02/2021</td>
                    <td>Activo</td>
                    <td>
                      <a class='button' href='#'>opcion</a>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>cperez</td>
                    <td>carlos perez</td>
                    <td>Tecnico de agua</td>
                    <td>12/02/2021</td>
                    <td>Activo</td>
                    <td>
                      <a class='button' href='#'>opcion</a>
                    </td>
                  </tr>
              </tbody>
          </table>
      </div>
  </section>
        `;
        return $appmovil;
}