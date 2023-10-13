const listaDeContactos = [
  {
    id: 1,
    nombres: "Dayana",
    apellidos: "Altamar",
    telefono: "350-258-4560",
    ubicaciones: {
      ciudad: "Barranquilla",
      direccion: "Cra 15 #17-67"
    }
  },
  {
    id: 2,
    nombres: "Javier",
    apellidos: "Montoya",
    telefono: "321-678-6574",
    ubicaciones: {
      ciudad: "Medellin",
      direccion: "Transv 44 #100-20"
    }
  },
  {
    id: 3,
    nombres: "Ruth",
    apellidos: "Triana",
    telefono: "311-670-8891",
    ubicaciones: {
      ciudad: "Barranquilla",
      direccion: "Calle 87 #50-45"
    }
  }
];


function agregarContacto(contacto) {
  listaDeContactos.push(contacto);
}

function borrarContacto(id) {
  const index = listaDeContactos.findIndex((contacto) => contacto.id === id);
  if (index !== -1) {
    listaDeContactos.splice(index, 1);
  }
}


function imprimirContactos() {
  console.log("Lista de Contactos:");
  listaDeContactos.forEach((contacto, index) => {
    console.log(`${index + 1}. ${contacto.nombres} ${contacto.apellidos}`);
  });
}


imprimirContactos(); 

agregarContacto({
  id: 4,
  nombres: "Pedro",
  apellidos: "Valencia",
  telefono: "302-359-9834",
  ubicaciones: {
    ciudad: "Barranquilla",
    direccion: "Calle 94 #57-60"
  }
});


imprimirContactos(); 
borrarContacto(2); 
imprimirContactos(); 
