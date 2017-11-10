import React from 'react'
import ProjectList from './subpage/ProjectsArea'
import './style.less'
import ProjectDialog from './subpage/ProjectDialog';
import { initialize } from 'redux-form';
import { connect } from 'react-redux';
import {reloadProjects} from '../../actions/projectList'
import RaisedButton from 'material-ui/RaisedButton';
import { show } from 'redux-modal'



class Home extends React.Component {

    render() {
        return (
            <div>
                <ProjectList/>
                <RaisedButton label="Default" onClick={()=>this.handleOpen('project-dialog')}/>
                <ProjectDialog onSubmit={this.handleSubmit.bind(this)}/>
            </div>
        )
    }

    handleSubmit(data) {
        console.log('Submission received!', data);
        this.props.dispatch(initialize('project', {})); // clear form
        this.props.dispatch(reloadProjects())
    }

    handleOpen(name){
        this.props.dispatch(show(name, { message: `This is a ${name} modal` }))
    };


}



export default connect()(Home)