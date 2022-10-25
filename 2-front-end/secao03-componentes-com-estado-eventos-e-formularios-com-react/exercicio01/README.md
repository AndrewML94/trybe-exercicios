<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

Você encontrará nesse repositório uma [pokédex](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9dex) que já está funcionando e exibindo uma lista de pokémon usando componentes React.

Sua missão será ~capturar todos os pokémon~ incrementar essa aplicação para que, além de componentes, também seja usado o estado do React, de forma que seja exibido apenas um pokémon por vez e que seja possível filtrar por tipo.

➡ Para percorrer por toda a lista, você deverá criar um botão chamado `Próximo pokémon` e fazer com que, ao clicar nele, um novo pokémon seja exibido.

➡ Além de percorrer a lista, você também deve desenvolver a lógica para filtrar pelo tipo do pokémon.

> 👀 **De olho na dica:** lembre-se que você pode utilizar os componentes já existentes e também criar novos, conforme achar necessário. Você também pode armazenar no estado do componente pai da aplicação o pokemon sobre o qual está iterando no momento e os filtros aplicados sobre a lista.

Depois de desenvolver os requisitos obrigatórios, você encontrará também alguns requisitos extras. Os requisitos extras não são avaliados pelo avaliador automático, mas você deve fazê-los se quiser  ~ganhar todas as insígnias pokémon~ aprender ainda mais sobre estados em React.

Abaixo, um exemplo da aplicação final, considerando inclusive os requisitos extras:

![Pokedex finalizada](images/pokedex.gif)

</details>

<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />

Neste exercício, verificamos se você é capaz de:

- Ler o estado de um componente e usá-lo para alterar o que exibimos no browser;

- Inicializar um componente, dando a ele um estado pré-definido;

- Atualizar o estado de um componente.

- Capturar eventos utilizando a sintaxe do React

</details>

# Requisitos

## 1 - Faça com que apenas um pokémon seja exibido;

## 2 - Crie um botão chamado `Próximo pokémon` para percorrer todos os pokémon da lista;

## 3 - Faça com que, quando o último pokémon da lista estiver sendo exibido, ao clicar no botão `Próximo pokémon` o primeiro pokémon da lista seja exibido novamente;

## 4 - Crie dois botões de filtro, de forma que, quando algum deles for clicado, apenas os pokémon do respectivo tipo filtrado sejam exibidos.


# Exercícios extras (não são testados pelo avaliador)

Agora que você ~capturou todos os pokémon~ terminou os requisitos obrigatórios, consegue vencer todos os requistos extras?!

<details>
  <summary>Separe os estilos de CSS por componente</summary><br />
  
- Faça um arquivo `.css` para cada componente da sua aplicação.

</details>

<details>
  <summary>Crie um botão chamado `All` para resetar o estado do filtro</summary><br />
  
- Ao clicar no botão "All", a pokédex deve voltar a circular por todos os pokémon.
- Quando a página for carregada, o filtro selecionado inicialmente deve ser o `All`.

</details>


<details>
  <summary>Caso ainda não tenha feito, crie um componente `Button`</summary><br />

- Faça com que todos os botões da aplicação utilizem esse componente.
- 💡Dica: pesquise sobre `this.props.children` no React.

</details>

<details>
  <summary>Faça os botões de filtro serem dinâmicos</summary><br />

- Faça com que um botão de filtragem seja exibido para cada tipo de pokémon disponível nos dados, independentemente de quantos sejam e sem repetição de tipos. Por exemplo: se na sua pokédex existirem  pokémon do tipo Fire, Psychic, Electric e Normal, sua aplicação deve exibir 4 botões de filtro (um para cada tipo) e também o botão "All". 

</details>

<details>
  <summary>Desabilite o botão `Próximo pokémon` se a lista filtrada tiver apenas um pokémon</summary><br />
  
- Se, depois de aplicar um filtro, a lista tiver apenas um pokémon, faça com que o botão `Próximo pokémon` fique desabilitado.

</details>