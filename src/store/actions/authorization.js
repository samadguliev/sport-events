import axios from "axios";
import strings from "../../utils/strings";

export const SET_AUTHORIZATION = 'SET_AUTHORIZATION';

export function setAuthorization(login, password) {
  const params = new URLSearchParams({
    login,
    password,
  });

  return dispatch => {
    axios({
      url: `${strings.base_url}/users/login/`,
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: params,
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          dispatch({type: SET_AUTHORIZATION, payload: response.data});
        }
      })
  }
}
