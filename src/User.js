import React, { Component } from 'react';

class User extends Component {
  render() {
    const { onToggle, user, onRemove } = this.props;
    return (
      <div
        onClick={() => onToggle(user.id)}
        style={
          user.done
            ? { textDecoration: 'line-through', color: 'red' }
            : { textDecoration: 'none' }
        }
      >
        <b style={{ cursor: 'pointer' }}>{user.username}</b>{' '}
        <span>{user.email}</span>
        <button onClick={() => onRemove(user.id)}>삭제</button>
      </div>
    );
  }
}

export default User;
