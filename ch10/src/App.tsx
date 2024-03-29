import React, {Component} from 'react';
import {Switch, Redirect, Route, Link} from 'react-router-dom';
import Ranking from './containers/Ranking';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><Link to="/all">全てのカテゴリ</Link></li>
          <li><Link to="/category/2502">パソコン、周辺機器</Link></li>
          <li><Link to="/category/10002">本、雑誌、コミック</Link></li>
        </ul>

        <Route path="/all" component={Ranking} />
        <Route path="/category/:id"
          render={
            ({match}) => <Ranking categoryId={match.params.id} />
          }
        />
      </div>
    );
  }
}

export default App;
