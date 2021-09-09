"use strict";
//@ts-check
/**
 * creacion de las opciones que tendra el modulo dashboard
 * @returns {void} historial del modulo y funcionalidades
 */
export function Hilos(){
    const $hilos = document.createElement('div');
        $hilos.classList.add("pagina");
        $hilos.setAttribute('id',"pg1");
        $hilos.setAttribute('style',"display:block;")
        $hilos.innerHTML=`
        <section class="contenedor-muestras">
        <h3>Hilo de muestras</h3>
        <hr>
        <form action="" class="tanque-buscador">
          <input type="date" class="input-buscador" id="" placeholder="nombre del tanque" required=""/>
          <button class="primer-btn">Buscar</button>
        </form>
        <div>
        <h3>Hilo de muestras</h3>
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
        return $hilos;
}