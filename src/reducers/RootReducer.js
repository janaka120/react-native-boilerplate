import {combineReducers} from 'redux';

import onboardingReducer from '../features/onboarding/reducers/OnboardingReducer';

const RootReducer = combineReducers({
  onboardingReducer,
});
export default RootReducer;
