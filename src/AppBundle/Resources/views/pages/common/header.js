import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <MuiThemeProvider>
            <AppBar
                title="Title"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
            </MuiThemeProvider>
        )
    }
}

export default Header