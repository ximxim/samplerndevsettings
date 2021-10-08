import {DevSettings, Alert} from 'react-native';
import React, {FunctionComponent} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

import {CenteredView} from '../components';

export const Settings: FunctionComponent = () => {
  const navigation: any = useNavigation();

  useFocusEffect(() => {
    DevSettings.addMenuItem('Custom Settings', () =>
      Alert.alert(
        'Settings Screen',
        'Triggered customer action on settings screen',
      ),
    );
  });

  return (
    <CenteredView onPress={() => navigation.navigate('Settings')}>
      SETTINGS SCREEN
      {'\n'}
      Tap here to trigger whyDidYouRender
    </CenteredView>
  );
};
