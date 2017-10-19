import React from 'react'
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Col } from 'react-flexbox-grid';

class ProjectGrid extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const data = this.props.data;
        const index = this.props.index;
        return (
            <Col  xs={6} md={3}>
                <Card>
                    <CardTitle title={data.name} />
                    <CardText>
                        {data.description}
                    </CardText>
                </Card>
            </Col>
        )
    }
}

export default ProjectGrid