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

    afterEach(function () {
      sinon.restore();
    });
  });
});