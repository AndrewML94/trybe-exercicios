const { expect } = require('chai');
const sinon = require('sinon');
const { passengerService } = require('../../../src/services');
const { passengerModel } = require('../../../src/models');
const { allPassengers } = require('./passenger.service.mock');

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

    afterEach(function () {
      sinon.restore();
    });
  });
});