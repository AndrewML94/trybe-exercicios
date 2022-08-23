//Adicione um novo livro favorito na chave livros favoritos e após acesse as chaves nome e livros favoritos e faça um console.log

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
    {
      titulo2: 'Harry Potter e o Prisioneiro de Azkaban',
      autor2: 'JK Rowling',
      editora2: 'Rocco',
    }
  ],
};

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');