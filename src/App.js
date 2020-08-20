import React, { Component } from 'react';
import axios from 'axios';
import UserList from './UserList';
import CreateUser from './CreateUser';

class App extends Component {
  constructor(props) {
    super(props);
    this.nextId = 0;
    this.state = {
      users: [],
      inputs: {
        username: '',
        email: '',
      },
    };
  }

  fetchUsers = async () => {
    try {
      const datas = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );
      const users = datas.data.map((user) => {
        return {
          id: user.id,
          username: user.username,
          email: user.email,
          done: false,
        };
      });
      this.setState({
        users,
        inputs: {
          username: '',
          email: '',
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  componentDidMount() {
    this.fetchUsers();
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevStatus) => ({
      inputs: {
        ...prevStatus.inputs,
        [name]: value,
      },
    }));
  };

  onCreate = () => {
    const { users } = this.state;
    const { username, email } = this.state.inputs;
    const user = {
      id: users[users.length - 1].id + 1,
      username,
      email,
      done: false,
    };
    this.setState((prevState) => {
      return {
        users: [...prevState.users, user],
        inputs: {
          username: '',
          email: '',
        },
      };
    });
  };

  onRemove = (id) => {
    this.setState((prevState) => {
      let filteredUsers = prevState.users.filter((user) => user.id !== id);
      return {
        users: filteredUsers,
        ...prevState.inputs,
      };
    });
  };

  onToggle = (id) => {
    this.setState((prevState) => {
      let temp = prevState.users.map((user) => {
        if (user.id === id) {
          user.done = !user.done;
          return user;
        } else {
          return user;
        }
      });
      return {
        uesrs: temp,
        ...prevState.inputs,
      };
    });
  };

  render() {
    const { inputs, users } = this.state;
    return (
      <div>
        <UserList
          users={users}
          onRemove={this.onRemove}
          onToggle={this.onToggle}
        />
        <CreateUser
          onChange={this.onChange}
          onCreate={this.onCreate}
          username={inputs.username}
          email={inputs.email}
        />
      </div>
    );
  }
}

export default App;
