import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {reduxForm, initialize, Field} from 'redux-form';

const customContentStyle = {
    width: '600px',
};
const validate = values => {
    const errors = {};
    const requiredFields = [
        'name',
        'description'
    ];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = '请填写' + field
        }
    });
    return errors
};

const renderTextField = ({
                             input,
                             label,
                             meta: {touched, error}
                         }) => (
    <TextField
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
    />
)

class ProjectDialog extends React.Component {
    render() {
        const {handleSubmit, pristine, reset, submitting} = this.props

        const actions = [
            <FlatButton
                label="提交"
                primary={true}
                onClick={handleSubmit}
                disabled={submitting}
            />,
            <FlatButton
                label="取消"
                secondary={true}
                disabled={submitting}
                onClick={reset}
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
                                    label="项目名称"
                                />
                            </Col>
                            <Col md={12}>
                                <Field
                                    name="description"
                                    component={renderTextField}
                                    label="项目名称"
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
    form: 'project',
    validate
})(ProjectDialog);

export default ProjectDialog