import uuidv1 from 'uuid/v1'

// Static Gamecard Data
export const leftRows = [
    { name: "Ones",
       _id: uuidv1(),
       scoreType: 'ones'      
    },
    { name: "Twos",
       _id: uuidv1(),
       scoreType: 'twos'      
    },
    { name: "Threes",
       _id: uuidv1(),
       scoreType: 'threes'      
    },
    { name: "Fours",
       _id: uuidv1(),
       scoreType: 'fours'      
    },
    { name: "Fives",
       _id: uuidv1(),
       scoreType: 'fives'      
    },
    { name: "Sixes",
       _id: uuidv1(),
       scoreType: 'sixes'      
    },
    { name: "Left Bonus",
       _id: uuidv1(),
       scoreType: 'bonus'      
    },
    { name: "Left Total",
       _id: uuidv1(),
       scoreType: 'lTot'      
    }
]


export const rightRows = [
    { name: "3 of a Kind",
       _id: uuidv1(),
       scoreType:"3ofK"      
    },
    { name: "4 of a Kind",
       _id: uuidv1(),
       scoreType:"4ofK"      
    },
    { name: "Small Straight",
       _id: uuidv1(),
       scoreType:"smStrt"      
    },
    { name: "Large Straight",
       _id: uuidv1(),
       scoreType:"lgStrt"      
    },
    { name: "Full House",
       _id: uuidv1(),
       scoreType:"flHs"      
    },
    { name: "Chance",
       _id: uuidv1(),
       scoreType:"chnc"      
    },
    { name: "Yahtzee",
       _id: uuidv1(),
       scoreType:"yahz"      
    },
    { name: "Yahtzee Bonus",
       _id: uuidv1(),
       scoreType:"yahzb"      
    },
    { name: "Right Total",
       _id: uuidv1(),
       scoreType:"rTot"      
    }
]