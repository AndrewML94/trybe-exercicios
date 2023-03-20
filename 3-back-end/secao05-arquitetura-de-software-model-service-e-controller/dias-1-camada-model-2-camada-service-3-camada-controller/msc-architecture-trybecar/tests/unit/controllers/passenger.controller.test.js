const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { passengerService } = require('../../../src/services');
const { passengerController } = require('../../../src/controllers');
const {
  passengerListMock,
  passengerMock,
  newPassengerMock,
  happyControllerResponseCreateTravelObject,
  happyReqCreateTravelObject,
  happyResponseCreateTravelObject,
} = require('./mocks/passenger.controller.mock');

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

  describe('Cadastrando uma nova pessoa passageira', function () {
    it('ao enviar dados válidos deve salvar com sucesso!', async function () {
      const res = {};
      const req = {
        body: passengerMock,
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(passengerService, 'createPassenger')
        .resolves({ type: null, message: newPassengerMock });

      await passengerController.createPassenger(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(newPassengerMock);
    });

    it('ao enviar um nome com menos de 3 caracteres deve retornar um erro!', async function () {
      const res = {};
      const req = {
        body: {
          name: 'Zé',
        },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(passengerService, 'createPassenger')
        .resolves(
          { type: 'INVALID_VALUE', message: '"name" length must be at least 3 characters long' },
        );

      await passengerController.createPassenger(req, res);

      expect(res.status).to.have.been.calledWith(422);
      expect(res.json).to.have.been.calledWith('"name" length must be at least 3 characters long');
    });
  });

  describe('Criando uma nova viagem', function () {
    it('enviando dados válidos deve cadastrar a viagem', async function () {
      const res = {};
      const req = happyReqCreateTravelObject;

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(passengerService, 'requestTravel')
        .resolves(happyControllerResponseCreateTravelObject);

      await passengerController.createTravel(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(happyResponseCreateTravelObject);
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});