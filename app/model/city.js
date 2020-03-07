module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const connect = app.mongooseDB.get('db_local');

  const CitySchema = new Schema({
    name: {
      type: String,
      required: true
    },
    adcode: String,
    citycode: String,
    desc: String,
  });

  return connect.model('City', CitySchema, 'city');
}
