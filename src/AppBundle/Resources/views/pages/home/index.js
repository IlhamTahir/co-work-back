import React from 'react'
import StageBar from '../../components/stage-bar'


class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div>
                <StageBar/>
            </div>
        )
    }
}

export default Home