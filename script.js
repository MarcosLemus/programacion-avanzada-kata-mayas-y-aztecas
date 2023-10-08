class Warrior {
    constructor(life, power){
        this.life = life
        this.power = power
    }

    attack() {
        console.log(`${this.power} + devuelve el valor` );
    }

    defend(damage) {
       this.life = this.life - damage
        console.log(this.life);
    }
}
const maya = new Warrior(100, 100);

 console.log(maya);
 
 class Maya extends Warrior {
    constructor(life, power) {
      super(life, power);
    }
    drinkColaCao() {
      this.power += 10;
    }
  }



class Aztec extends Warrior {
    constructor(life, power){
        super(life, power)
    }
    drinkNesquik() {
        this.life += 10
    }
}

let azteca = new Aztec(100, 100)
let mayita = new Maya(100, 100)

azteca.drinkNesquik();
mayita.drinkColaCao();

azteca.attack(mayita.defend())
mayita.defend(azteca.attack())


console.log(azteca);
console.log(mayita);

