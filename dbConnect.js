const mongoose = require('mongoose');

const URL = 'mongodb+srv://shaikhmubassira96066:shaikhmuskan@database-deployment.zr0b2wl.mongodb.net/SimpliCV';

mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
    
const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('MongoDB Connected Successfully');
});

connection.on('error', (error) => {
    console.log('Error in MongoDB connection:', error);
});
