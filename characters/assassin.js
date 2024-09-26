import { Character } from "./character.js";

export class Assassin extends Character {
  constructor(name) {
    super(name, 8, 6, 60);  
    this.specialAttackCost = 20;
  }

  // Attaque normale
  dealDamage(victim) {
    const damage = 4;  // Les assassins sont rapides et infligent des dégâts modérés
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
        `${this.name} utilise Shadow Hit, inflige 6 dégâts sans subir de dégâts au prochain tour.`
      );
      victim.takeDamage(6);  
      this.mana -= this.specialAttackCost;
    } else {
      console.log(`${this.name} n'a pas assez de mana pour utiliser Shadow Hit.`);
    }
  }
}

export default Assassin;
