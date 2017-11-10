import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <AppBar
                title="CoWork"
                iconElementRight={<FlatButton label="新建项目"/>}
            />
        )
    }
}

export default Header