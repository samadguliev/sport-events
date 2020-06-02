export const initialState = {
  gyms: [],
};

export function Gyms (state = initialState, payload) {
  switch (payload.type) {
    case 'GET_GYMS':
      return {
        ...state,
        gyms: payload.payload,
      };
    default:
      return state
  }
}
