import React from 'react'
import StageBar from '../../components/stage-bar'
import Board from '../../components/board'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div>
                <Board />
            </div>
        )
    }
}

export default Home