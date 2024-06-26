//variáveis
const biscoito = document.querySelector("#biscoito")
const screen1 = document.querySelector("#screen1")
const screen2 = document.querySelector("#screen2")
const resetar = document.querySelector("#resetar")
let fraseBiscoito = document.querySelector("#fraseBiscoito")

const frases = ["A vida trará coisas boas se tiver paciência", "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.", 
        "Não compense na ira o que lhe falta na razão.", "Defeitos e virtudes são apenas dois lados da mesma moeda.", "A maior de todas as torres começa no solo.", 
        "Não há que ser forte. Há que ser flexível.", "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?", 
        "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida", "A juventude não é uma época da vida, é um estado de espírito.",
        "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.", "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos."   
]

//funções

function fraseAleatoria(frases) {
    let indiceAleatorio = Math.round(Math.random() * 10)
    fraseBiscoito.innerText = frases[indiceAleatorio]
}

function abrirBiscoito() {
    toggleTela()
    fraseAleatoria(frases)
}


function toggleTela() {
    screen2.classList.toggle("hide")
    screen1.classList.toggle("hide")
}

//eventos

biscoito.addEventListener("click", abrirBiscoito)
resetar.addEventListener("click", toggleTela)