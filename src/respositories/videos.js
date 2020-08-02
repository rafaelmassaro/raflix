import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND_TOP}/videos`;

function create(contentVideo) {
  console.log(config.URL_BACKEND_TOP);
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(contentVideo),
  })
    .then(async (response) => {
      if (response.ok) {
        const jsonResponse = await response.json();

        return jsonResponse;
      }

      throw new Error('Não foi possível pegar os dados');
    });
}

export default {
  create,
};
