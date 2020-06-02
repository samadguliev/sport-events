import axios from "axios";
import strings from "../../utils/strings";

export const SET_AUTHORIZATION = 'SET_AUTHORIZATION';

export function getAuthCode(number) {
  return dispatch => {
    axios({
      url: `${strings.base_url}/auth/getcode?phone=${number}`,
      method: 'get',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
  }
}

export function setAuthorization(number, code) {
  return dispatch => {
    axios({
      url: `${strings.base_url}/auth/login?phone=${number}&code=${code}`,
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          dispatch({type: SET_AUTHORIZATION, payload: response.data});
        }
      })
  }
}
