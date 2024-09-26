export default class Fighter {
  constructor(name) {
    this.name = name;
    this.hp = 10;
    this.mana = 20;
    this.status = "playing"; // ou "looser"
    this.specialAttackCost = 20; // Coût de l'attaque spéciale
  }

  // Méthode pour infliger des dégâts normaux
  dealDamage(victim) {
    const damage = 3; // Dégâts infligés
    victim.hp -= damage;
    console.log(`${this.name} inflige ${damage} points de dégâts à ${victim.name}`);
    if (victim.hp <= 0) {
      victim.status = "looser";
    }
  }

  // Méthode pour effectuer une attaque spéciale
  specialAttack(victim) {
    const damage = 5; // Dégâts infligés par l'attaque spéciale
    if (this.mana >= this.specialAttackCost) {
      victim.hp -= damage;
      this.mana -= this.specialAttackCost;
      console.log(`${this.name} effectue une attaque spéciale et inflige ${damage} points de dégâts à ${victim.name}`);
      if (victim.hp <= 0) {
        victim.status = "looser";
      }
    } else {
      console.log(`${this.name} n'a pas assez de mana pour effectuer une attaque spéciale.`);
    }
  }

}
