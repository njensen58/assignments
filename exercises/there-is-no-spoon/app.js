////// 1
var desk = {
    legs: 2,
    students: ['Nate', 'Mario'],
    isWood: false,
    knockOnWood: function(){
        console.log('This desk is not made of wood!')
    }
}

////// 2
var monitor = {
    brand: 'ASUS',
    input: 'HDMI',
    width: 20,
    isOn: true,
    startUp: function(){
        console.log('I\'m turning on!')
    }
}

////// 3
var muffin = {
    isEdible: true,
    type: 'Poppy seed',
    cost: 0,
    canIEatIt: function() {
        if(this.isEdible){
            console.log('Yes, this is safe to eat!');
        } else {
            console.log('No, this is highly toxic and will likely end you.');
        }
    }
}

////// 4
var cellPhone = {
    brand: 'Android',
    serviceProvider: 'T-mobile',
    isWorking: true,
    authorizedUsers: ['Steve', 'John'],
    canIUseIt: function(){
        for(var i = 0; i < this.authorizedUsers.length; i++){
        if(this.authorizedUsers[i] === 'Nate' || this.authorizedUsers[i] === 'Maeve') {
            console.log('Yes, you are authorized');
        } else {
            console.log('Unhand my device or I will end you.');
        }
    }
    }
}

////// 5
var classroom = {
    students: 11,
    classType: 'Full-stack JS',
    isFun: true,
    isTheClassTooFull: function(){
        if(this.students > 20){
            console.log('Class is to big for me');
        } else {
            console.log('No, which means more attention to Meeee!');
        }
    }
}

////// 6
var laptop = {
    make: 'Apple',
    model: 'Macbook Pro',
    user: 'Nate',
    isAuthorizedUser: function(){
        if(this.user === 'Nate'){
            console.log('Welcome ' + this.user + '!');
        } else {
            console.log('You are not authorized!')
        }
    }
}

////// 7
var spotifyPlaylist = {
    artists: ['John Mayer', 'Biggy', '21 Pilots'],
    tracks: 54,
    hasSubscription: true,
    artistsILove: function(){
        for(var i = 0; i < this.artists.length; i++) {
            console.log('I love the musical stylings of ' + this.artists[i] + '.');
        }
    }
}

var parrotTrouble=function(talking, hour) { 
	if(talking) {
    	if(hour > 0 && hour < 7) {
        	return true;
        } else if(hour > 20 && hour < 24) {
          	return true;
    } else if(!talking || (hour >= 7 || hour <=20) {
      		return false;
    }
}}
