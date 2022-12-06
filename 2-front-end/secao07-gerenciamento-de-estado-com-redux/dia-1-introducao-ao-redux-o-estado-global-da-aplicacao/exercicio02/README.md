# Exercício de fixação

- Neste exercício é feita uma aplicação simples para fixação do conteúdo do dia, onde tínhamos que:

1 - Combinar os reducers existentes com a função combineReducers e salvar em uma constante.

2 - Criar uma store com a combinação dos reducers.

3 - Adicionar um case dentro do switch de cada um dos reducers para alterar os estados theme e status. O objetivo do themeReducer é alternar o theme entre ‘light’ e ‘dark’. O objetivo do statusReducer é alternar o status entre ‘offline’ e ‘online’.

4 - Fazer o dispatch de cada uma das actions ao clicar nos respectivos botões.

5 - Adicionar um store.subscribe() para atualizar as seguintes informações na página:
 - Se o tema for light, o body deverá possuir uma cor de fundo escura e uma letra clara;
 - Se o tema for dark, deverá possuir uma cor de fundo clara e uma letra escura;
 - Se o status for online, o status deverá possuir o texto Online. Se o status for offline, o status deverá possuir o texto Offline;
 - Não esquecer de modificar o texto dos botões para refletirem exatamente o que eles fazem.