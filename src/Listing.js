import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import api from './server';

class Listing extends Component {

  state = {
    users: [],
    error: null
  };

  componentDidMount() {
    api.get('/user')
      .then(res => {
        const users = res.data
        this.setState({ users });
      })
      .catch(error => {
        console.log('deu erro', error);
        this.setState({
          error
        });
      });
  }

  render() {
    const { error, users } = this.state;
    if (error) {
      return (
        <Container className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Listagem de Usuários</h1>
          </header >
          <p className="App-intro">Nenhum usuário encontrado</p>
          <Row>
            <Link to="/">Voltar</Link>
          </Row>
        </Container>
      )
    } else {
      return (
        <Container className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Listagem de Usuários</h1>
          </header >
          <ul className="List-user">
            { users.map(user => <li key={user.id}>{user.name} - {user.age}</li>) }
          </ul>
          <Row>
            <Link to="/">Voltar</Link>
          </Row>
        </Container>
      );
    }
  }
}
export default Listing;