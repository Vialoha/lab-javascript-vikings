// Soldier
class Soldier {
    constructor(health, strength){
        this.health= health;
        this.strength= strength;
    }

    attack (){
        return this.strength;
    }

    receiveDamage(damage){
      
        this.health -= damage;     
    }


};
// Viking
class Viking extends Soldier {

    constructor (name, health, strength){
        super (health,strength)
        this.name=name;
    }


    receiveDamage(damage){

       
        this.health-= damage;

        if (this.health>0){
            return `${this.name} has received ${damage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`
        }
        
    }

    battleCry(){
        return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier {
   

    receiveDamage(damage){
      
        this.health -= damage;

        if (this.health>0){
            return "A Saxon has received " + damage + " points of damage";
        }
        else {
            return "A Saxon has died in combat";
        }
    }

}

// War
class War {

    vikingArmy=[];
    saxonArmy=[];

    addViking(vikingSoldier){
        this.vikingArmy.push(vikingSoldier);
    }

    addSaxon(saxonSoldier){
        this.saxonArmy.push(saxonSoldier);
    }

///////

    vikingAttack(){
        
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        const damage = randomViking.strength;
        const result= randomSaxon.receiveDamage(damage);

        if (randomSaxon.health<=0){
            this.saxonArmy.splice(randomSaxon,1);
        }

        return result;

    }


    saxonAttack(){

        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        const damage = randomSaxon.strength;
        const result= randomViking.receiveDamage(damage);

        if (randomViking.health<=0){
            this.vikingArmy.splice(randomViking,1);
        }

        return result;

    }



    genericAttack(attackingArmy, defendingArmy){
        
        const randomAttacker = Math.floor(Math.random() * attackingArmy.length)
        const randomDefender = Math.floor(Math.random() * defendingArmy.length)
        const attacker = attackingArmy[randomAttacker];
        const defender = defendingArmy[randomDefender];
        const damage = attacker.strength
        const result = defender.receiveDamage(damage)
     
             if(defender.health <= 0){
                 defendingArmy.splice(randomDefender, 1)
             }
     
             return result
         }

         vikingAttack(){
            return this.genericAttack(this.vikingArmy, this.saxonArmy)
        }
    
        saxonAttack(){
            return this.genericAttack(this.saxonArmy, this.vikingArmy)
        }



    showStatus(){
        if(this.saxonArmy.length===0){
            return "Vikings have won the war of the century!";
        }
        else if (this.vikingArmy.length===0){
            return "Saxons have fought for their lives and survived another day...";
        }
        else{
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}



