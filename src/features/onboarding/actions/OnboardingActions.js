import {OnboardingConstant} from '../OnboardingConstant';

export const addTodo = (todo) => {
  return {
    type: OnboardingConstant.ADD_TODO,
    payload: todo,
  };
};

export const requestTodo = (todo) => {
  return {
    type: OnboardingConstant.TODO_REQUEST,
    payload: todo,
  };
};
