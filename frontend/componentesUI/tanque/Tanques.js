"use strict";
//@ts-check
/**
 * creacion de las opciones que tendra el modulo dashboard
 * @returns {void} historial del modulo y funcionalidades
 */
export function Tanques(){
    const $tanques = document.createElement('div');
        $tanques.classList.add("pagina");
        $tanques.setAttribute('id',"pg1");
        $tanques.setAttribute('style',"display:block;")
        $tanques.innerHTML=`
        <section class="contenedor-tanques">
        <h3>Listado de tanques registrados</h3>
        <hr>
        <div>
          <form action="" class="tanque-buscador">
          <input type="text" class="input-buscador" id="" placeholder="nombre del tanque" required=""/>
          <button class="primer-btn">Buscar</button>
          </form>
          <br>
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
    </section>
        `;
        return $tanques;
}