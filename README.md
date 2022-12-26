# <img src="https://pic.sopili.net/pub/emoji/twitter/2/72x72/1f933.png" width=20 height=20> Projeto BlogsAPI <img src="https://pic.sopili.net/pub/emoji/twitter/2/72x72/1f933.png" width=20 height=20>

  <summary>
    <h3> Descrição 📝</h3>
  </summary>
  Projeto feito durante o curso da <a href="https://www.betrybe.com/">Trybe</a> para testar os conhecimentos adquiridos.
  </br>
  APIRestful em Node.js de um CRUD completo de sistema de gerenciamento postagens em um blog utilizando MySQL como banco de dados </br>
  </br>
  <table>
    <tr>
      <td>Tecnologias Utilizadas</td>
    </tr>
    <tr>
      <td>
        <ul>
          <li>NodeJs</li>
          <li>Express</li>
          <li>JavaScript</li>
          <li>Sequelize</li>
          <li>Docker</li>
          <li>MySQL</li>
          <li>Mocha</li>
          <li>Sinnon</li>
          <li>Chai</li>
        </ul>
      </td>
    </tr>
  </table>
  
  <summary><h3>Projeto 🏆</h3></summary>
  
  #### 1. Rotas dos produtos:
   - Login - POST `/login`.
   - Cadastrar usuário - POST `/user`.
   - Cadastrar postagem - POST `/post`.
   - Cadastrar categoria - POST `/categories`
   - Lista todos os usuários ou apenas um especifico por Id - GET `/user` ou `/user/:id`.
   - Lista todos as postagens ou apenas um especifico por Id - GET `/post` ou `/post/:id`.
   - Lista todos as categorias - GET `/categories`.
   
   
  <summary><h3>Como rodar localmente 👨‍💻</h3></summary></br>
  
  ⚠️ Necessário Docker e Docker-Compose ⚠️

1) Clone o repositório

```bash
$ git clone git@github.com:Bielbcs/BlogsAPI.git
```

2) Suba os containers

```bash
$ docker-compose up -d
```

3) Entre no container

```bash
$ docker exec -it blogs_api bash
```

4) Instale as dependências

```bash
$ npm install
```

5) Crie e popule o banco

```bash
$ npm run prestart
$ npm run seed
```

6) Inicie a aplicação

```bash
$ npm run debug
```
 
### 📞 Entre em contato 📞
 
 <div align="center" margin="50px">
	  <a href = "mailto:bielcotrimsv@gmail.com"><img src="https://img.shields.io/badge/-Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
	<a href="https://github.com/Bielbcs" target="_blank"><img src="https://img.shields.io/badge/-GitHub-%23333?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a>
  	<a href="https://www.linkedin.com/in/gabriel-bernardo-541661220/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
</div>
 
