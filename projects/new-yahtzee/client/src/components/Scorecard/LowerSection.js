import React from "react"
import { connect } from "react-redux"
import ScoreItem from './ScoreItem'


// 8 Score Items 1, 2, 3, 4, 5, 6, bonus, total
const LowerSection = props => {
    return (
        <div style={ props.s }>
            Lower Section
            <ScoreItem />
            <ScoreItem />
            <ScoreItem />
            <ScoreItem />
            <ScoreItem />
            <ScoreItem />
            <ScoreItem />
            <ScoreItem />
        </div>
    )
}

export default connect(null, {})(LowerSection) 