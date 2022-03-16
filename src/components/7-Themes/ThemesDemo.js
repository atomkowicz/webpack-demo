
import React, { Component } from 'react';

import Themes from './Themes';
import Snippet from 'shared/Snippet/Snippet';
import themeARaw from '!!raw!./ThemeA.css';
import themeBRaw from '!!raw!./ThemeB.css';
import demo from '!!raw!./ThemesDemo.js';
import js from '!!raw!./Themes';
import themeA from './ThemeA.css';
import themeB from './ThemeB.css';

export default class ThemesDemo extends Component {

  render() {
    const files = [
      { name: 'Themes.js', source: js },
      { name: 'ThemesDemo.js', source: demo },
      { name: 'ThemeA.css', source: themeARaw },
      { name: 'ThemeB.css', source: themeBRaw },
    ];

    return (
      <Snippet files={files}>
        <Themes theme={themeA}/>
        <Themes theme={themeB}/>
      </Snippet>
    );
  }

};