import axios from "axios";
import strings from "../../utils/strings";

export const GET_ENROLLMENT = 'GET_ENROLLMENT';

export function getEnrollment(accessToken) {

  return dispatch => {
    axios({
      url: `${strings.base_url}/enrollment/`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          dispatch({type: GET_ENROLLMENT, payload: response.data});
        }
      })
      .catch(error => {
        console.log('Ошибка в получении записей', error)
      });
  }
}

export function addEnrollment(trainingId, userId, accessToken) {
  const params = new URLSearchParams({
    trainingId,
    userId
  });
  return dispatch => {
    axios({
      url: `${strings.base_url}/enrollment/add/`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: params,
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          dispatch(getEnrollment(accessToken));
        }
      })
      .catch(error => {
        console.log('Ошибка в добавлении регистрации', error)
      });
  }
}

export function removeEnrollment(trainingId, accessToken) {
  const params = new URLSearchParams({
    trainingId
  });
  return dispatch => {
    axios({
      url: `${strings.base_url}/enrollment/delete/`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: params,
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          dispatch(getEnrollment(accessToken));
        }
      })
      .catch(error => {
        console.log('Ошибка в удалении записи', error)
      });
  }
}
