const express = require('express');
const app = express();

const userRouter = require('./routes/User');

app.use(express.json());

app.use('/api/users', userRouter);
// app.use('/api/messages', require('./routes/messages'));

// Подключение посредников и другой конфигурации

module.exports = app;
