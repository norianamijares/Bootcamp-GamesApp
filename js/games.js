const games = [
  {
    id: 2000,
    name: "Donkey Kong Country™ Returns HD",
    price: 169819,
    image:
      "https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/d7e15809208f425ab20caca6f40e3b6d_1024",
    category: "Action",
  },
  {
    id: 1000,
    name: "Super Mario Party™ Jamboree",
    price: 75200,
    category: "Board",
    image:
      "https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/49ff5c5e983d4a2a8682588179d496c5_1024",
  },
  {
    id: 3000,
    name: "Xenoblade Chronicles™ X",
    price: 79999,
    category: "Action",
    image:
      "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/software/switch/70010000088832/d33ed7f51de601b10cafa5814fd786bbad317b0421a43d54917a2c647be2f23b",
  },
  {
    id: 3150,
    name: "Luigi's Mansion™ 2 HD",
    price: 59999,
    category: "Adventure",
    image:
      "https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/776b97135e90471e88842504a56ee583_1024",
  },
  {
    id: 4000,
    name: "The Legend of Zelda™: Tears of the Kingdom",
    price: 41400,
    category: "Adventure",
    image:
      "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/software/switch/70010000063714/956c12eb1a4c9e68b494cca7efd23d20ba8a789a5eb02589affae64bc6bc3282",
  },
  
];

const tableBodyHTML = document.getElementById("table-body");

const searchHTML = document.querySelector('#name');

console.log(searchHTML);


function pintarJuegos(arrayJuegos) {

  tableBodyHTML.innerHTML = "";

  arrayJuegos.forEach((juego) => {

    console.log(juego.name);

    tableBodyHTML.innerHTML += `<tr>
                            <td class="image-cell">
                                <img src="${juego.image}" alt="" />
                            </td>
                            <td class="id-cell">${juego.id}</td>
                            <td class="name-cell">${juego.name}</td>
                            <td class="genre-cell">${juego.category}</td>
                            <td class="price-cell">${juego.price}</td>
                            <td class="action-cell">
                                <div class="buttons">
                                    <button class="button-icon">
                                        <i class="fa-solid fa-pencil"></i>
                                    </button>

                                    <button class="button-icon danger">
                                        <i class="fa-solid fa-trash-can"></i>
                                    </button>

                                </div>
                            </td>
                        </tr>
    `
  });
};

pintarJuegos(games);

function ordenarPorPrecioAscendente() {

  const juegosAsc = games.toSorted((a, b) => {
    return a.price - b.price;
  });

  pintarJuegos(juegosAsc);

};

function ordenarPorPrecioDescendente() {

  const juegosDes = games.toSorted((a, b) => {
    return b.price - a.price;
  });

  pintarJuegos(juegosDes);

};

// function ordenarPorPrecio(orden) {

//   // if(!orden) {
//   //   pintarJuegos(games);
//   //   return;
//   // }

//   const juegosOrdenados = games.toSorted((a, b) => {

//     if (orden === "desc") {
//       return b.price - a.price;
//     } else {
//       return a.price - b.price
//     };

//   });

//   pintarJuegos(juegosOrdenados);

//   // const juegosOrdenados = games.toSorted((a, b) => order === "des" ? b.price - a.price : a.price - b.price);
// }

function ordenarPorNombreAscendente() {

  const juegosAsc = games.toSorted((a, b) => {
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  });

  pintarJuegos(juegosAsc);

};

function ordenarPorNombreDescendente() {

  const juegosDes = games.toSorted((a, b) => {
    return b.name.toLowerCase().localeCompare(a.name.toLowerCase());
  });

  pintarJuegos(juegosDes);

};

function filtrarPorCategoria(eventito) {
  const categoria = eventito.target.value.toLowerCase();

  const juegosFiltrados = games.filter((juego) => {
    if (juego.category.toLowerCase() === categoria) {
      return true
    }

    return false
  });

  pintarJuegos(juegosFiltrados);
};

// searchHTML.addEventListener(tipoEvent, function() {Algo que voy a hacer cada vez que el evento se dispare});

searchHTML.addEventListener("keyup", function(evt) {
  const nombreJuegoABuscar = evt.target.value.toLowerCase();

  const juegosFiltradosPorNombre = games.filter((game) => {

    const nombreJuego = game.name.toLowerCase();

    return nombreJuego.includes(nombreJuegoABuscar);

    // if (nombreJuegoABuscar === game.name.toLowerCase()) {
    //   return true;
    // }

    // return false;
  });

  pintarJuegos(juegosFiltradosPorNombre);
});

