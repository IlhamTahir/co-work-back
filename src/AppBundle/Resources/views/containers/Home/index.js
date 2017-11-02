import React from 'react'
import ProjectList from './subpage/ProjectsArea'
import './style.less'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ProjectDialog from './subpage/ProjectDialog';

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
                <FloatingActionButton onClick={()=>this.openProjectDialog()}>
                    <ContentAdd />
                </FloatingActionButton>
                <ProjectList loadingStatus={this.state.loadingStatus} transferLoadingStatus = {loadingStatus => this.transferLoadingStatus(loadingStatus)}/>

                <ProjectDialog projectDialogStatus={this.state.projectDialogStatus} transferDialogStatus = {projectDialogStatus => this.transferDialogStatus(projectDialogStatus)}
                               transferLoadingStatus = {loadingStatus => this.transferLoadingStatus(loadingStatus)}/>
            </div>
        )
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

    openProjectDialog(){
        this.setState({
            projectDialogStatus: true
        })
    }

    reloadProjectList(){
        this.setState({
            loadingStatus: true
        })
    }

}

export default Home