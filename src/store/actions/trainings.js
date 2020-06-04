import axios from "axios";
import strings from "../../utils/strings";
import moment from "moment";

export const GET_TRAININGS = 'GET_TRAININGS';
export const GET_TRAINING = 'GET_TRAINING';

export function getTrainings(gymId, date) {
  const trainingDate = moment(date.toISOString()).format( `YYYY-MM-DD`);
  return dispatch => {
    axios({
      url: `${strings.base_url}/gym/${gymId}/tt/${trainingDate}`,
      method: 'get',
      headers: {
        // Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          dispatch({type: GET_TRAININGS, payload: response.data.tt});
        }
      })
  }
}

export function getTraining(id, accessToken) {
  return dispatch => {
    axios({
      url: `${strings.base_url}/trainings/${id}/`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          dispatch({type: GET_TRAINING, payload: response.data});
        }
      })
  }
}
