import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { reduxForm, initialize, Field } from 'redux-form';

const customContentStyle = {
    width: '600px',
};

class ProjectDialog extends React.Component {
    render() {


        const renderTextField = ({
                                     input,
                                     hintText,
                                     floatingLabelText,
                                    fullWidth,
                                     row,
                                     meta: { touched, error }
                                 }) => (
            <TextField
                hintText={hintText}
                floatingLabelText={floatingLabelText}
                errorText={touched && error}
                fullWidth={fullWidth}
                {...input}
            />
        )


        const { handleSubmit,  reset, submitting } = this.props
        const actions = [
            <FlatButton
                label="提交"
                primary={true}
                onClick={handleSubmit}
                disabled={ submitting}
            />,
            <FlatButton
                label="取消"
                secondary={true}
                disabled={submitting}
            />,
        ];

        return (
                <Dialog
                    title="创建项目"
                    actions={actions}
                    modal={false}
                    open={true}
                    //onRequestClose={()=>this.handleClose()}
                    contentStyle={customContentStyle}
                >
                    <form onSubmit={handleSubmit} className="project">
                    <Grid fluid>
                        <Row>
                            <Col md={12}>

                    <Field
                        name="name"
                        component={renderTextField}
                        hintText="请输入项目名称"
                        floatingLabelText="项目名称"
                        fullWidth={true}
                    />
                            </Col>
                            <Col md={12}>
                    <Field
                        name="description"
                        component={renderTextField}
                        hintText="请输入项目描述"
                        floatingLabelText="项目描述"
                        fullWidth={true}
                        multiLine={true}
                        rowsMax={6}
                    />
                            </Col>
                        </Row>
                    </Grid>
                    </form>

                </Dialog>
        );
    }

    // submitDialog(){
    //     const name = document.getElementById('name').value;
    //     const description = document.getElementById('description').value;
    //     const result = postProject(name, description)
    //     result.then((res) => {
    //         return res.json()
    //     }).then((json) => {
    //         const data = json;
    //         if (data) {
    //             this.handleClose();
    //             this.props.transferLoadingStatus(true)
    //         }
    //     })
    // }

    // componentWillReceiveProps(nextProps){
    //     this.setState({
    //         open: nextProps.projectDialogStatus
    //     });
    // }

}

ProjectDialog = reduxForm({
    form: 'project'
})(ProjectDialog);

export default ProjectDialog