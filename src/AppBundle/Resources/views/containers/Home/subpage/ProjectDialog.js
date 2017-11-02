import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {postProject} from "../../../fetch/home/home";


const customContentStyle = {
    width: '600px',
};

class ProjectDialog extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            open: this.props.projectDialogStatus
        }
    }
    render() {
        const actions = [
            <FlatButton
                label="提交"
                primary={true}
                onClick={()=>this.submitDialog()}
            />,
            <FlatButton
                label="取消"
                secondary={true}
                onClick={()=>this.handleClose()}
            />,
        ];
        return (
            <div>
                <Dialog
                    title="创建项目"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={()=>this.handleClose()}
                    contentStyle={customContentStyle}
                >
                    <Grid fluid>
                        <Row>
                            <Col md={12}>
                    <TextField
                        id="name"
                        hintText="请输入项目名称"
                        floatingLabelText="项目名称"
                        fullWidth={true}
                    />
                            </Col>
                            <Col md={12}>
                    <TextField
                        id="description"
                        hintText="请输入项目描述"
                        floatingLabelText="项目描述"
                        fullWidth={true}
                        multiLine={true}
                        rowsMax={6}
                    />
                            </Col>
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
        this.props.transferDialogStatus(false)
    }

    submitDialog(){
        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;
        const result = postProject(name, description)
        result.then((res) => {
            return res.json()
        }).then((json) => {
            const data = json;
            if (data) {
                this.handleClose();
                this.props.transferLoadingStatus(true)
            }
        })
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            open: nextProps.projectDialogStatus
        });
    }




}

export default ProjectDialog