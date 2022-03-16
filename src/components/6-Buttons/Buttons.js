import React, { Component } from 'react';
import styles from './Buttons.css';

export default class Buttons extends Component {

	render() { 
	  return (
		<div>
			<button className={styles.danger}>Danger btn</button>
			<button className={styles.success}>Success btn</button>
			<button className={styles.warning}>Warning btn</button>
		</div>
	  );
	}
  
  };