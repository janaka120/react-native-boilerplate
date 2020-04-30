import {all} from 'redux-saga/effects';

import OnboardingSagas from '../features/onboarding/sagas/OnboardingSaga';

export default function* rootSaga() {
  yield all([OnboardingSagas()]);
}
