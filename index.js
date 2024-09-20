const sim = window.document.getElementById("opcyes");
const nao = window.document.getElementById("opcNo");
const fundo = window.document.getElementById("area");
const resp = window.document.getElementById("textinho");
const gif = window.document.getElementById("gif");

nao.addEventListener("mouseenter", entrar);
let estado = -1;

function entrar() {
    estado++;
    if (estado == 0) {
        sim.style.transform = "translate(+95px)";
        nao.style.transform = "translate(130px, -150px)";
    }
    if (estado == 1) {
        nao.style.transform = "translate(130px, +150px)";
    }
    if (estado == 2) {
        nao.style.transform = "translate(-325px, +150px)";
    }
    if (estado == 3) {
        nao.style.transform = "translate(-325px, -150px)";
    }
    if (estado == 4) {
        nao.style.transform = "translate(+135px, +150px)";
    }
    if (estado == 5) {
        nao.style.transform = "translate(+135px, -150px)";
    }
    if (estado == 6) {
        nao.style.transform = "translate(-325px, +150px)";
    }
    if (estado == 7) {
        nao.style.transform = "translate(-325px, -150px)";
        estado = -1;
    }
}

sim.addEventListener("click", clicar);

function clicar() {
    // Esconde os botões
    sim.style.visibility = "hidden"; // Mantém o espaço
    nao.style.visibility = "hidden"; // Mantém o espaço

    // Mostra o GIF
    gif.style.display = "block";

    // Faz o GIF desaparecer e mostra os botões novamente após 3 segundos
    setTimeout(function() {
        gif.style.display = "none"; // Oculta o GIF
        sim.style.visibility = "visible"; // Torna os botões visíveis novamente
        nao.style.visibility = "visible"; // Mantém o alinhamento
    }, 3000);

    const texto = document.createElement('div');
    texto.innerText = "te amo, gari s2!";
    texto.style.position = "absolute";
    texto.style.top = "50%";
    texto.style.left = "50%";
    texto.style.transform = "translate(-50%, -50%)";
    texto.style.fontSize = "40px"; // Ajuste o tamanho conforme necessário
    texto.style.color = "white"; // Altere a cor conforme necessário
    texto.style.textAlign = "center";
    document.body.appendChild(texto);
}


function createCake() {
    const cake = document.createElement('img');
    cake.src = 'bolo.webp'; // Substitua pelo caminho da sua imagem de bolo
    cake.className = 'cake';
    
    // Defina uma posição horizontal aleatória
    const randomX = Math.random() * window.innerWidth;
    cake.style.left = `${randomX}px`;
    
    // Defina a duração da animação aleatoriamente
    const fallDuration = Math.random() * 3 + 2; // Dura de 2 a 5 segundos
    cake.style.animationDuration = `${fallDuration}s`;

    // Adicione o bolo ao contêiner
    document.getElementById('cakeRain').appendChild(cake);

    // Remova o bolo após a animação
    cake.addEventListener('animationend', () => {
        cake.remove();
    });
}

// Cria bolos a cada 500ms
setInterval(createCake, 500);
