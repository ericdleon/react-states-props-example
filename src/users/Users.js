//Class Component
import React, { Component } from 'react';
import User from './User';

class Users extends Component {
  state = {
    users: [
      {name: "Jon", age:20},
      {name: "Bob", age:30},
      {name: "Jane", age:14},
      {name: "Bill", age:35},
      {name: "Jack", age:17},
    ],
    title: "Users List"
  };

makeMeYounger = () => {
  const newState = this.state.users.map((user) => {
    const tempUser = user;
    tempUser.age -=10;
    if(tempUser.age < 0) return tempUser.age = 0;
    return tempUser;
  });
  this.setState({
    newState
  });
}

  render() {
    return (
      <div>
        <button onClick={this.makeMeYounger}>Make Us 10 Years Younger!</button>
        <br/>
        <h1>{this.state.title}</h1>

        {
          this.state.users.map((user) => {
            return <User age={user.age}>{user.name}</User>
          })
        }

      </div>
    );
  }
}

export default Users;
