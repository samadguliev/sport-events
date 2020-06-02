import axios from "axios";
import strings from "../../utils/strings";

export const GET_GYMS = 'GET_GYMS';

export function getGymList() {
  return dispatch => {
    axios({
      url: `${strings.base_url}/gym/list?lat=1&lon=1`,
      method: 'get',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          dispatch({type: GET_GYMS, payload: response.data});
        }
      })
  }
}
