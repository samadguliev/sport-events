export const initialState = {
  trainings: [],
  training: {},
};

export function Trainings (state = initialState, payload) {
  switch (payload.type) {
    case 'GET_TRAININGS':
      return {
        ...state,
        trainings: payload.payload,
      };
    case 'GET_TRAINING':
      return {
        ...state,
        training: payload.payload,
      };
    default:
      return state
  }
}
