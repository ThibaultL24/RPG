import { Character } from "./character.js";

export class Monk extends Character {
  constructor(name) {
    super(name, 14, 8, 50);  // Ajustement des PV et du mana pour correspondre au rôle de soutien
    this.specialAttackCost = 30;
  }

  // Attaque normale
  dealDamage(victim) {
    const damage = 2; // Dégâts infligés
    victim.hp -= damage;
    console.log(`${this.name} inflige ${damage} points de dégâts à ${victim.name}`);
    if (victim.hp <= 0) {
      victim.status = "looser";
    }
  }

  // Attaque spéciale : soin
  specialAttack(victim) {
    if (this.mana >= this.specialAttackCost) {
      console.log(`${this.name} utilise Soin Sacré, soigne 8 PV.`);
      this.hp += 8;  // Soigne le moine
      this.mana -= this.specialAttackCost;
    } else {
      console.log(`${this.name} n'a pas assez de mana pour utiliser Soin Sacré.`);
    }
  }
}

export default Monk;
