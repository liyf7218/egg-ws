module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const connect = app.mongooseDB.get('db_local'); 

  const TestSchema = new Schema({
    name: String,
    birthday: String,
    gender: String,
    phone: String,
    email: String
  });

  return connect.model('Test', TestSchema, 'test');
}
