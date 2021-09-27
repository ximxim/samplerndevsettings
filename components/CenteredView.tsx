import React, {FunctionComponent} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const CenteredView: FunctionComponent = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  },
  text: {
    textAlign: 'center',
  },
});
