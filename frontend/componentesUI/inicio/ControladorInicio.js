"use strict";
//@ts-check
/**
 * Clase de peticiones http
 * @module peticionInicio - clase handler
 * @author autor 
 * @copyright - ksksue
 * @version 1.0
 */
class PeticionInicio {
    constructor(){
        this.url ='http://localhost:3000/api/v1/inicio';
    }
    obtnerEncabezado(){
        return{
            "Content-type":"application/json"
        }
    }
    hacerPeticion(peticion,params,tipopeticion){
        return new Promise((resolve,reject)=>{
            console.log('enviando parametros')
            fetch(this.url + (peticion ||''),{
                headers: this.obtnerEncabezado(),
                method: tipopeticion,
                body: tipopeticion !== 'GET' ? JSON.stringify(params): null
            })
            .then((response)=>{
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response
            })
            .then(response =>{
                return response.json();
            }).then(data =>{
                resolve(data);
            })
            .catch(error=>{
                console.log('request error',error);
                reject(new Error(error));
            })
        })
    }
}

export default PeticionInicio;