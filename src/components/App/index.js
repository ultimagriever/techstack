import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header } from '../../components';
import reducers from '../../reducers';
import LibraryList from '../../containers/LibraryList';

const App = () => (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Header headerText="Tech Stack" />
        <LibraryList/>
      </View>
    </Provider>
);

export default App;
