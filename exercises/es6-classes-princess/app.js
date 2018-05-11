class Player {
    constructor(name, totalCoins, status, star){
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.star = star;
        this.gameActive = true;
    }

    setName(namePicked) { this.name = namePicked }

    gotHit() {
        if(this.star){
            console.log("Star power deflected the attacks!! But then it wore off... ")
            this.star = false;
            return
        }
        if(this.status === "Powered Up"){
            this.status = "Big"
        } else if(this.status === "Big"){
            this.status = "Small"
        } else if(this.status === "Small"){
            this.status = "Dead";
            this.gameActive = false;
        }
    }

    gotPowerup() {
        this.star = false;
        if(this.status === "Dead"){
            console.log("you can't power up a dead man")
        } else if(this.status === "Small"){
            this.status = "Big"
        } else if(this.status === "Big"){
            this.status = "Powered Up"
        } else if(this.status === "Powered Up"){
            console.log("STAAAARR POOOOWWWEEERRR!")
            this.star = true;
        }
    }

    addCoin() { this.totalCoins++ }

    print() {
        console.log(
        `Name: ${this.name},
         Total Coins: ${this.totalCoins}
         Status: ${this.status}
         Star: ${this.star}`
        )
    }
}


const player1 = new Player('Mario', 10, "Big", false)


function randomRange() {
    let num = Math.floor(Math.random() * 3);
    if(num === 0) {
        player1.gotHit();
        player1.print();
    } else if(num === 1) {
        player1.gotPowerup();
        player1.print();
    } else if(num === 2) {
        player1.addCoin();
        player1.print();
    }
    if(!player1.gameActive){
        clearInterval(playGame)
    }
}


const playGame = setInterval(randomRange, 100)
