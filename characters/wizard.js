import { Character } from "./character.js";

export class Wizard extends Character {
  constructor(name) {
    super(name, 10, 12, 100);  // PV modérés et beaucoup de mana pour correspondre à un mage
    this.specialAttackCost = 30;
  }

  // Attaque normale
  dealDamage(victim) {
    const damage = 3;  // Le sorcier inflige des dégâts magiques modérés
    victim.hp -= damage;
    console.log(`${this.name} lance une attaque magique et inflige ${damage} points de dégâts à ${victim.name}`);
    if (victim.hp <= 0) {
      victim.status = "looser";
    }
  }

  // Attaque spéciale
  specialAttack(victim) {
    if (this.mana >= this.specialAttackCost) {
      console.log(`${this.name} utilise Fireball, inflige 7 points de dégâts à ${victim.name}.`);
      victim.takeDamage(7);  // Dégâts élevés pour l'attaque spéciale du mage
      this.mana -= this.specialAttackCost;
    } else {
      console.log(`${this.name} n'a pas assez de mana pour lancer Fireball.`);
    }
  }
}

export default Wizard;
