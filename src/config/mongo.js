const mongoose = require("mongoose");

let connectDB = () => {
  let URI = `mongodb://${process.env.DB_HOST_LOCAL}:27017/AppChat`;
  // let URI = `${process.env.DB_CONNECTION}://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`;
  return mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
