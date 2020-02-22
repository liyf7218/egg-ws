module.exports = {
  name: 'string?',
  birthday: 'date?',
  gender:{
    type: 'string',
    required: false,
    format: /\bmale\b|\bfemale\b|\bunknown\b/
  },
  phone: 'string?',
  email: 'email?'
};
