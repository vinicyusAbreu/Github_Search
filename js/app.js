import { github } from "./github.js";
import { ui } from "./ui.js";

const btn = document.querySelector('.btn-input');
const busca = document.querySelector('.input-busca');
const logo = document.querySelector('.logo');
const retorno = document.querySelector('.fa-arrow-left');
busca.focus()
btn.addEventListener('click', enviandoValores);
logo.addEventListener('click', retornaInicio);
retorno.addEventListener('click', retornaInicio);

function enviandoValores(e) {

    e.preventDefault();

    if (busca.value.trim()) {
        ui.addSpinner();

        github.pegarUsuario(busca.value).then(res => {
                if (!res) throw Error;

                const { perfil, repos, estrela } = res;

                ui.carregarusuario(perfil, estrela);
                ui.carregarRepositorios(repos)

            })
            .catch(erro => {
                setTimeout(() => {
                    ui.removeSpinner();
                    ui.mensagemErro();
                }, 1000);
            });
        busca.value = '';
    }
};

function retornaInicio(e) {
    e.preventDefault();

    ui.addSpinner();
    ui.limparCampos();

    setTimeout(() => {
        ui.removeSpinner();
        ui.retornoInicio();
    }, 1000);

}