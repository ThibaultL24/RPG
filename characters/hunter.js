import { Character } from "./character.js";

export class Hunter extends Character {
  constructor(name) {
    super(name, 12, 8, 80);  // Le chasseur a des PV modérés et un bon équilibre entre attaque et mana
    this.specialAttackCost = 25;
  }

  // Attaque normale
  dealDamage(victim) {
    const damage = 4;  // Le chasseur inflige des dégâts constants avec son arc
    victim.hp -= damage;
    console.log(`${this.name} tire une flèche et inflige ${damage} points de dégâts à ${victim.name}`);
    if (victim.hp <= 0) {
      victim.status = "looser";
    }
  }

  // Attaque spéciale
  specialAttack(victim) {
    if (this.mana >= this.specialAttackCost) {
      console.log(`${this.name} utilise Rain of Arrows, inflige 6 points de dégâts à ${victim.name}.`);
      victim.takeDamage(6);  // Dégâts élevés pour une attaque à distance
      this.mana -= this.specialAttackCost;
    } else {
      console.log(`${this.name} n'a pas assez de mana pour lancer Rain of Arrows.`);
    }
  }
}

export default Hunter;
