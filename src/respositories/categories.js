import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

function getAll() {
  console.log(config.URL_BACKEND_TOP);
  return fetch(`${URL_CATEGORIES}`)
    .then(async (response) => {
      if (response.ok) {
        const jsonResponse = await response.json();

        return jsonResponse;
      }

      throw new Error('Não foi possível pegar os dados');
    });
}

function getAllWithVideos() {
  console.log(config.URL_BACKEND_TOP);
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const jsonResponse = await response.json();

        return jsonResponse;
      }

      throw new Error('Não foi possível pegar os dados');
    });
}

export default {
  getAll,
  getAllWithVideos,
};
