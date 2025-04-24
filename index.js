const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];
// ejercicio A //
pizzas.forEach((pizza) => {
  if (pizza.id % 2 === 0) {
    console.log(`La ${pizza.nombre} tiene un ID par (${pizza.id})`);
  } else {
    console.log(`La ${pizza.nombre} tiene un ID impar (${pizza.id})`);
  }
});
// ejercicio B //
const pizzaMenorA600 = pizzas.some(pizza => pizza.precio < 600);
console.log(pizzaMenorA600 ? "Sí,hay pizzas menores a $600" : "No hay pizzas menores a $600");
// ejercicio c //
pizzas.forEach(pizza => {
  console.log(`Pizza: ${pizza.nombre}\nPrecio: $${pizza.precio}`);
});
// ejercicio D //
pizzas.forEach(pizza => {
  console.log(`${pizza.nombre}:\n - ${pizza.ingredientes.join("\n - ")}`);
});
