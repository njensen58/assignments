import React from "react"
import { connect } from "react-redux"
import ScoreItem from './ScoreItem'
import { rightRows } from '../../redux/staticdata'


//10  score items: 3ofk, 4ofk, fullH, smStr, lgStr, yhz, chc, yhz bns, total/
const RightRows = props => {
    return (
        <div style={ props.s }>
            { rightRows.map(item => 
                <ScoreItem  
                    name={ item.name } 
                    key={ item._id }
                    scoreType={ item.scoreType }
                />) 
            }
        </div>
    )
}

export default connect(state=>state, {})( RightRows ) 