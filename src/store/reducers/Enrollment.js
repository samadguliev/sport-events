export const initialState = {
  enrollment: [],
};

export function Enrollment (state = initialState, payload) {
  switch (payload.type) {
    case 'GET_ENROLLMENT':
      return {
        ...state,
        enrollment: payload.payload,
      };
    default:
      return state
  }
}
