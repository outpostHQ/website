import axios from 'axios';

const API_URL = location.hostname ==='localhost' ? '/api/' : '//numl-website-api.netlify.app/api/';

export default {
  get(id) {
    return axios.get(`${API_URL}snippets/${id}`).then(({ data }) => {
      if (data.ok) {
        return data.payload.code;
      }

      throw data.payload;
    });
  },
  save(code) {
    return axios.post(`${API_URL}snippets`, { code }).then(({ data }) => {
      if (data.ok) {
        return data.payload.id;
      }

      throw data.payload;
    });
  },
};
