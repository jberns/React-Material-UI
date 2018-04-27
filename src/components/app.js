import React, { Component } from 'react';
import ButtonTest from './component_button';
import SimpleMenu from './component_menu';
import MenuListComposition from './menu-popup';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>React simple starter</div>

        <div><ButtonTest /></div>

        <div><SimpleMenu /></div>

        <div><MenuListComposition /></div>


      </div>

    );
  }
}
