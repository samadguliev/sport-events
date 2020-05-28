import axios from "axios";
import strings from "../../utils/strings";
import moment from "moment";

export const ADD_TRAINING = 'ADD_TRAINING';
export const GET_TRAININGS = 'GET_TRAININGS';

export function addTraining(name, date, time, duration, accessToken) {

  const dataValue = moment(date.toISOString()).format( `YYYY.MM.DD`);
  const timeValue = moment(time.toISOString()).format( `hh:mm:ss`);

  const params = new URLSearchParams({
    name,
    date: `${dataValue} ${timeValue}`,
    duration,
  });

  return dispatch => {
    axios({
      url: `${strings.base_url}/trainings/add/`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: params,
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          dispatch({type: ADD_TRAINING});
        }
      })
  }
}

export function getTrainings(accessToken) {
  return dispatch => {
    axios({
      url: `${strings.base_url}/trainings/`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          dispatch({type: GET_TRAININGS, payload: response.data});
        }
      })
  }
}

export function removeTraining(id, accessToken) {
  return dispatch => {
    axios({
      url: `${strings.base_url}/trainings/${id}/delete/`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          dispatch(getTrainings(accessToken));
        }
      })
  }
}
