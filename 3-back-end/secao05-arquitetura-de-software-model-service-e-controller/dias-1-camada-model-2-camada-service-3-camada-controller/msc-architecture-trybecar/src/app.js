const express = require('express');
const { passengerRouter, driverRoutes } = require('./routers');

const app = express();

app.use(express.json());
app.use('/passengers', passengerRouter);
app.use('/drivers', driverRoutes);

module.exports = app;
