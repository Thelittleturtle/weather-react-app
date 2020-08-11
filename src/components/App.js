import React from 'react';
import './App.css';
import styled from 'styled-components';
import SearchEmoji from './SearchEmoji';
import SearchResult from './SearchResult';
import filterEmoji from './filterEmoji';

const Header = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  align-items: center;
  grid-gap: 15px;
  margin-top: 10px;

  & > h1 {
    margin: 0;
    font-size: 30px;
    font-weight: 600;
  }

  &:first-child {
    font-size: 60px;
  }
`;


class App extends React.Component {
  state = {
    emojis: filterEmoji("",20)
  };

  HandleChange = value => {
    this.setState({
      emojis: filterEmoji(value,20)
    })
  };

  render(){
    const {emojis} = this.state;
    return (
      <>
        <Header>
          <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
          width="32"
          height="32"
          alt=""
          />
          <h1>Emoji Search</h1>
          <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
          width="32"
          height="32"
          alt=""
          />
        </Header>
        <SearchEmoji
          HandleChange={this.HandleChange}
        />
        <SearchResult emojis={emojis}/>
      </>
    );
  }
}

export default App;
