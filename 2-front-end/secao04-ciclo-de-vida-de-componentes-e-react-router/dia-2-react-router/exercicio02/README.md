## Requisitos

## 1 - Criar duas rotas para a aplicação, a rota principal `/` e a rota `/about`

<details>
  <summary>Crie as duas primeiras rotas para a aplicação</summary><br />

- A rota `/` deve renderizar somente o componente `<Pokedex />`.
- Crie um componente chamado `About` e coloque um título `h1` com o texto `About Pokédex`.
- Crie a rota `/about` e renderize somente o componente `<About />`

</details>

## 2 - Criar a rota para a página que exibirá mais informações do Pokémon, adicionando o link para essa rota no card que exibe o Pokémon na página inicial

<details>
  <summary>Crie rota para a página que exibirá mais informações do Pokémon</summary><br />

- Crie a rota `/pokemon/{id}`, onde `{id}` será o `id` do Pokémon selecionado. Cada Pokémon possui um `id` na Pokédex e podemos usar essa informação como parâmetro de _URL_ para permitir que a aplicação consiga acessar detalhes de um pokémon específico.

> Por exemplo: o id do pokémon `Pikachu` é `25`.Com isso, para acessar a página de informações do `Pikachu`, devemos acessar a rota `/pokemon/25`.

- Crie o componente `<PokemonDetails />` e faça com que ele seja renderizado quando a rota `/pokemon/{id}` for acessada.
- Dentro do componente `<PokemonDetails />`, recupere a informação do parâmetro `id` passado pela _URL_.
- Exiba um título `h1` com o  texto `{nome-do-pokemon} details`, onde `nome-do-pokemon` é o nome do Pokémon que possui o `id` passado como parâmetro pela _URL_.

</details>

## 3 - Criar um link para o Pokémon que está sendo exibido na página inicial, direcionando a pessoa usuária para a página de detalhes desse Pokémon. Na página de detalhes, exiba todas as informações do respectivo Pokémon

<details>
  <summary>Crie um link para a página de detalhes do Pokémon que está sendo exibido</summary><br />

- Na página inicial, adicione um link dentro do card de informações do Pokémon que está sendo exibido. Este link deve direcionar para a página de informações do respectivo Pokémon por meio da rota `/pokemon/{id}`.
- O link deve ter o texto `Details`.
- Ao entrar na página do respectivo Pokémon, todas as informações do Pokémon devem ser exibidas:
  - o nome do Pokémon.

 > Observação: no requisito anterior foi pedido para que o nome fosse renderizado como título da página, e nesse requisito o nome precisa ser renderizado novamente junto com o restante das informações;

- o tipo do Pokémon;
- o peso e a respectiva unidade de medida;  
- a informação resumida sobre o Pokémon, essa  informação está presente na chave `summary` em cada objeto da lista de Pokémon.
- o(s) mapa(s) que mostra(m) as possíveis localizações do Pokémon, seu nomes e imagens. Informações presentes nas chaves `location` e `map`, dentro de um _array_ na chave `foundAt` presente em cada objeto da lista de Pokémon;
- cada mapa deve ser renderizado com dois elementos: uma imagem, que deve ter o atributo `src` prrenchido com o valor da propriedade  `map`; e um elemento de texto que deve renderizar o valor da propriedade `location`.

</details>
