//Pokedex to store Pokemon
const dex = [];
for(let i = 1; i < 152; i++) {
    dex.push(undefined);
}

const attackDict = [];

//Factory function to build Pokemon objects for Pokedex
const pokedexFactory = (name, pkdexNum, type1, type2, baseHp, baseAttack, baseDefense, baseSpcAttack, baseSpcDefense, baseSpeed, evolvesInto, evolveLevel, evolvesFrom) => {
    return {
        name,
        pkdexNum,
        type1,
        type2,
        baseStats: { 
            baseHp,
            baseAttack,
            baseDefense,
            baseSpcAttack,
            baseSpcDefense,
            baseSpeed,
        },
        evolvesInto,
        evolveLevel,
        evolvesFrom
    };
};

//Factory function to create attacks for attack dictionary
const attackFactory = (attackName, type, category, power, accuracy) => {
    return {
        attackName,
        type,
        category,
        power,
        accuracy
    };
}

const pidgeyDex = pokedexFactory("Pidgey", 16, "Normal", "Flying", 40, 45, 40, 35, 35, 56, 17, 18, undefined);
const pidgeottoDex = pokedexFactory("Pidgeotto", 17, "Normal", "Flying", 63, 60, 55, 50, 50, 71, 18, 36, 16);
const pidgeotDex = pokedexFactory("Pidgeot", 18, "Normal", "Flying", 83, 80, 75, 70, 70, 91, undefined, undefined, 17);

dex[pidgeyDex.pkdexNum] = pidgeyDex;
dex[pidgeottoDex.pkdexNum] = pidgeottoDex;
dex[pidgeotDex.pkdexNum] = pidgeotDex;

// console.log(pidgeyDex);
// console.log(pidgey);

//Factory function to build Pokemon objects
const pokemonFactory = (pkdexNum, sex, nickname = undefined, level = 1) => {
    //Instantiates object from pokedex entry
    const pokeInstance = Object.assign({}, dex[pkdexNum]);
    pokeInstance.sex = sex;
    pokeInstance.nickname = nickname;
    pokeInstance.level = level;
    pokeInstance.actualStats = {};

    pokeInstance.updateStats = function() {
        let hpProportion = this.currentHp / this.actualStats.maxHp;
        this.actualStats.maxHp = Math.round(2 * this.baseStats.baseHp * this.level / 100 + this.level + 10);
        this.currentHp = this.actualStats.maxHp * hpProportion;
        this.actualStats.attack = Math.round(2 * this.baseStats.baseAttack * this.level / 100 + 5);
        this.actualStats.defense = Math.round(2 * this.baseStats.baseDefense * this.level / 100 + 5);
        this.actualStats.spcAttack = Math.round(2 * this.baseStats.baseSpcAttack * this.level / 100 + 5);
        this.actualStats.spcDefense = Math.round(2 * this.baseStats.baseSpcDefense * this.level / 100 + 5);
        this.actualStats.speed = Math.round(2 * this.baseStats.baseSpeed * this.level / 100 + 5);
    };

    pokeInstance.evolve = function() {
        Object.assign(this, dex[this.evolvesInto])
    };

    pokeInstance.checkEvolution = function() {
        if(this.evolvesInto) {
            if(this.level >= this.evolveLevel) {
                this.evolve();
            }
        }
    };

    pokeInstance.levelUp = function() {
        this.level++;
        this.checkEvolution();
        this.updateStats();
    };

    pokeInstance.updateStats();
    pokeInstance.currentHp = pokeInstance.actualStats.maxHp;

    return pokeInstance;
};

/*
const pidgey = pokemonFactory(16, "M", "Ace");
console.log(pidgey);
pidgey.levelUp();
pidgey.levelUp();
pidgey.levelUp();
pidgey.levelUp();
pidgey.levelUp();
pidgey.levelUp();
pidgey.levelUp();
pidgey.levelUp();
pidgey.levelUp();
pidgey.levelUp();
pidgey.levelUp();
pidgey.levelUp();
pidgey.levelUp();
pidgey.levelUp();
pidgey.levelUp();
pidgey.levelUp();
console.log(pidgey);
pidgey.levelUp();
console.log(pidgey);
pidgey.levelUp();
pidgey.levelUp();
pidgey.levelUp();
pidgey.levelUp();
pidgey.levelUp();
pidgey.levelUp();
pidgey.levelUp();
pidgey.levelUp();
pidgey.levelUp();
pidgey.levelUp();
pidgey.levelUp();
pidgey.levelUp();
pidgey.levelUp();
pidgey.levelUp();
pidgey.levelUp();
pidgey.levelUp();
pidgey.levelUp();
console.log(pidgey);
pidgey.levelUp();
console.log(pidgey);
pidgey.levelUp();
console.log(pidgey);
*/