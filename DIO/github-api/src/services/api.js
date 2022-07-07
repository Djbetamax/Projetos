import axios from 'axios'

const api = axios.create ({
  baseURL: "https://api.github.com/user"
});

export default api;

// api.get('user/username')

