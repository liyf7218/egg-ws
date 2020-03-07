module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const connect = app.mongooseDB.get('db_local');

  const universitySchema = new Schema({
    name_cn: {
      type: String,
      required: true
    },
    code: String,
    department: String,
    dity: String,
    level: String,
    desc: String,
  });

  return connect.model('university', universitySchema, 'university');
}
