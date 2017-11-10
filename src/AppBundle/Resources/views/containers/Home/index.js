import React from 'react'
import ProjectList from './subpage/ProjectsArea'
import './style.less'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ProjectDialog from './subpage/ProjectDialog';
import { initialize } from 'redux-form';
import { connect } from 'react-redux';



class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            loadingStatus: false,
            projectDialogStatus: false,
            msg:''
        }
    }
    render() {
        return (
            <div>
                <ProjectList/>
                <ProjectDialog onSubmit={this.handleSubmit.bind(this)}/>
            </div>
        )
    }

    handleSubmit(data) {
        console.log('Submission received!', data);
        this.props.dispatch(initialize('project', {})); // clear form
    }

    transferDialogStatus(projectDialogStatus) {
        this.setState({
            projectDialogStatus
        });
    }

    transferLoadingStatus(loadingStatus) {
        this.setState({
            loadingStatus
        });
    }
}

export default connect()(Home)