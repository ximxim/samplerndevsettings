/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {DevSettings} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Home, Settings} from './screens';

enableScreens(false);

const Tab = createBottomTabNavigator();

if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {trackAllPureComponents: false});
}

const App = () => {
  const [trackAllPureComponents, setTrackAllPureComponents] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const whyDidYouRender = require('@welldone-software/why-did-you-render');
      whyDidYouRender.wdyrStore.options.trackAllPureComponents =
        trackAllPureComponents;
    }

    DevSettings.addMenuItem('Toggle whyDidYouRender', () => {
      setTrackAllPureComponents(val => !val);
    });
  }, [trackAllPureComponents]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
