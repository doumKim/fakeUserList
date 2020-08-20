import React, { Component } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

const users = [
  {
    id: 1,
    username: 'velopert',
    email: 'public.velopert@gmail.com',
    done: false,
  },
  {
    id: 2,
    username: 'tester',
    email: 'tester@example.com',
    done: false,
  },
  {
    id: 3,
    username: 'liz',
    email: 'liz@example.com',
    done: false,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.nextId = 4;
    this.state = {
      users,
      inputs: {
        username: '',
        email: '',
      },
    };
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
    const { username, email } = this.state.inputs;
    const user = {
      id: this.nextId,
      username,
      email,
      done: false,
    };
    this.nextId += 1;
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
    console.log('remove');
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
    console.log('TOGGLE');
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
