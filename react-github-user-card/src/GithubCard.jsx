import React from 'react';
import Users from './components/Users';
import axios from 'axios';

const users = 
[
    'crsullivan','tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell', 'brandleyj', 'tonyrkovar', 'kmcknight1', 'EvanAntunano', 'umekow', 'dmaack', 'rrrbba'
];

class GithubCard extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
        console.log('Constructor is running');
    }

    componentDidMount() {
        console.log('cdm running') 
        users.map(user => {
            axios.get(`https://api.github.com/users/${user}`)
          
            .then (data => {
               const card = this.state.data
            //    const cards = document.querySelector('.cards')
            //    cards.appendChild(card)
               this.setState({
                   users: data.data,
                   name: data.data.name
               });
             })
          try {
            
          } catch (error) {
            document.querySelector('.cards').textContent = 'Retrieval Error Detecting, Commencing Motherboard Combustion.'
          }
          })
    }

    componentDidUpdate() {
        console.log('cDU running');
        console.log(this.state.users);
    }

    render() {
        console.log('rendering');
        return (
          <div className="App">
            <p users={this.state.users.name} />
            <p>{this.state.name}</p>
            <Users users={this.state.users} />
          </div>
        );
      }

}

export default GithubCard