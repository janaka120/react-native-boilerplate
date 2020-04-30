import React from 'react';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';

const HomeScreen = (props) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.mainContainer}>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  mainViewWrapper: {},
});
