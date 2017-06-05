import React from 'react'
import { Card, CardTitle } from 'material-ui/Card';
import { Col } from 'react-flexbox-grid';
import TaskCard from './task-card'
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
    root: {
        minHeight: '660px',

        height: '100%'
    },
    stagesArea: {
        display: 'flex',
        overflow: 'auto',
        padding: '10px 0'
    },
    cardStyle: {
        height: '700px',
        padding: '0 10px'
    },
    titleStyle: {
        textAlign: 'center'
    }
};

const tilesData = [
    {
        title: 'Breakfast',
    },
    {
        title: 'Tasty burger',
    },
    {
        title: 'Camera',
    },
    {
        title: 'Morning',
    },
    {
        title: 'Hats',
    },
    {
        title: 'Honey',
    },
    {
        title: 'Vegetables',
    },
    {
        title: 'Water plant',
    },
    {
        title: 'Water plant',
    },
    {
        title: 'Water plant',
    },
    {
        title: 'Water plant',
    },
    {
        title: 'Water plant',
    },
];




class StageBar extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (

            <MuiThemeProvider>
                <div style={styles.root}>
                    <div style={styles.stagesArea}>
                        {tilesData.map((tile, index) => (
                            <Col  key={index} xs={6} md={3}>
                                <Card style={styles.cardStyle}>
                                    <CardTitle title={tile.title} titleStyle={styles.titleStyle}/>
                                    <TaskCard/>
                                </Card>
                            </Col>
                        ))}
                    </div>
                </div>
            </MuiThemeProvider>

        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
export default DragDropContext(HTML5Backend) (StageBar)