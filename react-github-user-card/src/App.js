import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import User from './components/User';
import styled from 'styled-components'

const H1 = styled.h1 `
text-align:center;
font-size:3em;
`
const H2 = styled.h2 `
text-align:center;
font-size:2.5em;
`

class App extends React.Component {
  state = {
    following: []
  };
  componentDidMount = () => {
    axios
      .get('https://api.github.com/users/crsullivan/following')
      .then(data => {
        this.setState({
          following: data.data
        })
      })
      .catch(error => {
        console.log(error, 'Uh Oh, I couldnt get your data....:(')
      })
  }
  render() {
    return (
      <div className="App">
        <H1>Github User-Card</H1>
        <User/>
        <H2>See Who I'm Currently Following</H2>
        <UserCard key={this.state.id} following={this.state.following} />
      </div>
    );
  }
}

export default App;
