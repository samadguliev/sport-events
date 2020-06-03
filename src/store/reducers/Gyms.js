export const initialState = {
  gyms: [],
  gymsAreLoading: false,
};

export function Gyms (state = initialState, payload) {
  switch (payload.type) {
    case 'GET_GYMS':
      return {
        ...state,
        gyms: payload.payload,
        gymsAreLoading: false,
      };
    case 'GYMS_ARE_LOADING':
      return {
        ...state,
        gymsAreLoading: true,
      };
    default:
      return state
  }
}
