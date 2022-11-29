# Exercício de fixação

- Neste exercício é feita uma aplicação simples para fixação do conteúdo do dia, onde tínhamos que:

1 - Criar uma store para a aplicação.

2 - Criar um reducer, implementando um switch que retorne apenas o estado inicial como default.

3 - Incrementar o switch criado no passo anterior com os cases NEXT_COLOR e PREVIOUS_COLOR. Essas actions devem alterar o valor index guardado no INITIAL_STATE.

4 - Criar eventListeners que escutam os cliques de cada botão, o Previous color e o Next color, e realizam um dispatch com as respectivas actions.

5 - Fazer o subscribe da store, alterando o innerHTML da tag com id value para a cor atual e o style do elemento com id container. Você deverá ser capaz de ver as cores mudando ao fundo e o nome da cor exibida.

6 - Criar um botão com o texto Random color, um eventListener e uma action no reducer, adicionando uma cor aleatória ao array colors guardado em nosso estado inicial. Faça também com que essa cor seja mostrada ao ser criada, alterando o estado index para a posição dela.
