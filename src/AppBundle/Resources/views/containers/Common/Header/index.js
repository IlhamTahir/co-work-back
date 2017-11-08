import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
};
class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <MuiThemeProvider>
            <AppBar
                title="CoWork"
                iconElementLeft={<RaisedButton label="Primary" primary={true} style={style} />}
            />
            </MuiThemeProvider>
        )
    }
}

export default Header