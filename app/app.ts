import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();

const form = document.querySelector('.form');
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); //impedir o refresh
    controller.adiciona();
})

