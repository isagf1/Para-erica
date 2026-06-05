function entrar(){

    document.getElementById("entrada").style.display = "none";

    document.getElementById("conteudo").style.display = "block";

    document.getElementById("musica").play();

    escreverCarta();
}

const texto = `
Erica,

Talvez eu nunca consiga colocar em palavras tudo o que sinto.

Mas se existe algo que aprendi desde que você entrou na minha vida,
é que alguns encontros mudam o mundo de lugar.

Obrigado por cada conversa.
Obrigado por cada risada.
Obrigado por permanecer.

Entre todas as estrelas deste céu,
você continua sendo a minha favorita.

Eu te amo.

❤️
`;

let i = 0;

function escreverCarta(){

    const carta = document.getElementById("carta");

    const intervalo = setInterval(() => {

        carta.innerHTML += texto.charAt(i);

        i++;

        if(i >= texto.length){
            clearInterval(intervalo);
        }

    }, 40);
}

/* estrelas */

const stars = document.getElementById("stars");

for(let i = 0; i < 400; i++){

    const star = document.createElement("div");

    star.classList.add("star");

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay =
    Math.random() * 3 + "s";

    star.style.boxShadow =
    "0 0 10px white";

    stars.appendChild(star);
}

/* lightbox */

const imagens =
document.querySelectorAll(".galeria img");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightbox-img");

imagens.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = img.src;
    });

});

lightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});