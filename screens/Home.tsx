import {DevSettings, Alert} from 'react-native';
import React, {FunctionComponent} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

import {CenteredView} from '../components';

export const Home: FunctionComponent = () => {
  const navigation: any = useNavigation();

  useFocusEffect(() => {
    DevSettings.addMenuItem('Custom Settings', () =>
      Alert.alert('Home Screen', 'Triggered customer action on home screen'),
    );
  });

  return (
    <CenteredView onPress={() => navigation.navigate('Home')}>
      HOME SCREEN
      {'\n'}
      Tap here to trigger whyDidYouRender
    </CenteredView>
  );
};
