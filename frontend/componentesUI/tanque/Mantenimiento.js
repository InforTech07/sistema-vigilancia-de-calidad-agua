"use strict";
//@ts-check
/**
 * creacion de las opciones que tendra el modulo dashboard
 * @returns {void} historial del modulo y funcionalidades
 */
export function Mantenimiento(){
    const $mantenimiento = document.createElement('div');
        $mantenimiento.classList.add("pagina");
        $mantenimiento.setAttribute('id',"pg3");
        $mantenimiento.setAttribute('style',"display:none;")
        $mantenimiento.innerHTML=`
        <section class="contenedor-tanques">
          <div>
            <h2>Mantenimiento y mejoras de tanques</h2>
          <hr>
          <form action="" class="form-mantenimiento">
            <p><label for="" class="input-label">Titulo:</label>
              <input type="text" class="input-dato" id="" placeholder="titulo" required=""/></p>
            <p><label for="" class="input-label">Descripcion:</label>
              <input type="text" class="input-dato" id="" placeholder="descripcion" required=""/></p>
            <p><label for="" class="input-label">Fecha:</label>
              <input type="date" class="input-dato" id="" placeholder="" required=""/></p>
            <p>
              <label for="" class="input-label">Fotografia:</label>
              <label class="input-archivo">
                  <input type="file" id="file" aria-label="archivo">
                  <span class="input-archivo-personalizado"></span>
                </label>
            </p>
            <p>
              <label class="input-label" for="">Tanque</label>
              <select class="input-opciones" id="">
                <option value="Opcion 1">tanque 1</option>
                <option value="Opcion 2">tanque 2</option>
                <option value="Opcion 3">Opcion 3</option>
                <option value="Opcion 4">Opcion 4</option>
                <option value="Opcion 5">Opcion 5</option>
              </select>
            </p>
          </form>
          <br>
          <button class="primer-btn">Guardar</button>
          </div>
      <div>
          <h2>Historial de mantenimientos</h2>
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
        return $mantenimiento;
}