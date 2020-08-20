import React, { Component } from 'react';

class CreateUser extends Component {
  render() {
    return (
      <div>
        <input
          name="username"
          placeholder="계정명"
          onChange={this.props.onChange}
          value={this.props.username}
        />
        <input
          name="email"
          placeholder="이메일"
          onChange={this.props.onChange}
          value={this.props.email}
        />
        <button onClick={this.props.onCreate}>등록</button>
      </div>
    );
  }
}

export default CreateUser;
