// tests/unit/controllers/driver.controller.test.js

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { driverService } = require('../../../src/services');
const { driverController } = require('../../../src/controllers');

describe('Teste de unidade do driverController', function () {
  describe('Buscando as viagens em aberto', function () {
    it('quando não tem nenhuma viagem cadastrada retorna um array vazio', async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(driverService, 'getWaitingDriverTravels')
        .resolves({ type: null, message: [] });

      await driverController.openTravel(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith([]);
    });
  });
});