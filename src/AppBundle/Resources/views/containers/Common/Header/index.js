import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { show } from 'redux-modal'
import { connect } from 'react-redux';

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <AppBar
                title="CoWork"
                iconElementRight={<FlatButton label="新建项目" onClick={()=>this.handleOpen('project-dialog')}/>}
            />
        )
    }

    handleOpen(name){
        this.props.dispatch(show(name, { message: `This is a ${name} modal` }))
    };
}



export default connect()(Header)