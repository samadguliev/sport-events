export const initialState = {
  authorization: [],
};

export function Authorization (state = initialState, payload) {
  switch (payload.type) {
    case 'SET_AUTHORIZATION':
      return {
        ...state,
        authorization: payload.payload,
      };
    default:
      return state
  }
}
