const api = require('./api')

async function register (formData) {
  return await api.call('POST', '/api/user/register', formData)
}

async function login (email, password) {
  return await api.call('POST', '/api/user/login', { email, password })
}

async function logout () {
  return await api.call('GET', '/api/user/logout')
}

async function getProfile () {
  return await api.call('GET', '/api/user/profile')
}

module.exports = { register, login, logout, getProfile }
