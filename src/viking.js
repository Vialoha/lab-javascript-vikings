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
            return this.name + " has received " + damage + " points of damage";
        }
        else {
            return this.name + " has died in act of combat"
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
        
        const randomSaxon = saxonArmy[Math.floor(Math.random() * saxonArmy.length)];
        const randomViking = vikingArmy[Math.floor(Math.random() * vikingArmy.length)];
        const damage = randomViking.strength;
        const result= randomSaxon.receiveDamage(damage);

        if (randomSaxon.health<=0){
            this.saxonArmy.splice(randomSaxon,1);
        }

        return result;

        


    }
    saxonAttack(){

    }

    showStatus(){
        if(saxonsArmy.length===0){
            return "Vikings have won the war of the century!";
        }
        else if (vikingsArmy.length===0){
            return "Saxons have fought for their lives and survived another day...";
        }
        else{
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
