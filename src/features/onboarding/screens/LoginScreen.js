import React, {useEffect} from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {addTodo, requestTodo} from '../actions/OnboardingActions';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const {todo} = useSelector(
    (state) => ({
      todo: state.onboardingReducer.todo,
    }),
    shallowEqual,
  );

  useEffect(() => {
    dispatch(addTodo({id: 1}));
    dispatch(requestTodo({id: 2}));
  }, [dispatch]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Logic Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
