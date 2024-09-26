import Fighter from "./characters/fighter.js";
import Berserker from "./characters/berserker.js";
import Assassin from "./characters/assassin.js";
import Paladin from "./characters/paladin.js";
import Monk from "./characters/monk.js";
import Wizard from "./characters/wizard.js";
import Hunter from "./characters/hunter.js";

export class Game {
  constructor() {
    this.players = [];
    this.rounds = 10;
  }

  startGame() {
    this.generatePlayers();
    console.log("🎉 Bienvenue au Thib Iron Fist Tournament ! 🎉");
    console.log(
      "⚔️ Vous allez voir des combats épiques, du sang, des pleurs, des larmes...et des points de côtés...⚔️"
    );
    console.log("Que le meilleur gagne !");
    console.log("-------------------------------------------------");
    this.startTurnLoop();
  }

  generatePlayers() {
    this.players.push(new Fighter("Grace"));
    this.players.push(new Paladin("Ulder"));
    this.players.push(new Monk("Moana"));
    this.players.push(new Berserker("Draven"));
    this.players.push(new Assassin("Carl"));
    this.players.push(new Wizard("Albus"));
    this.players.push(new Hunter("Olaf"));

    this.players.forEach((player) => (player.game = this));
  }

  startTurnLoop() {
    for (let i = 0; i < this.rounds; i++) {
      console.log(`\n🔄 C'est le tour ${i + 1}.`);
      this.displayPlayerStatus();

      const alivePlayers = this.players.filter(
        (player) => player.status === "playing"
      ); // Filtrer les joueurs encore en vie

      alivePlayers.forEach((player) => {
        this.startTurn(player);
      });

      // Retirer les joueurs qui ont été éliminés
      this.players = this.players.filter(
        (player) => player.status === "playing"
      );
      if (this.players.length <= 1) break;
    }
    this.endGame();
  }

  displayPlayerStatus() {
    console.log("État des personnages :");
    this.players.forEach((player) => {
      console.log(
        `- ${player.name} (HP: ${player.hp}, Mana: ${player.mana}) - Statut: ${player.status}`
      );
    });
    console.log("-------------------------------------------------");
  }

  startTurn(player) {
    console.log(`⚔️ C'est le moment pour ${player.name} de jouer.`);

    // Récupérer les cibles valides à chaque tour
    let possibleVictims = this.players.filter(
      (p) => p !== player && p.status === "playing"
    );

    if (possibleVictims.length === 0) {
      console.log("Plus de victimes disponibles !");
      return;
    }

    // Si la cible est éliminée, trouver une nouvelle cible valide
    let victim =
      possibleVictims[Math.floor(Math.random() * possibleVictims.length)];

    while (victim.status !== "playing") {
      // Réitérer jusqu'à trouver une victime encore en vie
      possibleVictims = possibleVictims.filter((p) => p.status === "playing");
      victim =
        possibleVictims[Math.floor(Math.random() * possibleVictims.length)];
    }

    {
      player.dealDamage(victim); // Utiliser l'attaque normale
    }

    if (victim.hp <= 0) {
      victim.status = "looser"; // Mettre à jour le statut du personnage
      console.log(`${victim.name} est désormais hors de combat !`);
    }
  }

  endGame() {
    console.log("\n🛑 La partie est terminée ! 🛑");
    if (this.players.length === 1) {
      console.log(`🏆 Le gagnant est ${this.players[0].name} !`);
    } else {
      console.log("Tous les personnages ont été éliminés !");
    }
  }
}
