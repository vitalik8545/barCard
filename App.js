/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/*npx react-native run-android */

import React from 'react';
import {AppNavigation} from './src/navigation/AppNavigation';
import rootReducer from './src/store/rootReducer';
import {Provider} from 'react-redux';

const App: () => React$Node = () => {
  return (
    <Provider store={rootReducer}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
