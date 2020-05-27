export const initialState = {
  authorization: [],
  accessToken: '',
};

export function Authorization (state = initialState, payload) {
  switch (payload.type) {
    case 'SET_AUTHORIZATION':
      return {
        ...state,
        authorization: payload.payload,
        accessToken: payload.payload.data.token
      };
    default:
      return state
  }
}
