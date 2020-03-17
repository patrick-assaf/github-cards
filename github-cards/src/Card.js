import React from 'react';
import './index.css';

const testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
{name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

class Card extends React.Component {

  render() {
      const profile = this.props;
      return (
        <div className="github-profile">
            <img alt="" src={profile.avatar_url} />
            <div className="info">
                <div className="name">{profile.name}</div>
                <div className="company">{profile.company}</div>
            </div>
        </div>
      );
  }
}

const CardList = (props) => (
    <div>
        {testData.map(profile => <Card {...profile} />)}
    </div>
);

export default CardList;