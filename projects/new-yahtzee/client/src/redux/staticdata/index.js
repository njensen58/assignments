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
    }
]


export const rightRows = [
    { name: "3 of a Kind",
       _id: uuidv1(),
       scoreType:"threeOfAKind"      
    },
    { name: "4 of a Kind",
       _id: uuidv1(),
       scoreType:"fourOfAKind"      
    },
    { name: "Small Straight",
       _id: uuidv1(),
       scoreType:"smallStraight"      
    },
    { name: "Large Straight",
       _id: uuidv1(),
       scoreType:"largeStraight"      
    },
    { name: "Full House",
       _id: uuidv1(),
       scoreType:"fullHouse"      
    },
    { name: "Chance",
       _id: uuidv1(),
       scoreType:"chance"      
    },
    { name: "Yahtzee",
       _id: uuidv1(),
       scoreType:"yahtzee"      
    },
    { name: "Yahtzee Bonus",
       _id: uuidv1(),
       scoreType: "bonus"      
    }
]