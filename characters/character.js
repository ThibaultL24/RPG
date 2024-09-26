// characters/character.js
export class Character {
  constructor(name, hp, dmg, mana) {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.status = "playing"; // Peut être "playing" ou "looser"
  }

  takeDamage(dmg) {
    this.hp -= dmg;
    if (this.hp <= 0) {
      this.status = "looser";
      console.log(`${this.name} est mort.`);
    }
  }

  dealDamage(victim) {
    if (victim instanceof Character) { // Vérifiez si c'est un personnage valide
      victim.takeDamage(this.dmg);
      console.log(`${this.name} attaque ${victim.name} et lui inflige ${this.dmg} dégâts.`);
    } else {
      console.error("Tentative d'attaquer un objet non valide !");
    }
  }
}
