import React from 'react';
import SuperHero from './SuperHero';
import data from './superheroes.json'

const App = () => {

    const sayCatchPhrase = (catchPhrase) => {
        alert(catchPhrase)
    }

    const mappedHeroes = data.superHeroes.map(hero => {
        return (
            <SuperHero
                name={hero.name}
                imgUrl={hero.imgUrl}
                sayCatchPhrase={sayCatchPhrase}
                catchPhrase={hero.catchPhrase}
            />
        )
    })

    return (
        <div>
            { mappedHeroes }
        </div>
    )
}

export default App;
