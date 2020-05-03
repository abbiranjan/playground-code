import React from 'react';
import UserList from './component/UserList';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <UserList />
      </div>
    </Provider>
  );
}

export default App;
