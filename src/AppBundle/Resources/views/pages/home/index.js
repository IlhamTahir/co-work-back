import React from 'react'
import StageBar from '../../components/stage-bar'
import BoardSmple from '../../components/board'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div>
                <BoardSmple />
            </div>
        )
    }
}

export default Home