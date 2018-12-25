import axios from 'axios'

class HTTP {
  constructor() {
    this.axios = axios.create({
      baseURL: '',
      timeout: 5000,
    })
  }

  GET(uri, query) {

  }
  POST(uri, body, query) {

  }
}

export default new HTTP();
