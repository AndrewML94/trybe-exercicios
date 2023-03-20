const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { passengerService } = require('../../../src/services');
const { passengerController } = require('../../../src/controllers');
const { passengerListMock, passengerMock, newPassengerMock } = require('./mocks/passenger.controller.mock');

describe('Testes de unidade do passengerController', function () {
  describe('Listando as pessoa passageiras', function () {
    it('Deve retornar o status 200 e a lista', async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(passengerService, 'findAll').resolves({ type: null, message: passengerListMock });

      await passengerController.listPassengers(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(passengerListMock);
    });
  });

  describe('Buscando uma pessoa passageira', function () {
    it('deve responder com 200 e os dados do banco quando existir', async function () {
      const res = {};
      const req = {
        params: { id: 1 },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(passengerService, 'findById')
        .resolves({ type: null, message: newPassengerMock });

      await passengerController.getPassenger(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(newPassengerMock);
    });

    it('ao passar um id inválido deve retornar um erro', async function () {
      const res = {};
      const req = {
        params: { id: 'abc' },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(passengerService, 'findById')
        .resolves({ type: 'INVALID_VALUE', message: '"id" must be a number' });

      await passengerController.getPassenger(req, res);

      expect(res.status).to.have.been.calledWith(422); 
      expect(res.json).to.have.been.calledWith('"id" must be a number');
    });

    it('ao passar um id que não existe no banco deve retornar um erro', async function () {
      const res = {};
      const req = {
        params: { id: 9999 },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(passengerService, 'findById')
        .resolves({ type: 'PASSENGER_NOT_FOUND', message: 'Passenger not found' });

      await passengerController.getPassenger(req, res);

      expect(res.status).to.have.been.calledWith(404); 
      expect(res.json).to.have.been.calledWith('Passenger not found');
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});