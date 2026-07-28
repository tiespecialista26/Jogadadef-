// ==========================================
// JOGADA DE FÉ
// script.js
// ==========================================

// Ano automático no rodapé
const ano = document.getElementById("ano");

if (ano) {
    ano.textContent = new Date().getFullYear();
}

// Destacar menu da página atual
const links = document.querySelectorAll("nav a");

links.forEach(link => {

    if (link.href === window.location.href) {

        link.classList.add("ativo");

    }

});

// Animação ao rolar a página

const elementos = document.querySelectorAll("section");

const aparecer = () => {

    elementos.forEach(secao => {

        const topo = secao.getBoundingClientRect().top;

        if (topo < window.innerHeight - 120) {

            secao.classList.add("mostrar");

        }

    });

};

window.addEventListener("scroll", aparecer);

aparecer();

// Efeito no menu

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 80) {

        header.classList.add("menu-scroll");

    } else {

        header.classList.remove("menu-scroll");

    }

});

// Botão WhatsApp

const whatsapp = document.querySelector(".whatsapp");

if (whatsapp) {

    whatsapp.addEventListener("mouseenter", () => {

        whatsapp.style.transform = "scale(1.1)";

    });

    whatsapp.addEventListener("mouseleave", () => {

        whatsapp.style.transform = "scale(1)";

    });

}