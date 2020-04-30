const initialState = {
  todo: [],
};

const OnboardingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {...state, todo: [...state.todo, action.payload]};
    default:
      return state;
  }
};

export default OnboardingReducer;
