const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs');
const app = require('../../src/app');
const mockFile = require('../mock/mockFile');

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando a API Cacau Trybe', function() {

  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile')
      .resolves(mockFile);
  });

  afterEach(function () {
    sinon.restore();
  });

  describe('usando o método GET em "/chocolates"', function() {
    it('Retorna a lista completa de chocolates!', async function() {

      const response = await chai.request(app).get('/chocolates');
      const output = [
        { id: 1, name: 'Mint Intense', brandId: 1 },
        { id: 2, name: 'White Coconut', brandId: 1 },
        { id: 3, name: 'Mon Chéri', brandId: 2 },
        { id: 4, name: 'Mounds', brandId: 3 },
      ]
  
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal(output);
    });
  });
});

describe('Usando o método GET em "/chocolates/:id" para buscar o ID 4', function() {
  it('Retorna o chcolate Mounds', async function() {

    const response = await chai.request(app).get('/chocolates/4');
    const chocolate = {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    }

    expect(response.status).to.be.equal(200);
    expect(response.body.chocolate).to.deep.equal(chocolate)
  });
});

describe('Usando o método GET em "/chocolates/:id" para buscar o ID 99', function() {
  it('Retorna status 404 com a mensagem "Chocolate not found"', async function() {

    const response = await chai.request(app).get('/chocolates/99');

    expect(response.status).to.be.equal(404);
    expect(response.body).to.deep.equal({ message: 'Chocolate not found' });
  });
});

describe('Usando o método GET em "/chocolates/brand/:brandId" para buscar brandId 1', function() {
  it('Retorna os chocolates da marca Lindt & Sprungli', async function() {

    const response = await chai.request(app).get('/chocolates/brand/1')
    const brandChocolate = [{
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    }
  ];

    expect(response.status).to.be.equal(200);
    expect(response.body.chocolates).to.deep.equal(brandChocolate);
  });
});

describe('Usando o método GET em "/chocolates/total"', function() {
  it('Mostra o total de chocolates no db', async function() {

    const response = await chai.request(app).get('/chocolates/total');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal({ 'totalChocolates': 4 });
  });
});