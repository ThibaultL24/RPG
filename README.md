Thib Iron Fist Tournament
Description
Le Thib Iron Fist Tournament est un jeu de combat en tour par tour où différents personnages s'affrontent dans des duels épiques. Chaque personnage a des compétences uniques et des statistiques qui influencent le déroulement des combats. Le but du jeu est d'éliminer tous les autres personnages et de devenir le champion du tournoi.

Caractéristiques
Personnages Variés : Choisissez parmi différentes classes de personnages, chacune avec des statistiques et des capacités uniques, comme le Fighter, le Paladin, le Monk, le Berserker, l'Assassin, le Wizard, et le Hunter.
Mécanique de Combat : Les personnages attaquent leurs adversaires en infligeant des dégâts. Des attaques spéciales et des mécanismes de soins ajoutent une dimension stratégique au jeu.
Système de Tours : Chaque personnage a la chance de jouer à chaque tour, ce qui rend le combat dynamique et engageant.
Statuts de Personnage : Les personnages peuvent être en "jouant" ou "looser" (hors de combat), affectant ainsi leurs actions dans le jeu.
Installation
Clonez le dépôt :

bash
Copier le code
git clone <URL_DU_DEPOT>
cd <NOM_DU_DOSSIER>
Installez Node.js : Assurez-vous que Node.js est installé sur votre machine. Vous pouvez le télécharger depuis nodejs.org.

Exécutez le jeu :

bash
Copier le code
node index.js
Structure du Projet
bash
Copier le code
/RPG
│
├── index.js              # Point d'entrée du jeu
├── character.js          # Classe de base pour les personnages
├── game.js               # Logique du jeu et gestion des tours
└── characters/           # Dossier contenant les classes des personnages
    ├── fighter.js        # Classe Fighter
    ├── berserker.js      # Classe Berserker
    ├── assassin.js       # Classe Assassin
    ├── paladin.js        # Classe Paladin
    ├── monk.js           # Classe Monk
    ├── wizard.js         # Classe Wizard
    └── hunter.js         # Classe Hunter
Utilisation
Le jeu commence par l'initialisation des personnages.
À chaque tour, chaque personnage joue à tour de rôle.
Les joueurs peuvent infliger des dégâts ou utiliser des attaques spéciales.
Le jeu se termine lorsqu'un seul personnage reste en vie ou si tous les personnages sont éliminés.
Auteurs
[Votre Nom] - Développeur principal
License
Ce projet est sous la licence MIT. Voir le fichier LICENSE pour plus de détails.
