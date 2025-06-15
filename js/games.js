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

const searchHTML = document.querySelector("#search-name");

const gamesFormHTML = document.getElementById("games-form");

let gameDetailButtons;

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
                            <td class="price-cell">$ ${juego.price}</td>
                            <td class="action-cell">
                                <div class="buttons">
                                    <button class="button-icon" data-game-detail="${juego.id}" data-bs-target="#game-modal" data-bs-toggle="modal">
                                        <i class="fa-solid fa-eye"></i>
                                    </button>

                                    <button class="button-icon danger" onclick="borrarJuego(${juego.id})">
                                        <i class="fa-solid fa-trash-can"></i>
                                    </button>

                                </div>
                            </td>
                        </tr>
    `;
  });

  gameDetailButtons = document.querySelectorAll("button[data-game-detail]");

  gameDetailButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = event.currentTarget.dataset.gameDetail;

      const juego = games.find((game) => {
        if (game.id == id) {
          return true;
        }
      });

      const modalTitle = document.getElementById("game-modal-title");
      const modalBody = document.getElementById("game-modal-body");

      modalTitle.innerText = juego.name;
      modalBody.innerHTML = `<div class="row">
      <div class="col">
        <img src="${juego.image}" width="150px" height="150px">
      </div>
      <div class="col">
        <p>${juego.category}</p>
        <p>$ ${juego.price}</p>
      </div>
      
      </div>`;
    });
  });
}

pintarJuegos(games);

function ordenarPorPrecioAscendente() {
  const juegosAsc = games.toSorted((a, b) => {
    return a.price - b.price;
  });

  pintarJuegos(juegosAsc);
}

function ordenarPorPrecioDescendente() {
  const juegosDes = games.toSorted((a, b) => {
    return b.price - a.price;
  });

  pintarJuegos(juegosDes);
}

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

// function ordenarPorNombreAscendente() {

//   const juegosAsc = games.toSorted((a, b) => {
//     return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
//   });

//   pintarJuegos(juegosAsc);

// };

// function ordenarPorNombreDescendente() {

//   const juegosDes = games.toSorted((a, b) => {
//     return b.name.toLowerCase().localeCompare(a.name.toLowerCase());
//   });

//   pintarJuegos(juegosDes);

// };

function filtrarPorCategoria(eventito) {
  const categoria = eventito.target.value.toLowerCase();

  const juegosFiltrados = games.filter((juego) => {
    if (juego.category.toLowerCase() === categoria) {
      return true;
    }

    return false;
  });

  pintarJuegos(juegosFiltrados);
}

searchHTML.addEventListener("keyup", function (evt) {
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

gamesFormHTML.addEventListener("submit", (evt) => {
  // Función que se ejecuta al escuchar el evento onsubmit
  evt.preventDefault(); // Evita que se recargue la página al enviar el formulario
  console.log(evt.target.elements);

  const el = evt.target.elements;

  const newGame = {
    id: Date.now().toString().slice(-4), // Genera un id único basado en la fecha actual y se mantienen los últimos 4 dígitos
    name: el.name.value,
    price: el.price.valueAsNumber,
    category: el.category.value,
    image: el.image.value,
  };

  games.push(newGame); // Agrega el nuevo juego al array de juegos
  pintarJuegos(games); // Vuelve a pintar la tabla con el nuevo juego

  gamesFormHTML.reset(); // Limpia el formulario después de agregar el juego
});

function mostrarJuego(id) {}

// 1. Recibo el id para saber que juego borrar
function borrarJuego(idBorrar) {
  // 2. Busco la posición del juego en el array games usando findIndex
  const indice = games.findIndex((juego) => {
    if (juego.id === idBorrar) {
      return true;
    }
  });

  const borrar = confirm(`¿Estás seguro de borrar el juego?`);

  if (borrar) {
    // 3. Usamos splice para borrar, pero splice necesita un dato para saber que elemento borrarJuego, ese dato es la posición (indice)

    games.splice(indice, 1);

    pintarJuegos(games);
  }
}
