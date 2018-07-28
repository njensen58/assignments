import React from "react"
import { connect } from "react-redux";
import ScoreItem from './ScoreItem'

//10  score items: 3ofk, 4ofk, fullH, smStr, lgStr, yhz, chc, yhz bns, total
const UpperSection = props => {
    return (
        <div style={ props.s }>
            <ScoreItem />
            <ScoreItem />
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

export default connect(state=>state, {})(UpperSection)