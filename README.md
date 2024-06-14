# Boas vindas ao repositório do Trybe Futebol Clube!

<details>
<summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

  ![Exemplo app front](assets/front-example.png)

  O `TFC` é um site informativo sobre partidas e classificações de futebol! ⚽️

  No time de desenvolvimento do `TFC`, seu *squad* ficou responsável por desenvolver uma API (utilizando o método `TDD`) e também integrar *- através do docker-compose -* as aplicações para que elas funcionem consumindo um banco de dados.

  Nesse projeto, você vai construir **um back-end dockerizado utilizando modelagem de dados através do Sequelize**. Seu desenvolvimento deve **respeitar regras de negócio** providas no projeto e **sua API deve ser capaz de ser consumida por um front-end já provido nesse projeto**.

  O seu back-end deverá implementar regras de negócio para popular adequadamente a tabela disponível no front-end que será exibida para a pessoa usuária do sistema.

</details>

# Orientações

<details>
<summary><strong>🐳 Configuração Docker</strong></summary><br />

⚠️ **Crie os arquivos dockerfile:**

  - As pastas `frontend/` e `backend/` devem possuir um arquivo `Dockerfile` cada, configurados corretamente para a aplicação começar a rodar. Sem essa etapa concluída o _docker-compose_ não irá funcionar.
  - Neste projeto, **não utilizar** o comando [**USER**](https://docs.docker.com/engine/reference/builder/#user) e **não alterar o usuário** para `node`.
  - ⚠ Procure usar as boas práticas no _Dockerfile_. Para isso lembre-se dos casos de uso dos comandos [**RUN**, **ENTRYPOINT** e **CMD**.](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/5987fa2d-0d04-45b2-9d91-1c2ffce09862/day/da25fd46-8818-4234-8603-a442b047370f/lesson/93c74629-1ea8-4fbd-9c2a-5db417249348)

</details>

## Durante o desenvolvimento

Aqui você encontrará orientações e dicas que ajudarão muito no desenvolvimento do projeto. Sempre que tiver dúvidas ou bugs aparecerem, dê uma olhada aqui. 👀

<details>
 #### ⚠️ **Inicie seu `docker-compose` antes de testar localmente!** ⚠️

  Os testes vão utilizar a sua aplicação do compose para fazer as validações, portanto **é essencial que ela esteja funcionando corretamente** para que os testes passem!

  - Para isso, garanta que as aplicações, tanto do back, quanto do front-end, possuem arquivos `Dockerfile` válidos;
  - Utilize os scripts de apoio `npm run compose:up` / `npm run compose:down`, para facilitar a execução do seu *compose*.

</details>

<details id="informacoes-uteis">
  <summary><strong> 👀 Informações úteis </strong></summary><br />

  - Ao inicializar um Workspace na raiz do projeto, podem surgir alguns erros no TypeScript. Para garantir que o editor sincronize corretamente as configurações do `tsconfig.json`, é necessário iniciar um novo Workspace dentro do diretório `backend`. Sempre verifique se está utilizando o Workspace correto no VSCode quando algum erro de configuração do TypeScript for apresentado.

  - Ao rodar o comando `npm install` na pasta raiz do projeto você estará **instalando somente as dependências para rodar os requisitos do projeto**;
  - Cada diretório (frontend e backend) possui suas próprias dependências - você pode instalá-las de forma rápida rodando o comando `npm run install:apps` na pasta raiz do projeto, ou rodando `npm install` dentro de cada diretório;

</details>

# Sobre os Requisitos

Esse projeto é composto de 4 fluxos principais:
1. Teams (Times)
2. Users e Login (Pessoas Usuárias e Credenciais de acesso)
3. Matches (Partidas)
4. Leaderboards (Placares)

## Database
  - [Nessa seção](#sequelize) temos o diagrama de entidades;
  - **Não exclua** o arquivo `/app/backend/src/database/migrations/99999999999999-create-z.ts`, pois ele é necessário para a avaliação dos requisitos dessa seção;

## Fluxo 1: Teams (Times)

<details>
  <summary><strong> Introdução </strong></summary>

 - Os requisitos a seguir consideram o consumo da rota `/teams` para retornar os nomes dos times associados à partida na renderização do front-end

</details>

<details>
  <summary><strong> Requisitos </strong></summary>

### 1 - Desenvolva em `/app/backend/src/database` nas pastas correspondentes, uma migration e um model para a tabela de times

  - O avaliador consultará os dados da tabela `teams`, verificando se ela contém os dados iniciais corretos. [Nessa seção](#sequelize) temos o diagrama de entidades.

### 2 - (`TDD`) Desenvolva testes que cubram no mínimo 5 por cento dos arquivos em `/app/backend/src`, com um mínimo de 7 linhas cobertas

  **Sugestões:**
  - Baseando-se no contrato do endpoint `/teams` **do próximo requisito**, inicie um teste de integração utilizando a metodologia `TDD` com a implementação do requisito seguinte;
  - Nesse primeiro momento, foque em desenvolver o que pede o requisito, progredindo gradualmente a partir disso;
  - Para tanto, utilize/altere o arquivo de referência `app/backend/src/tests/change.me.test.ts`;
  - Veja a seção [Executando testes com Mocha](./FAQ.md#testes-integracao) para mais detalhes.

### 3 - Desenvolva o endpoint `/teams` no back-end de forma que ele possa retornar todos os times corretamente

  - Deve ser uma rota `GET` com resposta com status `200` e com um `json` contendo o retorno no seguinte modelo:

```json
[
  {
    "id": 1,
    "teamName": "Avaí/Kindermann"
  },
  {
    "id": 2,
    "teamName": "Bahia"
  },
  {
    "id": 3,
    "teamName": "Botafogo"
  },
  ...
]
```

### 4 - (`TDD`) Desenvolva testes que cubram no mínimo 10 por cento dos arquivos em `/app/backend/src`, com um mínimo de 19 linhas cobertas

  **Sugestão:**
  - Evolua os testes de integração da sua rota `/teams`, utilizando o método `TDD`, agora considerando **o contrato do próximo requisito**.

### 5 - Desenvolva o endpoint `/teams/:id` no back-end de forma que ele possa retornar dados de um time específico

  - Deve ser uma rota `GET` com resposta com status `200` e com um `json` contendo o retorno no seguinte modelo:

```json
{
  "id": 5,
  "teamName": "Cruzeiro"
}
```

</details>

## Fluxo 2: Users e Login (Pessoas Usuárias e Credenciais de acesso)

<details>
  <summary><strong> Introdução </strong></summary>

- A rota utilizada deve ser (`/login`);

- A rota deve receber os campos `email` e `password` e esses campos devem ser validados no banco de dados:
  - O campo `email` deve receber um email válido. Ex: `tfc@projeto.com`;
  - O campo `password` deve ter mais de 6 caracteres.
  - Além de válidos, é necessário que o email e a senha estejam cadastrados no banco para ser feito o login;

- O body da requisição deve conter o seguinte formato:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```

</details>

<details>
  <summary><strong> Requisitos </strong></summary>

### 6 - Desenvolva em `/app/backend/src/database` nas pastas correspondentes, uma migration e um model para a tabela de pessoas usuárias

  - O avaliador consultará os dados da tabela `users`, verificando se ela contém os dados iniciais corretos. [Nessa seção](#sequelize) temos o diagrama de entidades;

### 7 - (`TDD`) Desenvolva testes que cubram no mínimo 15 por cento dos arquivos em `/app/backend/src`, com um mínimo de 25 linhas cobertas

  **Sugestão:**
  - Baseando-se no contrato do endpoint `/login` **do próximo requisito**, inicie um teste de integração utilizando a metodologia `TDD` com a implementação do requisito seguinte;

### 8 - Desenvolva o endpoint `/login` no back-end de maneira que ele permita o acesso com dados válidos no front-end

  - A rota de ser do tipo `POST`;

  - O avaliador verificará se é possível fazer o login com dados corretos e que, após o acesso, será redirecionado para a tela de jogos.

  - O endpoint `/login` no back-end não deve permitir o acesso sem informar um email no front-end

  - O endpoint `/login` no back-end não deve permitir o acesso sem informar uma senha no front-end

  - As senhas que existem no banco de dados estão encriptadas. Veja a [seção de Criptografia de Senhas](#criptografia-de-senhas) para mais detalhes de como comparar a senha do banco com a senha do corpo da requisição.

  - Se o login foi feito com sucesso, o resultado retornado deverá ser similar ao exibido abaixo, com um status http `200`:

    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjU0NTI3MTg5fQ.XS_9AA82iNoiVaASi0NtJpqOQ_gHSHhxrpIdigiT-fc" // Aqui deve ser o token gerado pelo backend.
    }
    ```

  - O avaliador verificará se ao fazer o login sem um email, haverá o retorno de status _bad request_.

  - Se o login não tiver o campo "email", o resultado retornado deverá ser a mensagem abaixo, com um status http `400`:

    ```json
    { "message": "All fields must be filled" }
    ```

  - O avaliador verificará se fazer login sem senha, o retorno será status _bad request_.

  - Se o login não tiver o campo "password", o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:

    ```json
    { "message": "All fields must be filled" }
    ```

### 9 - (`TDD`) Desenvolva testes que cubram no mínimo 20 por cento dos arquivos em `/app/backend/src`, com um mínimo de 35 linhas cobertas

  **Sugestão:**
  - Evolua os testes de integração da sua rota `/login`, utilizando o método `TDD`, agora considerando **o contrato do próximo requisito**.

### 10 - Desenvolva o endpoint `/login` no back-end de maneira que ele não permita o acesso com um email não cadastrado ou senha incorreta no front-end

- Se o login tiver o "email" **inválido** ou a "senha" **inválida**, o resultado retornado será similar ao exibido abaixo, com um status http `401`:

  ```json
    { "message": "Invalid email or password" }
  ```

- Sendo emails inválidos:
  - Emails com formato inválido: `@exemplo.com`, `exemplo@exemplo`, `exemplo@.com`, `exemplo.exemplo.com`;
  - Emails com formato válido, mas não cadastrados no banco;
- Sendo senhas inválidas:
  - Senhas com formato inválido: com um tamanho **menor** do que `6 caracteres`;
  - Senhas com formato válido, mas não cadastradas no banco;

### 11 - (`TDD`) Desenvolva testes que cubram no mínimo 30 por cento dos arquivos em `/app/backend/src`, com um mínimo de 45 linhas cobertas

  **Sugestão:**
- Baseando-se no contrato do endpoint `/login/role` **do próximo requisito**, inicie um teste de integração utilizando a metodologia TDD com a implementação do requisito seguinte;

### 12 - Desenvolva um middleware de validação para o `token`, verificando se ele é válido, e desenvolva o endpoint `/login/role` no back-end de maneira que ele retorne os dados corretamente no front-end

  - Deve ser uma rota `GET` que receba um `header` com parâmetro `authorization`, onde ficará armazenado o token gerado no login;

  - Será validado na API que não é possível retornar um objeto com o tipo de usuário, sem um token;

  - Caso o token não seja informado, deve-se retornar, com um status `401`, a seguinte mensagem:

  ```json
  { "message": "Token not found" }
  ```

  - Será validado na API que não é possível retornar um objeto com o tipo de usuário, com um token inválido

  - Caso o token informado não seja válido, deve-se retornar, com um status `401`, a seguinte mensagem:

  ```json
  { "message": "Token must be a valid token" }
  ```

  - O avaliador verificará se ao tentar bater na rota com um token válido, o mesmo retornará o tipo de usuário.

  A resposta deve ser de status `200` com um `objeto` contendo a `role` do *user*:
  ```json
    { "role": "admin" }
  ```

</details>

## Fluxo 3: Matches (Partidas)

<details>
  <summary><strong> Introdução </strong></summary>

  - Para os requisitos de criação de partidas, será necessário implementar o model e algumas rotas relacionadas a entidade Match.

  - A partir do **requisito 17** até o **requisito 21** serão feitas validações de token:

    - Caso o token não seja informado, deve-se retornar, com um status `401`, a seguinte mensagem:

      ```json
      { "message": "Token not found" }
      ```

  - Será validado que não é possível alterar uma partida com um token inválido;

    - Caso o token informado não seja válido, deve-se retornar, com um status `401`, a seguinte mensagem:

      ```json
      { "message": "Token must be a valid token" }
      ```

</details>

<details>
  <summary><strong> Requisitos </strong></summary>

### 13 - Desenvolva em `/app/backend/src/database` nas pastas correspondentes, uma migration e um model para a tabela de partidas

- O avaliador consultará os dados da tabela `matches`, verificando se ela contém os dados iniciais corretos. [Nessa seção](#sequelize) temos o diagrama de entidades.

### 14 - (`TDD`) Desenvolva testes que cubram no mínimo 45 por cento dos arquivos em `/app/backend/src`, com um mínimo de 70 linhas cobertas

  **Sugestão:**

- Crie um novo teste de integração, agora da sua rota `/matches`, utilizando o método `TDD`, considerando **os contratos dos próximos requisitos**.

### 15 - Desenvolva o endpoint `/matches` de forma que os dados apareçam corretamente na tela de partidas no front-end

- A rota deve ser um `GET` e retorna uma lista de partidas;

- Será validado que a página apresentará todos os dados de partidas sem nenhum filtro.

    Exemplo de retorno:

    ```json
    [
      {
        "id": 1,
        "homeTeamId": 16,
        "homeTeamGoals": 1,
        "awayTeamId": 8,
        "awayTeamGoals": 1,
        "inProgress": false,
        "homeTeam": {
          "teamName": "São Paulo"
        },
        "awayTeam": {
          "teamName": "Grêmio"
        }
      },
      ...
      {
        "id": 41,
        "homeTeamId": 16,
        "homeTeamGoals": 2,
        "awayTeamId": 9,
        "awayTeamGoals": 0,
        "inProgress": true,
        "homeTeam": {
          "teamName": "São Paulo"
        },
        "awayTeam": {
          "teamName": "Internacional"
        }
      }
    ]
    ```

- **OBS:** Você deverá definir os relacionamentos para ```homeTeam``` e ```awayTeam``` somente na model de partidas.

### 16 - Desenvolva o endpoint `/matches` de forma que seja possível filtrar somente as partidas em andamento, e também filtrar somente as partidas finalizadas, na tela de partidas do front-end

  - A rota deverá ser do tipo `GET` e retornar uma lista de partidas filtradas;

  - Será validado que, ao escolher a opção de partidas em andamento, serão filtradas todas as partidas em andamento;

  - Essa requisição deverá usar `query string` para definir o parâmetro:
    ex: `/matches?inProgress=true`

  Exemplo de retorno da requisição:
  ```json
  [
    {
      "id": 41,
      "homeTeamId": 16,
      "homeTeamGoals": 2,
      "awayTeamId": 9,
      "awayTeamGoals": 0,
      "inProgress": true,
      "homeTeam": {
        "teamName": "São Paulo"
      },
      "awayTeam": {
        "teamName": "Internacional"
      }
    },
    {
      "id": 42,
      "homeTeamId": 6,
      "homeTeamGoals": 1,
      "awayTeamId": 1,
      "awayTeamGoals": 0,
      "inProgress": true,
      "homeTeam": {
        "teamName": "Ferroviária"
      },
      "awayTeam": {
        "teamName": "Avaí/Kindermann"
      }
    }
  ]
  ```

  - Será validado que, ao escolher a opção de partidas finalizadas, serão filtradas todas as partidas finalizadas;

  - Essa requisição deverá usar `query string` para definir o parâmetro.
    ex: `/matches?inProgress=false`

  Exemplo de retorno da requisição:
  ```json
  [
    {
      "id": 1,
      "homeTeamId": 16,
      "homeTeamGoals": 1,
      "awayTeamId": 8,
      "awayTeamGoals": 1,
      "inProgress": false,
      "homeTeam": {
        "teamName": "São Paulo"
      },
      "awayTeam": {
        "teamName": "Grêmio"
      }
    },
    {
      "id": 2,
      "homeTeamId": 9,
      "homeTeamGoals": 1,
      "awayTeamId": 14,
      "awayTeamGoals": 1,
      "inProgress": false,
      "homeTeam": {
        "teamName": "Internacional"
      },
      "awayTeam": {
        "teamName": "Santos"
      }
    }
  ]
  ```

### 17 - Desenvolva o endpoint `/matches/:id/finish` de modo que seja possível finalizar uma partida no banco de dados

- A rota deve ser do tipo `PATCH`;

- Será recebido o `id` pelo parâmetro da URL;

- Será validado que não é possível alterar uma partida sem um token;

  - Confira a resposta esperada na introdução dessa seção.

- Será validado que, ao finalizar uma partida, a alteração é feita no banco de dados e na página.

- Deve-se retornar, com um status `200`, a seguinte mensagem:

  ```json
  { "message": "Finished" }
  ```

### 18 - Desenvolva o endpoint `/matches/:id` de forma que seja possível atualizar partidas em andamento

- O endpoint deve ser do tipo `PATCH`;

- Será recebido o `id` pelo parâmetro da URL;

- Será validado que não é possível alterar uma partida sem um token;

- Será avaliado que é possível alterar o resultado de uma partida.

- O corpo da requisição terá o seguinte formato:

  ```json
  {
    "homeTeamGoals": 3,
    "awayTeamGoals": 1
  }
  ```

- Será avaliado que o endpoint responde à requisição com um status `200` e qualquer corpo.

### 19 - (`TDD`) Desenvolva testes que cubram no mínimo 60 por cento dos arquivos em `/app/backend/src`, com um mínimo de 80 linhas cobertas

  **Sugestão:**
  - Crie um novo teste de integração, agora da sua rota `/matches`, utilizando o método `TDD`, agora considerando **os contratos dos próximos requisitos**.

### 20 - Desenvolva o endpoint `/matches` de modo que seja possível cadastrar uma nova partida em andamento no banco de dados

- A rota deverá ser do tipo `POST` e retornar a partida inserida no banco de dados;

- Será validado que não é possível inserir uma partida sem um token;

- Será validado que é possível salvar um jogo no banco de dados e ver o jogo na página de jogos;

- O corpo da requisição terá o seguinte formato:

  ```json
  {
    "homeTeamId": 16, // O valor deve ser o id do time
    "awayTeamId": 8, // O valor deve ser o id do time
    "homeTeamGoals": 2,
    "awayTeamGoals": 2
  }
  ```

- Caso a partida seja inserida com sucesso, deve-se retornar os dados da partida, com _status_ `201`:

  ```json
  {
    "id": 1,
    "homeTeamId": 16,
    "homeTeamGoals": 2,
    "awayTeamId": 8,
    "awayTeamGoals": 2,
    "inProgress": true
  }
  ```

### 21 - Desenvolva o endpoint `/matches` de forma que não seja possível inserir uma partida com times iguais nem com um time que não existe na tabela de times

  - Será validado que não é possível inserir uma partida em que o `homeTeam` e o `awayTeam` sejam iguais, por exemplo: Barcelona x Barcelona;

  - Caso isso ocorra, deve-se retornar, com um status `422`, a seguinte mensagem:

  ```json
  { "message": "It is not possible to create a match with two equal teams" }
  ```

  - Será validado que não é possível inserir uma partida com um time que não existe na tabela teams;

  - Caso algum dos times não esteja cadastrado no banco de dados, deve-se retornar, com um status `404,` a seguinte mensagem:

  ```json
  { "message": "There is no team with such id!" }
  ```

</details>

## Fluxo 4: Leaderboards (Placares)

<details>
  <summary><strong> Introdução </strong></summary>

  ▶️ Para construir a classificação dos times, devem ser seguidas as seguintes regras de negócios:

    - `Classificação`: Posição na classificação;
    - `Time`: Nome do time;
    - `P`: Total de Pontos;
    - `J`: Total de Jogos;
    - `V`: Total de Vitórias;
    - `E`: Total de Empates;
    - `D`: Total de Derrotas;
    - `GP`: Gols marcados a favor;
    - `GC`: Gols sofridos;
    - `SG`: Saldo total de gols;
    - `%`: Aproveitamento do time.

  - Todas as regras de negócio e cálculos necessários deverão ser realizados no seu back-end. A aplicação front-end - que já está pronta - apenas renderizará essas informações.

  - Para calcular o `Total de Pontos`, você deve levar em consideração que:

    - O time `vitorioso`: marcará +3 pontos;
    - O time `perdedor`: marcará 0 pontos;
    - Em caso de `empate`: ambos os times marcam +1 ponto.

  - Para o campo `Aproveitamento do time (%)`, que é a porcentagem de jogos ganhos, use a seguinte fórmula: `[P / (J * 3)] * 100`, onde:

    - `P`: Total de Pontos;
    - `J`: Total de Jogos.

    Obs.: O seu resultado deverá ser limitado a `duas casas decimais`.

  - Para calcular `Saldo de Gols` use a seguinte fórmula: `GP - GC`, onde:

    - `GP`: Gols marcados a favor;
    - `GC`: Gols sofridos.

  - O resultado deverá ser ordenado sempre de forma decrescente, levando em consideração a quantidade de pontos que o time acumulou. Em caso de empate no `Total de Pontos`, você deve levar em consideração os seguintes critérios para desempate:

  **Ordem para desempate**

  - 1º Total de Vitórias;
  - 2º Saldo de gols;
  - 3º Gols a favor;


  ⚠️ **Atenção:** ⚠️

  - Por padrão, as respostas de todos os seus endpoints deverão estar em inglês, mesmo que a renderização no front-end seja em português.
  - A sua tabela deverá renderizar **somente** as PARTIDAS que já foram FINALIZADAS!
**Os seguintes pontos serão avaliados:**

  ```
  - Se a lista de classificação está correta;
  - Se a regra de classificação se mantém mesmo com mudanças na classificação;
  - Se a tabela de classificação tem 10 colunas;
  - Se a tabela tem uma linha para cada time.
  ```

</details>

<details>
  <summary><strong> Requisitos </strong></summary>


### 22 - (`Bônus`; `TDD`) Desenvolva testes que cubram no mínimo 80 por cento dos arquivos em `/app/backend/src`, com um mínimo de 100 linhas cobertas

  **Sugestão:**
  - Crie os testes de integração para a rota `/leaderboard`, utilizando o método `TDD`, agora considerando **o contrato dos próximos requisitos**.

## Leaderboard Home

 ### 23 - Desenvolva o endpoint `/leaderboard/home` de forma que retorne as informações do desempenho dos times da casa com as seguintes propriedades: `name`, `totalPoints`, `totalGames`, `totalVictories`, `totalDraws`, `totalLosses`, `goalsFavor` e `goalsOwn`

 - O endpoint deverá ser do tipo `GET`;

  - Será avaliado que ao fazer a requisição ao endpoint `/leaderboard/home` serão retornados os campos e valores corretos, considerando os dados iniciais do banco de dados;

  - **Não** será avaliada a ordenação dos dados;

  - Partidas que estiverem em andamento (não foram finalizadas) não devem ser consideradas.

### 24 - Desenvolva o endpoint `/leaderboard/home` de forma que seja possível filtrar as classificações dos times da casa na tela de classificação do front-end com os dados iniciais do banco de dados, incluindo as propriedades `goalsBalance` e `efficiency`, além das propriedades do requisito anterior

  - O endpoint deverá ser do tipo `GET`;

  - Será avaliado que ao fazer a requisição ao endpoint `/leaderboard/home` serão retornados os campos e valores corretos, considerando os dados iniciais do banco de dados;

  - Será avaliado se os dados estão ordenados conforme as regras de negócio definidas na [Introdução do fluxo 4](#fluxo-4-leaderboards-placares);

  - Partidas que estiverem em andamento (não foram finalizadas) não devem ser consideradas.

### 25 - Desenvolva o endpoint `/leaderboard/home` de forma que seja possível filtrar as classificações dos times da casa na tela de classificação do front-end, e atualizar a tabela ao inserir a partida Corinthians 2 X 1 Internacional

  - Será avaliado que após acrescentar a partida Corinthians 2 X 1 Internacional e fazer a requisição ao endpoint `/leaderboard/home`, serão retornados os campos e valores corretos.

  - Será avaliado se os dados estão ordenados conforme as regras de negócio definidas na [Introdução do fluxo 4](#fluxo-4-leaderboards-placares);

## Leaderboard away

### 26 - Desenvolva o endpoint `/leaderboard/away` de forma que retorne as informações do desempenho dos times visitantes com as seguintes propriedades: `name`, `totalPoints`, `totalGames`, `totalVictories`, `totalDraws`, `totalLosses`, `goalsFavor` e `goalsOwn`

 - O endpoint deverá ser do tipo `GET`;

  - Será avaliado que ao fazer a requisição ao endpoint `/leaderboard/away` serão retornados os campos e valores corretos, considerando os dados iniciais do banco de dados;

  - **Não** será avaliada a ordenação dos dados;

  - Partidas que estiverem em andamento (não foram finalizadas) não devem ser consideradas.

### 27 - Desenvolva o endpoint `/leaderboard/away`, de forma que seja possível filtrar as classificações dos times quando visitantes na tela de classificação do front-end, com os dados iniciais do banco de dados, incluindo as propriedades `goalsBalance` e `efficiency`, além das propriedades do requisito anterior

  - O endpoint deverá ser do tipo `GET`;

  - Será avaliado que ao fazer a requisição ao endpoint `/leaderboard/away`, serão retornados os campos e valores corretos considerando os dados iniciais do banco de dados;

  - Partidas que estiverem em andamento (não foram finalizadas) não devem ser consideradas.

  - Será avaliado se os dados estão ordenados conforme as regras de negócio definidas na [Introdução do fluxo 4](#fluxo-4-leaderboards-placares);

### 28 - Desenvolva o endpoint `/leaderboard/away` de forma que seja possível filtrar as classificações dos times quando visitantes na tela de classificação do front-end e atualizar a tabela ao inserir a partida Corinthians 2 X 1 Internacional

  - Será avaliado que após acrescentar a partida Corinthians 2 X 1 Internacional e fazer a requisição ao endpoint `/leaderboard/away`, serão retornados os campos e valores corretos.

- Será avaliado se os dados estão ordenados conforme as regras de negócio definidas na [Introdução do fluxo 4](#fluxo-4-leaderboards-placares);

## Leaderboard

### 29 - Desenvolva o endpoint `/leaderboard` de forma que seja possível filtrar a classificação geral dos times na tela de classificação do front-end com os dados iniciais do banco de dados

  - O endpoint deverá ser do tipo `GET`;

  - Será avaliado que ao fazer a requisição ao endpoint `/leaderboard`, serão retornados os campos e valores corretos considerando os dados iniciais do banco de dados.

  - Partidas que estiverem em andamento (não foram finalizadas) não devem ser consideradas.

### 30 - (`Bônus`) Desenvolva o endpoint `/leaderboard` de forma que seja possível filtrar a classificação geral dos times na tela de classificação do front-end e atualizar a tabela ao inserir a partida Flamengo 3 X 0 Napoli-SC

  - Será avaliado que após acrescentar a partida Flamengo 3 X 0 Napoli-SC e fazer a requisição ao endpoint /leaderboard, serão retornados os campos e valores corretos.
