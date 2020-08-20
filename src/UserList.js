import React, { Component } from 'react';
import User from './User';

class UserList extends Component {
  render() {
    return (
      <div>
        {this.props.users.map((user) => {
          return (
            <User
              user={user}
              key={user.id}
              onRemove={this.props.onRemove}
              onToggle={this.props.onToggle}
            />
          );
        })}
      </div>
    );
  }
}

export default UserList;
