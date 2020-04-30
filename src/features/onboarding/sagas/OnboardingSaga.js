import {takeEvery, put} from 'redux-saga/effects';

import {OnboardingConstant} from '../OnboardingConstant';
import {addTodo} from '../actions/OnboardingActions';

function* requestTodoItem({payload}) {
  try {
    const {id} = payload;
    yield put(
      addTodo({
        id: id,
      }),
    );
  } catch (e) {
    console.log('requestTodoItem, error: ', e);
  }
}

function* OnboardingSaga() {
  yield takeEvery(OnboardingConstant.TODO_REQUEST, requestTodoItem);
}
export default OnboardingSaga;
