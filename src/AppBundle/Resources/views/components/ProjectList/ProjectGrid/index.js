import React from 'react'
import {Card, CardMedia, CardTitle, CardText, CardActions} from 'material-ui/Card';
import { Col } from 'react-flexbox-grid';
import Chip from 'material-ui/Chip';
import {Link} from 'react-router-dom'

import './style.less'

class ProjectGrid extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const data = this.props.data;
        return (
            <Col  xs={6} md={3}>
                <Link to={'/project/' + data.id}>
                <Card className="project-grid">
                    <CardTitle title={data.name} />
                    <CardText>
                        {data.description}
                    </CardText>
                    <CardActions>
                        <Chip>2017-11-26</Chip>
                    </CardActions>
                </Card>
                </Link>
            </Col>
        )
    }
}

export default ProjectGrid