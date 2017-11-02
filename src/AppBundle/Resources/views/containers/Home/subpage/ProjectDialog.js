import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Grid, Row } from 'react-flexbox-grid';



class ProjectDialog extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false
        };
    }
    render() {
        const actions = [
            <FlatButton
                label="提交"
                primary={true}
                onClick={()=>this.handleClose()}
            />,
            <FlatButton
                label="取消"
                primary={false}
                onClick={()=>this.handleClose()}
            />,
        ];
        return (
            <div>
                <RaisedButton label="Dialog" onClick={()=>this.handleOpen()} />
                <Dialog
                    title="创建项目"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={()=>this.handleClose()}
                >
                    <Grid fluid>
                        <Row>
                    <TextField
                        hintText="请输入项目名称"
                        floatingLabelText="项目名称"
                        fullWidth={true}
                    />
                        </Row>
                        <Row>
                    <TextField
                        hintText="请输入项目描述"
                        floatingLabelText="项目描述"
                        fullWidth={true}
                        multiLine={true}
                        rowsMax={6}
                    />
                        </Row>
                    </Grid>
                </Dialog>
            </div>
        );
    }

    handleOpen(){
        this.setState({
            open: true
        })
    }

    handleClose(){
        this.setState({
            open:false
        })
    }




}

export default ProjectDialog