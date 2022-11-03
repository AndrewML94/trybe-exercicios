# Exercícios

## Exercício 1
Torne a aplicação navegável, encapsulando o que é retornado pelo App dentro do componente BrowserRouter.

## Exercício 2
Crie uma rota para o componente Home, utilizando um Route que mapeia o caminho de URL "/" para Home.

## Exercício 3
Adicione uma rota que mapeie o caminho de URL "/about" para o componente About. Acesse http://localhost:3000/about para ver se o componente About foi renderizado!

## Exercício 4
O componente About foi renderizado no exercício anterior, mas o componente Home também foi, o que não era desejado para o nosso caso. sob Agora, altere a forma como a correspondência de caminho da URL está sendo feita para renderizar Home, de modo que Home somente seja renderizado se o caminho da URL for exatamente igual a "/".

## Exercício 5
Adicione uma rota que mapeie o caminho de URL "/users" para o componente Users. Acesse http://localhost:3000/users para ver se somente o componente Users foi renderizado.

## Exercício 6
Adicione dentro de BrowserRouter uma lista contendo 3 links:

 - um link que aponte para o caminho de URL "/" contendo o texto Home;

 - um link que aponte para o caminho de URL "/about" contendo o texto About;

 - um link que aponte para o caminho de URL "/users" contendo o texto Users.

## Exercício 7
No componente App há uma rota que renderiza o componente Users. Altere a forma como ela renderiza o componente Users, passando para ele a prop greetingsMessage com o valor igual a "Good Morning". Lembre-se de usar a prop correta no Route!

## Exercício 8
Para fixar uso de URL com parâmetros, altere a rota, definindo o parâmetro chamado id. Depois, altere o componente Users, de modo que mostre no parágrafo o valor recebido para o parâmetro id. Teste se está funcionando invocando as urls localhost:3000/users/10, localhost:3000/users/11 e localhost:3000/users/100, por exemplo.

## Exercício 9
No componente App, você deve possuir 3 rotas: uma para renderizar o componente Home, outra para renderizar About, e outra para renderizar Users, sendo que a última faz uso de parâmetro de URL. Encapsule essas 3 rotas em um componente Switch e ordene as rotas do mais específico para o mais genérico, começando de cima.

## Exercício 10
Adicione, no diretório src, um componente chamado StrictAccess.

Como o próprio nome diz, esse componente é de acesso restrito, e ele deve receber um objeto user como props.
Se username e password de user for "joao" e "1234", respectivamente, o componente StrictAccess renderiza um parágrafo que diz "Welcome joao!".
Caso username ou password não sejam os valores esperados, o componente precisa gerar um alerta dizendo Access denied e redirecionar quem usa sua aplicação para a página principal.

## Exercício 11
Adicione no componente App um link que aponte para o caminho de URL "/strict-access", contendo o texto Strict Access.

## Exercício 12
Adicione, no componente App, uma rota que mapeie o caminho de URL "/strict-access" para o componente StrictAccess. Para poder testar o fluxo de autenticação, passe para a prop user de StrictAccess diferentes valores para as propriedades username e password.