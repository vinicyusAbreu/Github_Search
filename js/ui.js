class UI {
    _buscaContainer = document.querySelector('.container-busca');
    _erroContainer = document.querySelector('.container-erro');
    _headerContainer = document.querySelector('header');
    _footerContainer = document.querySelector('footer');
    _spinnerContainer = document.querySelector('.spinner');
    _usuarioContainer = document.querySelector('.user');
    _repositorioContainer = document.querySelector('.repositorio');


    carregarusuario(usuario, estrela) {

        this._usuarioContainer.firstElementChild.innerHTML =

            `
        <div class="container-img-user">
                <img src="${usuario.avatar_url}" alt="">
            </div>

            <div class="container-info">
                <h2>${usuario.name || ''}</h2>
                <a href="${usuario.html_url}" target="_blank">@${usuario.login}</a>

                <div class="user-localizacao">
                    <span>
                    <img src="img/location.svg" alt="">
                    <p>${usuario.location || ''}</p>
                </span>

                    <span>
                    <img src="img/company.svg" alt="">
                    <p>${usuario.company || ''}
                    </p>
                </span>

                </div>

                <div class="user-info">

                    <span>
                    <img src="img/followers.svg" alt="">
                    <p>${usuario.followers}</p>
                </span>

                    <span>
                    <img src="img/following.svg" alt="">
                    <p>${usuario.following}</p>
                </span>

                    <span>
                    <img src="img/star.svg" alt="">
                    <p>${estrela.length}</p>
                </span>

                </div>

            </div>

            <div class="container-repositorio_user">
                <h3>Total Repositories</h3>
                <div class="user-repositorio">
                    <img src="/img/branch.svg" alt="">
                    <span>${usuario.public_repos}</span>
                </div>
            </div>
        `;
    }

    carregarRepositorios(repo) {

        let saida = '';


        repo.forEach(re => {
            saida += `

            <div class="box_repositorio ">

            <div class="conteudo_repositorio">
                <a href="${re.html_url}" target="_blank">
                    ${re.name}
                </a>
                <p>${re.description || ''}</p>
            </div>


            <div class="info_repositorio">
                <span>
                    <img src="img/star.svg" alt="">
                    <p>${re.stargazers_count}</p>
                </span>

                <span>
                    <img src="img/branch.svg" alt="">
                    <p>${re.forks}</p>
                </span>

                <span class="linguagem">
                    <i  class="far fa-file-code"></i>
                    <p>${re.language || ''}</p>
                </span>

                <a href="${re.html_url}" class="repo" target="_blank">

                    <img src="img/repository.svg" alt="">
                    <span>View</span>

                </a>

            </div>

        </div>

            `;


        });


        this._repositorioContainer.firstElementChild.innerHTML = saida;
        this._usuarioContainer.classList.remove('hidden');
        this._repositorioContainer.classList.remove('hidden');
        this._headerContainer.classList.remove('hidden');
        this._footerContainer.classList.remove('hidden');

        ui.removeSpinner();
    }

    mensagemErro() {
        this._headerContainer.classList.remove('hidden');
        this._erroContainer.classList.remove('hidden');
        this._footerContainer.classList.remove('hidden');

    }

    addSpinner() {
        this._buscaContainer.classList.add('hidden');
        this._spinnerContainer.classList.remove('hidden');
    }

    removeSpinner() {
        this._spinnerContainer.classList.add('hidden');
    }

    limparCampos() {

        this._usuarioContainer.classList.add('hidden')
        this._repositorioContainer.classList.add('hidden')

        this._footerContainer.classList.add('hidden')

        this._headerContainer.classList.add('hidden');
        this._erroContainer.classList.add('hidden');

    }
    retornoInicio() {
        this._buscaContainer.classList.remove('hidden');
    }

}

export const ui = new UI();