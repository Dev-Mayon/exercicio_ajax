const usuarioGithub = 'Dev-Mayon';

fetch(`https://api.github.com/users/${usuarioGithub}`)
  .then(response => response.json())
  .then(dados => {
    document.getElementById('avatar').src = dados.avatar_url;
    document.getElementById('nome').textContent = dados.name || 'Sem nome';
    document.getElementById('usuario').textContent = dados.login;
    document.getElementById('repos').textContent = dados.public_repos;
    document.getElementById('seguidores').textContent = dados.followers;
    document.getElementById('seguindo').textContent = dados.following;
    document.getElementById('linkGithub').href = dados.html_url;
  })
  .catch(erro => {
    console.error("Erro ao buscar dados do GitHub:", erro);
    alert("Não foi possível carregar os dados do GitHub.");
  });

