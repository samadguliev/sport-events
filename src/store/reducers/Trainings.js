export const initialState = {
  trainings: [],
};

export function Trainings (state = initialState, payload) {
  switch (payload.type) {
    case 'GET_TRAININGS':
      return {
        ...state,
        trainings: payload.payload,
      };
    default:
      return state
  }
}
