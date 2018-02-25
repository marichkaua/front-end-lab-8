function combatHistory() {
    let wins = 0;
    let loses = 0;
    return {
        wins: wins,
        loses: loses
    };
}

function stats(setVars1) {
    let attack = setVars1['attack'];
    let hp = setVars1['hp'];
    let name = setVars1['name'];
    return {
        attack: attack,
        hp: hp,
        name: name
    };
}

function fighter(setVars) {
    let combatHistoryFighter = combatHistory();
    let fighterStats = stats(setVars);

    /////////
    function getName() {
        return fighterStats.name;
    }

    /////////
    function fight(enemyFighter) {
        blockVal = enemyFighter.block();
        console.log(blockVal);
        if (blockVal) {
            return false;
        } else {
            if (fighterStats.attack >= enemyFighter.hp) {
                enemyFighter.combatHistoryFighter.loses = enemyFighter.combatHistoryFighter.loses + 1;
                enemyFighter.fighterStats.hp = 0;
                combatHistoryFighter.wins = combatHistoryFighter.wins + 1;
            } else {
                enemyFighter.fighterStats.hp = enemyFighter.fighterStats.hp - fighterStats.attack;
            }
            return true;
        }
    }

    ////////////
    function blockEnemy() {
        return Boolean(Math.random() >= 0.5);
    }

    ///////////
    function getStats() {

        return {
            'name': fighterStats.name,
            'attack': fighterStats.attack,
            'hp': fighterStats.hp
        };
    }

    ////////
    function combatHistoryFighterFunc() {
        return combatHistoryFighter;
    }

    return {
        getName: getName,
        fight: fight,
        getStats: getStats,
        block: blockEnemy,
        getCombatHistory: combatHistoryFighterFunc,
        combatHistoryFighter: combatHistoryFighter,
        fighterStats: fighterStats,
        hp: fighterStats.hp
    };
}

function showResult(fighter) {
    console.log('Fighter', fighter.getName());
    console.log('- Combat stats:', fighter.getCombatHistory());
    console.log('- Properties:', fighter.getStats());
}

var fighter1 = fighter({
    name: 'John',
    attack: 100,
    hp: 100
});
var fighter2 = fighter({
    name: 'Kayn',
    attack: 50,
    hp: 300
});
var fighter3 = fighter({
    name: 'Bill',
    attack: 40,
    hp: 100
});

fighter1.fight(fighter2);
fighter1.fight(fighter3);

showResult(fighter1);
showResult(fighter2);
showResult(fighter3);
