import React from 'react'
import { Col } from 'antd';
import { Card } from 'antd';
import {Link} from 'react-router-dom'

import './style.less'

class ProjectGrid extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const data = this.props.data;
        return (
            <Col md={6}>
                <Link to={'/project/' + data.id}>
                    <Card className="project-grid">
                        <h1>{data.name}</h1>
                        <p>{data.description}</p>
                    </Card>
                </Link>
            </Col>
        )
    }
}

export default ProjectGrid