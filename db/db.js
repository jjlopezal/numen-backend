
const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
    try {  
        await mongoose.connect( "mongodb+srv://jjlopezal:jjl123@cluster0.2w3c6.mongodb.net/mongo-api",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } )
        console.log('Base de datos conectada');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos')   
    }
}

module.exports = {dbConnection}

