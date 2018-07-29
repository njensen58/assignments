import React from 'react'
import { connect } from 'react-redux'
import { saveDie } from '../../redux/dicebox'



const Die = ({ die, saveDie, user, name, dice }) => {

    // Update db if user select/deselect die 
    // Checks if roll count is 0 and will disallow die selection
    const selectDie = () => {
        if(dice.rollCount !== 0){
        const updatedDie = {
                value: die.value,
                selected: !die.selected
            }
            saveDie(user, { [name]: updatedDie })
        }
    } 
    
    // UI change on die select
    const colorSelect = () => die.selected ? "cornflowerblue" : 'white'

    const devStyles = {
        die: {
            border: '1px solid black',
            borderRadius: "3px",
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colorSelect()
        }
    }

    return (
        <div style={ devStyles.die } onClick={ selectDie }>
            {die.value}
        </div>
    )
}

export default connect(state=>state, { saveDie })(Die)