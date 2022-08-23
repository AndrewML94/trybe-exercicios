//Acesse as chaves nome, sobrenome e título que está dentro da chave livrosFavoritos e faça um console.log

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log('O livro favorido de ' + leitor.nome + ' ' + leitor.sobrenome + ' ' + 'se chama ' + leitor.livrosFavoritos[0].titulo);