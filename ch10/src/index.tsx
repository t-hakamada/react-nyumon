import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
// import {ConnectedRouter} from 'react-router-redux';
import {ConnectedRouter} from 'connected-react-router';
import createStore from './createStore';
import {createBrowserHistory} from 'history';

// 「react-router-redux」は非推奨(更新無し)、「connected-react-router」を代用
// https://github.com/reactjs/react-router-redux/blob/master/README.md
// https://stackoverflow.com/questions/54402637/connectedrouter-typeerror-cannot-read-property-dispatch-of-undefined

// TODO: anyの修正
// historyのインスタンスを生成
// HTML5 history APIを利用する
const history = createBrowserHistory();

// Storeの作成
const store = createStore(history);

ReactDOM.render(
  // storeをAppコンポーネントに紐付ける
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
