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