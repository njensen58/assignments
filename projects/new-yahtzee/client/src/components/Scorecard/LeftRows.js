import React from "react"
import { connect } from "react-redux";
import ScoreItem from './ScoreItem'
import { leftRows } from '../../redux/staticdata'


// 8 Score Items 1, 2, 3, 4, 5, 6, bonus, total
const LeftRows = props => {
    return (
        <div style={ props.s }>
            { leftRows.map(item => 
                <ScoreItem 
                    name={ item.name } 
                    key={ item._id }
                    scoreType={ item.scoreType }
                 />) 
            }
        </div>
    )
}

export default connect(state=>state, {})( LeftRows )

