import React from 'react'
import Project from './subpage/project'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div>
                <Project/>
            </div>
        )
    }

}

export default Home