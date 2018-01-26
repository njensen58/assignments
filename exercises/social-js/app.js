var artist = {
    name: 'Bobby Chiu',
    age: 34,
    specialization: 'Creatures',
    favoriteArtists: ['Van Gogh', 'Monet', 'Rembrandt', 'Sargent'],
    favoriteWorks: [
        {
            name: 'Water Lillies',
            artist: 'Monet'
        },
        {
            name: 'Street in Venice',
            artist: 'Sargent'
        }
    ],
    giveMotivation: function(){
        console.log('You can do it!');
    },
    artistFriends: [
        {
            name: 'Jason Seiler',
            specialization: 'Portraits',
            famousWork: 'Pope Time Magazine',
            age: 37,
            giveMotivation: this.giveMotivation,
            favoriteWorks: [
                {
                    name: 'Starry  Night',
                    artist: 'Vincent Van Gogh'
                },
                {
                    name: 'El Jaleo',
                    artist: 'Sargent'
                }
            ]
        },
        {
            name: 'Jonathan Hardesty',
            specialization: 'Realism',
            age: 36,
            giveMotivation: this.giveMotivation,
            favoriteWorks: [
                {
                    name: 'Mona Lisa',
                    artist: 'Vincent Van Gogh'
                },
                {
                    name: 'Guernica',
                    artist: 'Pablo Picasso'
                }
            ]
        }
    ]
}

artist.artistFriends[1].hasChildren = true;
artist.artistFriends[1].yearsWorking = 20;
artist.artistFriends[0].favoriteWorks.push({
    name: 'Portrait of Madame X',
    artist: 'Sargent'
},
{
    name:'Carnation Lily',
    artist: 'Sargent'
})
