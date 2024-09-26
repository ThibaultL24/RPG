import { Character } from "./character.js";

export class Berserker extends Character {
  constructor(name) {
    super(name, 14, 5, 0);  
    this.specialAttackCost = 0;
  }

  // Attaque normale
  dealDamage(victim) {
    const damage = 4;  // Les dégâts sont élevés car le Berserker est offensif
    victim.hp -= damage;
    console.log(`${this.name} inflige ${damage} points de dégâts à ${victim.name}`);
    if (victim.hp <= 0) {
      victim.status = "looser";
    }
  }

  // Attaque spéciale
  specialAttack(victim) {
    console.log(
      `${this.name} utilise Rage, gagne +2 dégâts permanents mais perd 1 point de vie.`
    );
    this.dmg += 2;
    this.hp -= 1;
    victim.takeDamage(this.dmg);
  }
}

export default Berserker;
