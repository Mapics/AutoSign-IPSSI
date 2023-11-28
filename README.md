# AutoSign-IPSSI
 Connexion et Signature automatique de l'emargement yPareo a l'IPSSI

 Toi aussi t'en as marre de ces absances alors que tu etait present en cours ? Ne te prend plus la tete et laisse faire ce script a ta place pour faire ton emargement!

 ## Installation

1. **Prérequis**
    - Node.js : Assurez-vous d'avoir Node.js installé sur votre machine. Vous pouvez le télécharger [ici](https://nodejs.org/).

2. **Installation du Projet**
    - Clonez ce dépôt : `git clone https://github.com/votre-utilisateur/votre-projet.git`
    - Accédez au répertoire du projet depuis la terminal ou VsCode : `cd AutoSign-IPSSI`
    - Installez les dépendances : `npm install`

3. **Execution auto**
    - Rentrez vos infromation de connexion dans le code au Lignes 13 et 14
    - Pour lancer le script simplement lancer 'runAutoSign.bat'
    - Si vous rencontrer un probleme et voulez debuggez, modifier L.5  { headless : "new" } -> { headless : false } cela executera le script en faisant les actions visuelement
