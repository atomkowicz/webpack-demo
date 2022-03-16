import Buttons from './Buttons';

import React, { Component } from 'react';

import Snippet from 'shared/Snippet/Snippet';
import css from '!!raw!./Buttons.css';
import js from '!!raw!./Buttons.js';

export default class ButtonsDemo extends Component {

  render() {
    const files = [
      { name: 'Buttons.js', source: js },
      { name: 'Buttons.css', source: css },
    ];

    return (
      <Snippet files={files}>
        <Buttons />
      </Snippet>
    );
  }

};