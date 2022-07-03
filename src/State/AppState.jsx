import React, { Component } from 'react';
import AppContext from './AppContext';

class AppState extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: "red"
        }


    }

    changeTheme = (theme) => {
        this.setState((prevState) => {
            return {
                theme
            }
        })
    }

    render() {
        const { changeTheme } = this
        const { theme } = this.state
        return (
            <AppContext.Provider value={{ theme, changeTheme }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppState;