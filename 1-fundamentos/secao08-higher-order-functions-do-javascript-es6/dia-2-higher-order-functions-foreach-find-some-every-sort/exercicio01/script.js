const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// #1 Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

function authorBornIn1947() {
  let nameAuthor;
  books.find((nameBook) => {
    if (nameBook.author.birthYear === 1947) {
      nameAuthor = `O autor nascido em 1947 é: ${nameBook.author.name}.`
    };
  });
  return nameAuthor
}

// #2 Retorne o nome do livro de menor nome. 

function smallerName() {
  let nameBook;
  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) nameBook = book.name;
  });
  return `O livro com o menor nome é: ${nameBook}.`;
}

// #3 Encontre o primeiro livro cujo nome possui 26 caracteres. 

function getNamedBook() {
  let nameBook;
  books.forEach((book) => {
    if (book.name.length === 26) nameBook = `O livro com o nome contendo 26 caracteres é: ${book.name}.`
  });
  return nameBook;
}

// #4  Ordene os livros por data de lançamento em ordem decrescente. 

function booksOrderedByReleaseYearDesc() {
  return books.sort((a, b) => b.releaseYear - a.releaseYear);
}

// #5 Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

function everyoneWasBornOnSecXX() {
  return books.every((bornSecXX) => bornSecXX.author.birthYear >= 1900 && bornSecXX.author.birthYear < 2000)
}

// 6# Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário. 

function someBookWasReleaseOnThe80s() {
  return books.some((bornSecXX) => bornSecXX.releaseYear >= 1980 && bornSecXX.releaseYear < 1990)
}

// #7 Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário. 

function authorUnique() {
  return books.every((book) => !books.some((bookSome) => (bookSome.author.birthYear === book.author.birthYear) && (bookSome.author.name !== book.author.name)));
}
