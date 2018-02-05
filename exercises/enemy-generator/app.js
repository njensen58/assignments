// THIS CREATES 100 Random enemies and stores it in an enemy array.

function EnemyGenerator(){
    this.type = type();
    this.hitpoints = hitPoints(this.type);
    this.defense = this.hitpoints * 3;
}


function type(){
    var enemyTypesArr = ['Ancient Dragon', 'Prowler', 'Mighty Grunt'];
    var randIndex = Math.floor(Math.random() * enemyTypesArr.length);
    var enemyType = enemyTypesArr[randIndex];
    return enemyType;
}

function hitPoints(enemyType){
    if(enemyType === 'Ancient Dragon'){
        return Math.floor(Math.random() * (100 - 80) + 80);
    }else if(enemyType === 'Prowler'){
        return Math.floor(Math.random() * (79 - 50) + 50);
    }else if(enemyType === 'Mighty Grunt'){
        return Math.floor(Math.random() * (49 - 20) + 20);
    }
}

var enemies = [];

for(var i = 0; i <= 100; i++){
    var newEnemy = new EnemyGenerator();
    enemies.push(newEnemy);
}

console.log(enemies);
