import { Character } from "./character.js";

export class Paladin extends Character {
  constructor(name) {
    super(name, 16, 5, 160);  
    this.specialAttackCost = 40;
  }

  // Attaque normale
  dealDamage(victim) {
    const damage = 3;  // Le Paladin a une attaque modérée car il est à la fois défensif et offensif
    victim.hp -= damage;
    console.log(`${this.name} inflige ${damage} points de dégâts à ${victim.name}`);
    if (victim.hp <= 0) {
      victim.status = "looser";
    }
  }

  // Attaque spéciale
  specialAttack(victim) {
    if (this.mana >= this.specialAttackCost) {
      console.log(
        `${this.name} utilise Healing Lightning, inflige 4 dégâts à ${victim.name} et se soigne de 4.`
      );
      victim.takeDamage(4);
      this.hp += 4;  
      this.mana -= this.specialAttackCost;
    } else {
      console.log(`${this.name} n'a pas assez de mana pour utiliser Healing Lightning.`);
    }
  }
}

export default Paladin;
