import React from 'react'
import ProjectList from './subpage/ProjectsArea'
import './style.less'
import ProjectDialog from './subpage/ProjectDialog';
import { initialize } from 'redux-form';
import { connect } from 'react-redux';
import {reloadProjects} from '../../actions/projectList'
import { hide } from 'redux-modal'
import {postProject} from '../../fetch/home/home'



class Home extends React.Component {

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
        postProject(data.name, data.description);
        this.props.dispatch(hide('project-dialog'));
        this.props.dispatch(initialize('project', {})); // clear form
        this.props.dispatch(reloadProjects())
    }
}



export default connect()(Home)