//Pokedex to store Pokemon
const dex = [];
for(let i = 1; i < 152; i++) {
    dex.push(undefined);
}

//Factory function to build Pokemon objects for Pokedex
const pokedexFactory = (name, pkdexNum, type1, type2, baseHP, baseAttack, baseDefense, baseSpcAttack, baseSpcDefense, baseSpeed, evolvesInto, evolveLevel, evolvesFrom) => {
    return {
        name,
        pkdexNum,
        type1,
        type2, 
        baseHP,
        baseAttack,
        baseDefense,
        baseSpcAttack,
        baseSpcDefense,
        baseSpeed,
        evolvesInto,
        evolveLevel,
        evolvesFrom
    }
};

const pidgey = pokedexFactory("Pidgey", 16, "Normal", "Flying", 40, 45, 40, 35, 35, 56, 17, 18, undefined);
const pidgeotto = pokedexFactory("Pidgeotto", 17, "Normal", "Flying", 63, 60, 55, 50, 50, 71, 18, 36, 16);
const pidgeot = pokedexFactory("Pidgeot", 18, "Normal", "Flying", 83, 80, 75, 70, 70, 91, undefined, undefined, 17);

dex[pidgey.pkdexNum] = pidgey;
dex[pidgeotto.pkdexNum] = pidgeotto;
dex[pidgeot.pkdexNum] = pidgeot;

console.log(dex[18]);


//Factory function to build Pokemon objects
/*
const pokemonFactory = (pkdexNum, name, type1, type2, sex, baseHP, baseAttack, baseDefense, baseSpcAttack, baseSpcDefense, baseSpeed, evolvesInto, evolveLevel, evolvesFrom) => {
    return {
        pkdexNum,
        name,
        type1,
        type2, 
        sex,
        baseHP,
        baseAttack,
        baseDefense,
        baseSpcAttack,
        baseSpcDefense,
        baseSpeed,
        evolvesInto,
        evolveLevel,
        evolvesFrom,
        level: 1,

        //Calculates actual stats
        hp: 2 * this.baseHP * this.level / 100 + this.level + 10,
        attack: 2 * this.baseAttack * this.level / 100 + 5,
        defense: 2 * this.baseDefense * this.level / 100 + 5,
        spcAttack: 2 * this.baseSpcAttack * this.level / 100 + 5,
        spcDefense: 2 * this.baseSpcDefense * this.level / 100 + 5,
        speed: 2 * this.baseSpeed * this.level / 100 + 5,

        updateStats: () => {
            this.hp = 2 * this.baseHP * this.level / 100 + this.level + 10;
            this.attack = 2 * this.baseAttack * this.level / 100 + 5;
            this.defense = 2 * this.baseDefense * this.level / 100 + 5;
            this.spcAttack = 2 * this.baseSpcAttack * this.level / 100 + 5;
            this.spcDefense = 2 * this.baseSpcDefense * this.level / 100 + 5;
            this.speed = 2 * this.baseSpeed * this.level / 100 + 5;
        },

        evolve: () => {

        }
        checkEvolution: () => {
            if(this.evolvesInto) {
                if(this.level >= this.evolveLevel) {
                    this.evolve();
                }
            }
        },

        levelUp: () => {
            this.level++;
            this.checkEvolution();
            this.updateStats();
        }
    };
};
*/