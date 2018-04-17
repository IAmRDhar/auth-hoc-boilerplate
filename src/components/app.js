import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/**App component is responbsible 
          for showing the cascaded routes component
          **/}
        {this.props.children}
      </div>
    );
  }
}
