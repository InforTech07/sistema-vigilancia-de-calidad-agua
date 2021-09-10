"use strict";
//@ts-check
/**
 * creacion de las opciones que tendra el modulo dashboard
 * @returns {void} historial del modulo y funcionalidades
 */
export function MetodoCloracion(){
    const $metodocloracion = document.createElement('div');
        $metodocloracion.classList.add("pagina");
        $metodocloracion.setAttribute('id',"pg4");
        $metodocloracion.setAttribute('style',"display:none;")
        $metodocloracion.innerHTML=`
        <section class="contenedor-tanques">
          <div>
            <h2>Metodo de cloracion</h2>
            <hr>
          <form action="" class="form-cloracion">
            <p><label for="" class="input-label">Tratamiento:</label>
              <input type="text" class="input-dato" id="" placeholder="nombre de metodo" required=""/></p>
            <p><label for="" class="input-label">Descripcion:</label>
              <input type="text" class="input-dato" id="" placeholder="descripcion" required=""/></p>
            <p><label for="" class="input-label"></label>
              <button class="primer-btn">Guardar</button></P>
          </form>
          </div>
        <div>
        <h2>Metodos registrados</h2>
        <hr>
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
            <th colspan='2'>Mantenimientos</th>
          </tr>
        </tfoot>
        <tbody>
            <tr>
              <td>Iacob Geaorgescu</td>
              <td>e-mail@test-email.com</td>
                <td>
                  <a class='button' href='#'>opcion</a>
                  <a class='button' href='#'>opcion2</a>
                </td>
            </tr>
            <tr>
              <td>Julius Neumann</td>
              <td>e-mail@test-email.com</td>
              <td>
                <a class='button' href='#'>opcion</a>
                <a class='button' href='#'>opcion2</a>
              </td>
            </tr>
            <tr>
              <td>Julius Neumann</td>
              <td>e-mail@test-email.com</td>
              <td>
                <a class='button' href='#'>opcion</a>
                <a class='button' href='#'>opcion2</a>
              </td>
            </tr>
              </tbody>
          </table>          
      </div>
    </section>
        `;
        return $metodocloracion;
}