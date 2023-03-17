const { expect } = require('chai');
const sinon = require('sinon');
const { passengerService } = require('../../../src/services');
const { passengerModel, travelModel, waypointModel } = require('../../../src/models');
const { 
  allPassengers,
  invalidValue,
  validName,
  validEmail,
  validPhone,
  travelResponse,
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

    describe('solicitação de viagem', function () {
      it('sem pontos de parada é realizada com sucesso', async function () {
        sinon.stub(passengerModel, 'findById').resolves(true); 
        sinon.stub(travelModel, 'insert').resolves(1); 
        sinon.stub(travelModel, 'findById').resolves(travelResponse);

        const WAITING_DRIVER = 1;
        const passenger = {
          id: 1,
          startingAddress: 'Rua X',
          endingAddress: 'Rua Y',
        };
        const travel = await passengerService.requestTravel(
          passenger.id,
          passenger.startingAddress,
          passenger.endingAddress,
        );

        expect(travel.message).to.deep.equal({
          id: 1,
          passengerId: 1,
          driverId: null,
          travelStatusId: WAITING_DRIVER,
          startingAddress: 'Rua X',
          endingAddress: 'Rua Y',
          requestDate: '2022-08-24T03:04:04.374Z',
        });
      });
  
      it('com pontos de parada é realizada com sucesso', async function () {
        sinon.stub(passengerModel, 'findById').resolves(true); 
        sinon.stub(travelModel, 'insert').resolves(1); 
        sinon.stub(travelModel, 'findById').resolves(travelResponse);
        sinon.stub(waypointModel, 'insert').resolves(1); 

        const WAITING_DRIVER = 1;
        const passenger = {
          id: 1,
          startingAddress: 'Rua X',
          endingAddress: 'Rua Y',
          waypoints: [{
              address: 'Rua Z',
              stopOrder: 1,
          }],
        };
        const travel = await passengerService.requestTravel(
          passenger.id,
          passenger.startingAddress,
          passenger.endingAddress,
          passenger.waypoints,
        );

        expect(travel.message).to.deep.equal({
          id: 1,
          passengerId: 1,
          driverId: null,
          travelStatusId: WAITING_DRIVER,
          startingAddress: 'Rua X',
          endingAddress: 'Rua Y',
          requestDate: '2022-08-24T03:04:04.374Z',
        });
      });
  
      it('com mesmo local de origem e destino é rejeitada', async function () {
        const passenger = {
          id: 1,
          startingAddress: 'Rua X',
          endingAddress: 'Rua X',
        };
        const error = await passengerService.requestTravel(
          passenger.id,
          passenger.startingAddress,
          passenger.endingAddress,
        );

        expect(error.type).to.equal('INVALID_VALUE');
        expect(error.message).to.equal('"endingAddress" contains an invalid value');
      });
    });

    afterEach(function () {
      sinon.restore();
    });
  });
});