import React, {FunctionComponent} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

export const CenteredView: FunctionComponent<TouchableOpacityProps> = ({
  children,
  ...touchableOpacityProps
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity {...touchableOpacityProps}>
        <Text style={styles.text}>{children}</Text>
      </TouchableOpacity>
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
