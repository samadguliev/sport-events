import axios from "axios";
import strings from "../../utils/strings";
import moment from "moment";

import {getTrainings} from "./trainings";

export const GET_ENROLLMENT = 'GET_ENROLLMENT';

export function getEnrollment(gyms, accessToken) {
  return dispatch => {
    axios({
      url: `${strings.base_url}/scheduler/records/gym/${gyms}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          const list = response.data.records.filter(item => (item.deleted === null || item.deleted === 0));
          dispatch({type: GET_ENROLLMENT, payload: list});
        }
      })
      .catch(error => {
        console.log('Ошибка в получении записей', error)
      });
  }
}

export function addEnrollment(trainingId, date, gymId) {
  const trainingDate = moment(date.toISOString()).format( `YYYY-MM-DD`);
  const params = new URLSearchParams({
    trainingId,
    date: trainingDate
  });
  return dispatch => {
    axios({
      url: `${strings.base_url}/scheduler/add?id=${trainingId}&date=${trainingDate}&cnt=1&childs=0`,
      method: 'get',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      params,
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          dispatch(getTrainings(gymId, date));
        }
      })
      .catch(error => {
        console.log('Ошибка в добавлении регистрации', error)
      });
  }
}

export function removeEnrollment(trainingId, gymsIds) {
  return dispatch => {
    axios({
      url: `${strings.base_url}/scheduler/cancel?record_id=${trainingId}`,
      method: 'get',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          dispatch(getEnrollment(gymsIds.join(',')));
        }
      })
      .catch(error => {
        console.log('Ошибка в удалении записи', error)
      });
  }
}
