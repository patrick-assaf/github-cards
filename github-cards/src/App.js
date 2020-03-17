import React from 'react';
import './index.css';
import CardList from './Card';

class App extends React.Component {

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <CardList />
      </div>
    );
  }
}

export default App;
