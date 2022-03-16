import React, { Component } from 'react';

export default class Themes extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { theme } = this.props;

        return <div className={theme.outer}>
            <div className={theme.inner}>
                Themes
            </div>
        </div>
    }

};