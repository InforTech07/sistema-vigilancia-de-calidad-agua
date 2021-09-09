"use strict";
//@ts-check
/**
 * creacion de las opciones que tendra el modulo dashboard
 * @returns {void} historial del modulo y funcionalidades
 */
export function NuevoHilo(){
    const $nuevohilo = document.createElement('div');
        $nuevohilo.classList.add("pagina");
        $nuevohilo.setAttribute('id',"pg2");
        $nuevohilo.setAttribute('style',"display:none;")
        $nuevohilo.innerHTML=`
        <section class="contenedor-muestras">
        <div class="color-hilo">
            <h2 id="titulo">Crear nuevo hilo de muestras</h2>
            <hr> 
            <form action="" class="form-hilo">
                <p><label for="" class="input-label">Fecha de inicio:</label>
                    <input type="date" class="input-dato" id="" placeholder="" required=""/></p>
                <p><label for="" class="input-label">Fecha de finalizacón:</label>
                    <input type="date" class="input-dato" id="" placeholder="" required=""/></p>
                <p>
                    <label class="input-label" for="">Responsables</label>
                    <select class="input-opciones" id="">
                            <option value="Opcion 1">Opcion 1</option>
                            <option value="Opcion 2">Opcion 2</option>
                            <option value="Opcion 3">Opcion 3</option>
                            <option value="Opcion 4">Opcion 4</option>
                            <option value="Opcion 5">Opcion 5</option>
                    </select>
                </p>
                <button class="primer-btn">Crear</button>
            </form>
        </div>
        <div>
            <h2>Agregar tanques al hilo</h2>
            <hr>
            <div class="agregar-tanque">
            <form action="">
                    <div>
                    <label class="input-label" for="">Tanques: </label>
                    <select class="input-opciones" id="">
                            <option value="Opcion 1">Opcion 1</option>
                            <option value="Opcion 2">Opcion 2</option>
                            <option value="Opcion 3">Opcion 3</option>
                            <option value="Opcion 4">Opcion 4</option>
                            <option value="Opcion 5">Opcion 5</option>
                    </select>
                    </div>
                <button class="primer-btn">Agregar</button>
            </form>
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
                    <td>Christoph Koller</td>
                    <td>e-mail@test-email.com</td>
                    <td><a class='button' href='#'>opcion</a></td>
                  </tr>
                  <tr>
                    <td>Bram Lemmens</td>
                    <td>e-mail@test-email.com</td>
                    <td><a class='button' href='#'>opcion</a></td>
                  </tr>
                </tbody>
            </table>
            </div>
        </div>
    </section>
        `;
        return $nuevohilo;
}