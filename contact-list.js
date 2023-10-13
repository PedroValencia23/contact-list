const express = require('express');
const server = express();
const port = 8080


const listaDeContactos = [
  "Dayana Altamar",
  "Javier Montoya",
  "Ruth Triana",
  "Pedro Valencia",
];


function agregarContacto(nombreCompleto) {
  listaDeContactos.push(nombreCompleto);
}


function borrarContacto(nombreCompleto) {
  const index = listaDeContactos.indexOf(nombreCompleto);
  if (index !== -1) {
    listaDeContactos.splice(index, 1);
  }
}

function imprimirContactos() {
  console.log("Lista de Contactos:");
  listaDeContactos.forEach((contacto, index) => {
    console.log(`${index + 1}. ${contacto}`);
  });
}


imprimirContactos(); 


agregarContacto("Laura Gómez"); 
imprimirContactos(); 

borrarContacto("Javier Montoya"); 
imprimirContactos(); 
