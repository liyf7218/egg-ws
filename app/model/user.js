module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const connect = app.mongooseDB.get('db_local');

  const UserSchema = new Schema({
    // 系统相关
    username: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      allowNull: false
    },
    roleId: String,
    status: {
      type: String,
      enum: ['active', 'disabled', 'hidden', 'abandoned']
    },
    token: String,
    lastSignInAt: Date,
    createdAt: Date,
    updatedAt: Date,

    // 日常相关
    name: String,
    birthday: Date,
    email: String,
    gender: {
      type: String,
      enum: ['male', 'female', 'unknown']
    },
    avatar: String,
    mobilePhone: String,
    info: String,
    telePhone: String,
    location: String,

    // 工作相关
    company: String,
    department: String,
  });

  return connect.model('User', UserSchema, 'user');
}
