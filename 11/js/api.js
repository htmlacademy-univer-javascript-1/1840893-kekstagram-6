import { BASE_URL } from './constants.js';

/* Get posts */
async function getPosts() {
  let response;

  try {
    response = await fetch(`${BASE_URL}/data`);
    if (!response.ok) {
      switch (`${response.status}`) {
        case '404':
          throw new Error(
            `${response.status} - Не удалось получить данные с сервера`
          );
        default:
          throw new Error(`${response.status} - Неизвестная ошибка`);
      }
    }
  } catch (err) {
    console.log(err);
    const body = document.body;
    const errorContainer = document.createElement('div');
    errorContainer.classList.add('error_container');
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error_message');
    errorMessage.textContent = err;
    errorContainer.append(errorMessage);
    body.append(errorContainer);
    return body;
  }

  const posts = await response.json();

  return posts;
}

/* Send an information from a form */

async function sendData(formData) {
  const response = await fetch(`${BASE_URL}`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
}

export { getPosts, sendData };
