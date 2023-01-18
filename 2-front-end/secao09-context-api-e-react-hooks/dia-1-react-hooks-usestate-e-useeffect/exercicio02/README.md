# Exercício 2:

Neste exercício deverá ser desenvolvido uma aplicação que renderiza uma lista de e-mails. A aplicação deve permitir que seja possível marcar um e-mail como lido ou não lido. Quando todos os e-mail da lista estiverem lidos, um alert deve ser exibido informando que todas mensagens foram lidas!
Para realizar esse exercício foi utilizado:

- Somente componentes funcionais;
- Gerenciamento do estado da aplicação usando o hook useState;

O que é esperado da aplicação:

- Deve salvar no estado uma lista com os e-mails recebidos;
- Usar o status: 0 para e-mails não lidos e status: 1 para e-mails lidos;
- Cada e-mail da lista deve ser renderizado junto com dois botões: um para marcar o e-mail como lido e outro para marcá-lo como não lido;
- Além da lista de e-mails, também deve haver dois botões de controle: um para marcar todos os e-mails como lidos e outro para marcar todos os e-mails como não lidos;
- Usar o hook useEffect para “monitorar” as mudanças que acontecerem na lista de e-mails salva no estado;
- Sempre que todos os e-mails da lista forem marcados como “lidos”, exiba um alert com a mensagem: “Parabéns! Você leu todas suas mensagens!”.
