// import Swal from 'sweetalert2';
// const Swal = require('sweetalert2');
// import Swal from 'sweetalert2/dist/sweetalert2.js';

let paso = 1;
const pasoInicial = 1;
const pasoFinal = 3;

document.addEventListener("DOMContentLoaded", function () {
  iniciarApp();
  // animacion1();
  myFunction(x);
});

function iniciarApp() {
  mostrarSeccion();
  tabs(); // Cambia la secicon cuando se presionen los tabs
  bgc();
  // botonesPaginador(); // Agrega o saca los botones del paginador
  // paginaSiguiente();
  // paginaAnterior();
}

function mostrarSeccion() {
  const seccionAnterior = document.querySelector(".mostrar");
  if (seccionAnterior) {
    seccionAnterior.classList.remove("mostrar");
  }

  // Seleccionar la seccion con el paso
  const pasoSelector = `#paso-${paso}`;
  const seccion = document.querySelector(pasoSelector);
  seccion.classList.add("mostrar");

  // Quita la clase de actual al tab anterior
  const tabAnterior = document.querySelector(".actual");
  if (tabAnterior) {
    tabAnterior.classList.remove("actual");
  }

  // Resalta el tab actual
  const tab = document.querySelector(`[data-paso="${paso}"]`);
  tab.classList.add("actual");
}

function tabs() {
  const botones = document.querySelectorAll(".selector");

  botones.forEach((boton) => {
    boton.addEventListener("click", function (e) {
      paso = parseInt(e.target.dataset.paso);

      mostrarSeccion();
      bgc();
    });
  });
}

var x = window.matchMedia("(max-width: 1024px)");
function myFunction(x) {
  const nav3 = document.querySelector(".nav3");

  if (x.matches) {
    // If media query matches
    nav3.classList.remove("preparado");
  } else {
    // nav3.classList.add("preparado");

    // VanillaTilt.init(document.querySelectorAll(".caja-todos-datos"), {
    //   max: 20,
    //   speed: 100,
    // });
  }
}

function bgc() {
  const fondo = document.querySelectorAll(".fondo");
  const nav3 = document.querySelector(".nav3");

  fondo.forEach((titulo) => {
    if (paso === 1) {
      titulo.classList.add("primero");
      titulo.classList.remove("segundo", "tercero");

      nav3.classList.remove("preparado");
      nose();
    } else if (paso === 3) {
      titulo.classList.add("tercero");
      titulo.classList.remove("primero", "segundo");

      myFunction(x);
      nose();
    } else {
      titulo.classList.add("segundo");
      titulo.classList.remove("primero", "tercero");

      nav3.classList.remove("preparado");
      nose();
    }

    mostrarSeccion();
  });
}

function paginaAnterior() {
  const paginaAnterior = document.querySelector("#anterior");
  paginaAnterior.addEventListener("click", () => {
    if (paso <= pasoInicial) return;
    paso--;
    botonesPaginador();
  });
}

function paginaSiguiente() {
  const paginaSiguiente = document.querySelector("#siguiente");
  paginaSiguiente.addEventListener("click", () => {
    if (paso >= pasoFinal) return;
    paso++;
    botonesPaginador();
  });
}

//! marker nav

var marker = document.querySelector("#marker");
var item = document.querySelectorAll(".enlace");

function indicator(e) {
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
}

item.forEach((link) => {
  link.addEventListener("mousemove", (e) => {
    indicator(e.target);
  });
});

//! marker nav 2

var marker2 = document.querySelector("#marker2");
var item2 = document.querySelectorAll(".enlace");

function indicator2(e) {
  marker2.style.left = e.offsetLeft + "px";
  marker2.style.width = e.offsetWidth + "px";
}

item2.forEach((link2) => {
  link2.addEventListener("click", (e) => {
    indicator2(e.target);
  });
});

//! marker nav 3

var marker3 = document.querySelector("#marker3");
var item3 = document.querySelectorAll(".card");

function indicator3(e) {
  marker3.style.left = e.offsetLeft + "px";
  marker3.style.width = e.offsetWidth + "px";
}

item3.forEach((link3) => {
  link3.addEventListener("mousemove", (e) => {
    indicator3(e.target);
  });
});

//! marker nav 4 celular

var marker4 = document.querySelector("#marker4");
var item4 = document.querySelectorAll(".cardCel");

function indicator4(e) {
  marker4.style.top = e.offsetTop + "px";
  marker4.style.height = e.offsetHeight + "px";
}

item4.forEach((link4) => {
  link4.addEventListener("mousemove", (e) => {
    indicator4(e.target);
  });
});

//! idiomas

const idHtml = document.querySelector("#html");
const idCss = document.querySelector("#css");
const idJs = document.querySelector("#js");
const idPhp = document.querySelector("#php");

const html = document.querySelector(".html");
const css = document.querySelector(".css");
const js = document.querySelector(".js");
const php = document.querySelector(".php");

html.addEventListener("click", () => {
  css.classList.remove("activo");
  js.classList.remove("activo");
  php.classList.remove("activo");
});

css.addEventListener("click", () => {
  html.classList.remove("activo");
  js.classList.remove("activo");
  php.classList.remove("activo");
});

js.addEventListener("click", () => {
  html.classList.remove("activo");
  css.classList.remove("activo");
  php.classList.remove("activo");
});

php.addEventListener("click", () => {
  html.classList.remove("activo");
  css.classList.remove("activo");
  js.classList.remove("activo");
});

const svg = document.querySelectorAll(".svg");
svg.forEach((idioma) => {
  idioma.addEventListener("click", () => {
    idioma.classList.add("activo");
  });
});

//! cursor

const cursor = document.querySelector(".cursor1");
const card = document.querySelector("#card1");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

const cursor2 = document.querySelector(".cursor2");
const card2 = document.querySelector("#card2");

card2.addEventListener("mousemove", (e) => {
  cursor2.style.left = e.clientX + "px";
  cursor2.style.top = e.clientY + "px";
});

//! formulario

const cursor4 = document.querySelector(".cursor4");
const paso3 = document.querySelector("#paso-3");

document.addEventListener("mousemove", (e) => {
  cursor4.style.left = e.clientX + "px";
  cursor4.style.top = e.clientY + "px";
});

function nose() {
  const preparado = document.querySelector(".preparado");
  const fondo = document.querySelector(".fondo");

  const nav1 = document.querySelector(".nav1");
  const nav2 = document.querySelector(".nav2");
  const nav3 = document.querySelector(".nav3");

  if (preparado) {
    fondo.style.cursor = "none";
    document.body.style.cursor = "none";
    nav1.style.cursor = "none";
    nav2.style.cursor = "none";
    nav3.style.cursor = "none";
  } else {
    fondo.style.cursor = "default";
    document.body.style.cursor = "default";
    nav1.style.cursor = "pointer";
    nav2.style.cursor = "pointer";
    nav3.style.cursor = "pointer";
  }
}

//! form

const nombre = document.querySelector("#from_name");
const todoState = document.querySelector(".todo__state1");
nombre.addEventListener("input", () => {
  if (!nombre.validity.valid) {
    todoState.classList.remove("checkeado");
  } else {
    todoState.classList.add("checkeado");
  }
});

const email = document.querySelector("#mail_id");
const todoState2 = document.querySelector(".todo__state2");
email.addEventListener("input", () => {
  if (!email.validity.valid) {
    todoState2.classList.remove("checkeado");
  } else {
    todoState2.classList.add("checkeado");
  }
});

const celular = document.querySelector("#phone_id");
const todoState3 = document.querySelector(".todo__state3");
celular.addEventListener("input", () => {
  if (!celular.validity.valid) {
    todoState3.classList.remove("checkeado");
  } else {
    todoState3.classList.add("checkeado");
  }
});

const mensaje = document.querySelector("#message");
const todoState4 = document.querySelector(".todo__state4");
mensaje.addEventListener("input", () => {
  if (!mensaje.validity.valid) {
    todoState4.classList.remove("checkeado");
  } else {
    todoState4.classList.add("checkeado");
  }
});

function confetti() {
  $.each($(".particletext.confetti"), function () {
    var confetticount = ($(this).width() / 50) * 10;
    for (var i = 0; i <= confetticount; i++) {
      $(this).append(
        '<div class="particle c' +
          $.rnd(1, 2) +
          '" style="top:' +
          $.rnd(10, 50) +
          "%; left:" +
          $.rnd(0, 100) +
          "%;width:" +
          $.rnd(6, 8) +
          "px; height:" +
          $.rnd(3, 4) +
          "px;animation-delay: " +
          $.rnd(0, 30) / 10 +
          's;"></div>'
      );
    }
  });
}

const btn = document.getElementById('btn');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

  // const alerta = document.querySelector('.alerta');

   const serviceID = 'default_service';
   const templateID = 'template_k7p9dgf';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      
      Swal.fire({
        title: "Drag me!",
        icon: "success",
        draggable: true
      });

      const confirmado = document.querySelector('.swal2-confirm');
      const confirmadoContainer = document.querySelector('.swal2-container');

      confirmadoContainer.addEventListener("click", () => {
        location.reload();
      });
      confirmado.addEventListener("click", () => {
        location.reload();
      });
    }, () => {
      // alerta.classList.add('visible');
      // alerta.innerHTML += 'Error Sending :(';
      // history.replaceState(null, null, location.pathname);

      Swal.fire({
        icon: "error",
        title: "Error Sending",
        text: "Something went wrong!"
      });
      // location.reload();
    });
});

// const bubbles = document.querySelector('.bubbles').addEventListener('click', () => {
//   Swal.fire({
//     title: "Sending Succesfully!",
//     icon: "success",
//     draggable: true
//   });
// })

const alerta = document.querySelector('.visible');
const cerrar = document.querySelector('.cerrar');
cerrar.addEventListener("click", () => {
  // alerta.remove();
  alerta.classList.remove('visible');
});