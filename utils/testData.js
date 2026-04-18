const loginData = {
  validUser: {
    username: 'practice',
    password: 'SuperSecretPassword!'
  },
  invalidUser: {
    username: 'wrongUser',
    password: 'wrongPass'
  },

  emptyUser: {
    username: '',
    password: ''
  }
};

module.exports = { loginData };