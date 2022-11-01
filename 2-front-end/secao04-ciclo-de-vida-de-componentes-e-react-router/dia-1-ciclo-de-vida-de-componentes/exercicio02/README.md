# Requisitos

## 1. Crie uma aplicação que consuma a API de fotos aleatórias de cachorros

Nesse exercício você deve desenvolver uma aplicação React que fará requisições para uma API externa, a `dog.ceo` no endpoint https://dog.ceo/api/breeds/image/random para recuperar imagens de doguinhos. Todo seu código deverá ser implementado no `App.js`. 

Ao utilizar essa aplicação uma pessoa usuária deverá ser capaz de:

- Fazer uma requisição para a API (endpoint: https://dog.ceo/api/breeds/image/random), para recuperar imagens de doguinhos aleatórios.

- Visualizar uma foto aleatória de um doguinho assim que a página for montada.

- Na primeira vez em que a página carrega, o texto "Loading..." deve ser a única coisa presente na tela.

- Ao receber o retorno da requisição, uma imagem deve ser renderizada com a URL recebida da API. Essa imagem deve ter o atributo `alt` com o valor "Doguinho aleatório".

- Deve existir um botão que dispare uma nova requisição para API quando for clicado. Esse botão deve ter o texto "Novo doguinho!". 

## 2. Adicione algumas ações após receber o retorno da requisição para API

- A cada tentativa de atualização do componente, verifique se a URL da imagem possui a palavra `terrier`. Caso tenha, **não** atualize o componente. 

- Guarde a URL da última imagem gerada no `localStorage` após cada atualização, utilizando o método `componentDidUpdate`.

- Após a atualização do componente, exiba um `alert` com a raça do doguinho.
