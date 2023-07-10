const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://gofood:qwer09876@cluster0.qki6fhu.mongodb.net/?retryWrites=true&w=majority'

const mongoDB = async () => {
    mongoose.connect(mongoURI, await console.log("Connected to mongo `Successful")
    );
}

module.exports = mongoDB;