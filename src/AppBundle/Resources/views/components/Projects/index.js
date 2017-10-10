import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Grid, Row, Col } from 'react-flexbox-grid';



class Projects extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const data = this.props.data
        return (
            <Grid fluid>
                <Row>
                {data.map((item, index) => {
                    return <Col  xs={6} md={3} key={index}>
                        <Card>
                            <CardMedia
                                overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                            >
                                <img src="images/nature-600-337.jpg" alt="" />
                            </CardMedia>
                            <CardTitle title={item.name} />
                            <CardText>
                                {item.description}
                            </CardText>
                        </Card>
                    </Col>
                })}
                </Row>
            </Grid>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
export default Projects