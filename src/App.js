import React, { Component } from 'react';
import Body from './components/Body';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

class App extends Component {
  render() {
    return (
      <Provider store={appStore}>
        <Body />
      </Provider>
    );
  }
}

export default App;
