import React from 'react';

class Card extends React.Component {

  render() {
      return (
        <div className="github-profile" style={{ margin: '1rem' }}>
            <img alt="" src="https://placehold.it/75" />
            <div className="info" style={{ display: 'inline-block', marginLeft: 10 }}>
                <div className="name" style={{ fontSize: '125%' }}>Name here...</div>
                <div className="company">Company here...</div>
            </div>
        </div>
      );
  }
}

export default Card;