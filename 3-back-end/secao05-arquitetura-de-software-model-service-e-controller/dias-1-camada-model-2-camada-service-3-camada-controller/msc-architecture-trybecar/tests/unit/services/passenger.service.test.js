const { expect } = require('chai');
const sinon = require('sinon');
const { passengerService } = require('../../../src/services');
const { passengerModel } = require('../../../src/models');
const { 
  allPassengers,
  invalidValue,
  validName,
  validEmail,
  validPhone,
} = require('./passenger.service.mock');

describe('Verificando service pessoa passageira', function () {
  describe('listagem de pessoas passageiras', function () {
    it('retorna a listagem completa de pessoas passageiras', async function () {
      sinon.stub(passengerModel, 'findAll').resolves(allPassengers);

      const result = await passengerService.findAll();

      expect(result.type).to.be.equal(null);
      expect(result.message).to.deep.equal(allPassengers);
    });
    
    describe('busca de uma pessoa passageira', function () {
      it('retorna uma erro caso receba um ID inválido', async function () {
        const result = await passengerService.findById('a');
  
        expect(result.type).to.be.equal('INVALID_VALUE');
        expect(result.message).to.be.equal('"id" must be a number');
      });

      it('retorna um erro caso a pessoa passageira não exista', async function () {
        sinon.stub(passengerModel, 'findById').resolves(undefined);

        const result = await passengerService.findById(1);

        expect(result.type).to.be.equal('PASSENGER_NOT_FOUND');
        expect(result.message).to.be.equal('Passenger not found');
      });

      it('retorna a pessoa passageira caso ID exista', async function () {
        sinon.stub(passengerModel, 'findById').resolves(allPassengers[0]);

        const result = await passengerService.findById(1);

        expect(result.type).to.be.equal(null);
        expect(result.message).to.deep.equal(allPassengers[0]);
      });
    });

    describe('cadastro de uma pessoa passageira com valores inválidos', function () {
      it('retorna um erro ao passar um nome inválido', async function () {
        const result = await passengerService.createPassenger(invalidValue, validEmail, validPhone);

        expect(result.type).to.equal('INVALID_VALUE');
        expect(result.message).to.equal('"name" length must be at least 3 characters long');
      });

      it('retorna um erro ao passar um email inválido', async function () {
        const result = await passengerService.createPassenger(validName, invalidValue, validPhone);

        expect(result.type).to.equal('INVALID_VALUE');
        expect(result.message).to.equal('"email" must be a valid email');
      });

      it('retorna um erro ao passar um telefone inválido', async function () {
        const result = await passengerService.createPassenger(validName, validEmail, invalidValue);

        expect(result.type).to.equal('INVALID_VALUE');
        expect(result.message).to.equal('"phone" length must be at least 9 characters long');
      });
    });

    describe('cadastro de uma pessoa passageira com valores válidos', function () {
      it('retorna o ID da pessoa passageira cadastrada', async function () {
        sinon.stub(passengerModel, 'insert').resolves(1);
        sinon.stub(passengerModel, 'findById').resolves(allPassengers[0]);
        
        const result = await passengerService.createPassenger(validName, validEmail, validPhone);
  
        expect(result.type).to.equal(null);
        expect(result.message).to.deep.equal(allPassengers[0]);
      });
    });

    afterEach(function () {
      sinon.restore();
    });
  });
});