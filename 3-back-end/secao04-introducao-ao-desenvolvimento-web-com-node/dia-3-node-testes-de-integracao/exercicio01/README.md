## Exercício 1

- Crie os testes de integração para o endpoint: **GET /chocolates/total**;
- Crie um caso para o código retornado: Código HTTP: **200 - OK**;
- Crie outro caso para o retorno esperado:

```
{
  "totalChocolates": 4 // quantidade de chocolates na base de dados
}
```

## Exercício 2

- Implemente o endpoint **GET /chocolates/total** na aplicação;
- Crie um novo endpoint retornando o total de chocolates na base de dados;
- Depois de implementar, verifique se os testes passam com sucesso.

## Exercício 3

- Crie os testes de integração para o endpoint **GET /chocolates/search**;
- Crie um caso verificando o código e o retorno esperado para quando existirem chocolates com o nome informado:
  - Esse endpoint deve retornar os chocolates que contém uma determinada palavra em seu nome, usando o seguinte contrato: **/chocolates/search?name=Mo**;
  - Objetivo: **Retornar os chocolates que contém o termo pesquisado**;
  - Parâmetros de consulta (query params): **name, tipo string**;
  - Código HTTP: **200 - OK**;
  - Body (exemplo):

    ```
    [
      {
        "id": 3,
        "name": "Mon Chéri",
        "brandId": 2
      },
      {
        "id": 4,
        "name": "Mounds",
        "brandId": 3
      }
    ]
    ```

- Crie um caso para quando não existirem chocolates com o nome informado:
  - Caso não haja chocolates com a string passada, retorne um array vazio e status 404: **GET /chocolates/search?name=ZZZ**

  - Objetivo: **Retornar um array vazio quando não há chocolates que contenham o termo pesquisado**;
  - Parâmetros de consulta (query params): **name, tipo string**;
  - Código HTTP: **404 - Not Found**;
  - Body (exemplo):

  ```
  []
  ```

- Verifique se os testes falham com sucesso.

## Exercício 4

- Implemente o endpoint **GET /chocolates/search** na aplicação;
- Crie um novo endpoint retornando os chocolates que tem a string name na base de dados;
- Depois de implementar, verifique se os testes passam com sucesso.