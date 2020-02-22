module.exports = {
  // 系统相关
  username: {
    type: 'string?'
  },
  password: {
    type: 'string?'
  },
  roleId: 'string?',
  status: {
    type: 'string?',
    required: false,
    format: /\bactive\b|\bdisabled\b|\bhidden\b|\babandoned\b/
  },
  token: 'string?',
  lastSignInAt: 'datetime?',
  createdAt: 'datetime?',
  updatedAt: 'datetime?',

  // 日常相关
  name: 'string?',
  birthday: 'string?',
  email: 'email?',
  gender: {
    type: 'string?',
    required: false,
    format: /\bmale\b|\bfemale\b|\bunknown\b/
  },
  avatar: 'string?',
  mobilePhone: 'string?',
  info: 'string?',
  telePhone: 'string?',
  location: 'string?',

  // 工作相关
  company: 'string?',
  department: 'string?',
};
