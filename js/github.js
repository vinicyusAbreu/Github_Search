class Github {
    constructor() {
        this.cliente_id = '11a69958d4359ed96584';
        this.cliente_secreto = '91941e1c396a1572c925bd9cb80e55c6c152a8d4';

        this.repos_sort = 'created: asc';
    }

    async pegarUsuario(user) {

        try {
            const perfilResposta = await fetch(`https://api.github.com/users/${user}?client_id=${this.cliente_id}&client_secret=${this.cliente_secreto}`);



            if (!perfilResposta.ok) throw Error('Erro de requisição')


            const repoResposta = await fetch(`https://api.github.com/users/${user}/repos?per_page=''&sort=${this.repos_sort}&client_id=${this.cliente_id}&client_secret=${this.cliente_secreto}`);

            const estrelaResposta = await fetch(`https://api.github.com/users/${user}/starred`);



            const perfil = await perfilResposta.json();
            const repos = await repoResposta.json();
            const estrela = await estrelaResposta.json();


            return {
                perfil,
                repos,
                estrela
            }

        } catch (erro) {

            return false
        }
    }
}

export const github = new Github();