const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://gofood:qwer09876@cluster0.qki6fhu.mongodb.net/GoFood?retryWrites=true&w=majority';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    // console.log("Connected to MongoDB: Successful");
    const fetched_data = mongoose.connection.db.collection("Food_items");
    const data = await fetched_data.find({}).toArray();


    global.food_items = data;

    const foodCategory = mongoose.connection.db.collection("FoodCategory");
    const catData = await foodCategory.find({}).toArray();

    global.foodCategory = catData;

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = mongoDB;
