import { BASE_URL } from './constants.js';
import { showErrorMessage, showMessage } from './messages.js';

/* Get posts */
async function getPosts() {
  try {
    const response = await fetch(`${BASE_URL}/data`);

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

    const text = await response.text();
    return text ? JSON.parse(text) : [];
  } catch (err) {
    showErrorMessage(err);
    return [];
  }
}

/* Send an information from a form */

async function sendData(formData) {
  try {
    const response = await fetch(`${BASE_URL}/`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`${response.status} - Ошибка при отправке данных`);
    }

    const text = await response.text();
    return text ? JSON.parse(text) : {};
  } catch (err) {
    showMessage(err);
    return {};
  }
}

export { getPosts, sendData };
