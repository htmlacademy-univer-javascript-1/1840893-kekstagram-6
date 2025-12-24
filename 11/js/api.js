import { BASE_URL } from './constants.js';
import { showErrorMessage } from './messages.js';

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
    showErrorMessage(err);
  }

  return response.json();
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
