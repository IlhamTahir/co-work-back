import React from 'react'
import ProjectList from './subpage/ProjectsArea'
import './style.less'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ProjectDialog from './subpage/ProjectDialog';

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div>
                <ProjectList/>
                <FloatingActionButton>
                    <ContentAdd />
                </FloatingActionButton>
                <ProjectDialog/>
            </div>
        )
    }

}

export default Home