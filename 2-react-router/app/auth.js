class Auth {
  constructor() {
    this._token = null
  }

  login(params) {
    return this._request(params)
  }

  setToken(token) {
    this._token = token
  }

  getToken() {
    return this._token
  }

  logout() {
    this._token = null
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(true)
      }, 2000)
    })
  }

  loggedIn() {
    return !!this._token
  }

  _request({email, pass}) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (email === 'test@example.com' && pass === 'example') {
          this._token = 'auth-token-123'
          res(true)
        } else {
          rej('Auth error...')
        }
      }, 2000)
    })
  }
}

const auth = new Auth()

export default auth
