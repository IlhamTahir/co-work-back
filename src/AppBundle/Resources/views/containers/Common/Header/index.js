import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';


class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <MuiThemeProvider>
            <AppBar
                title="CoWork"
                iconElementRight={<IconButton iconClassName="fa fa-user"/>}
            />
            </MuiThemeProvider>
        )
    }
}

export default Header