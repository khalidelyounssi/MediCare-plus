# MediCare-plus
# 🏥 **SantéConnect – Plateforme de suivi et rendez-vous médicaux**

---

## 🌍 **Contexte du projet**

Le projet **SantéConnect** a été réalisé dans le cadre d’un apprentissage du **développement web front-end (HTML, CSS, JavaScript)**.  
L’objectif principal est de concevoir une **application web interactive** dédiée à la **santé et au suivi médical personnel**.  

Cette plateforme permet à l’utilisateur de :
- Consulter des **conseils santé dynamiques** 🧠  
- Rechercher et **filtrer des médecins** 👩‍⚕️  
- **Prendre des rendez-vous** en ligne 🗓️  
- **Suivre ses indicateurs de santé** (poids, tension, glycémie, etc.) ❤️  

Le tout dans une interface **moderne, responsive et agréable à utiliser**.  

---

## ⚙️ **Fonctionnalités principales**

| 🔢 Page | 🧩 Fonctionnalités principales |
|----------|------------------------------|
| 🏠 **Accueil** | - Carrousel automatique de conseils santé (JavaScript)<br>- Mode clair / sombre sauvegardé via **localStorage** 🌙 (Bonus)<br>- Barre de recherche filtrant articles ou médecins en **temps réel** 🔍 |
| 👨‍⚕️ **Médecins** | - Liste dynamique des médecins (photo, spécialité, disponibilité)<br>- Filtrage par spécialité (cardiologie, dermatologie, etc.) 🩺 (Bonus)<br>- Système de **favoris** enregistré dans **localStorage** ⭐ (Bonus) |
| 📅 **Rendez-vous** | - Formulaire dynamique avec **validation en temps réel** (nom, email, date, médecin)<br>- Liste interactive de rendez-vous (ajout / suppression / modification) 🔁<br>- Persistance via **localStorage** 🗂️ |


---

## 👤 **User Stories**

| 👥 Rôle | 💬 Objectif utilisateur |
|----------|-------------------------|
| 👀 **Visiteur** | - Voir défiler les conseils santé automatiquement 🩺<br>- Basculer entre **mode clair et sombre** (Bonus)<br>- Rechercher un médecin ou un article en **temps réel** 🔍<br>- Ajouter des médecins en **favoris** (Bonus)<br>- Prendre un **rendez-vous en ligne** 🗓️<br>- Retrouver mes préférences sauvegardées après rechargement (Bonus) |
| 💻 **Développeur** | - Créer un **carrousel automatique sans bibliothèque externe** ⚙️<br>- Gérer les **événements utilisateurs** (click, input, submit, change)<br>- Manipuler le **DOM dynamiquement** pour mettre à jour les listes<br>- **Valider les formulaires** avant soumission ✅<br>- Utiliser **localStorage** pour la persistance des données 💾<br>- Structurer le **code JavaScript** de façon claire et réutilisable 🧠 |

---

## 🧠 **Architecture du projet**

| 📁 Dossier / Fichier | 📝 Description |
|-----------------------|----------------|
| `index.html` | Page d’accueil avec carrousel, barre de recherche et mode clair/sombre |
| `medecins.html` | Liste des médecins + filtrage et favoris |
| `rendezvous.html` | Formulaire et gestion dynamique des rendez-vous |
| `suivi.html` | Suivi santé et indicateurs dynamiques (bonus) |
| `css/style.css` | Feuille de style principale |
| `js/script.js` | Logique JavaScript (carrousel, formulaires, localStorage, DOM) |
| `img/` | Images et icônes utilisées dans le site |

---

## 🧰 **Technologies utilisées**

| ⚙️ Technologie | 💡 Usage |
|----------------|----------|
| **HTML5** | Structure du site |
| **CSS3** | Mise en forme et design responsive |
| **JavaScript (ES6)** | Dynamique, logique et gestion du DOM |
| **LocalStorage** | Sauvegarde des données utilisateur |
| **W3C Validator** | Vérification et conformité du code |


---

## 🧩 **Aspects techniques importants**

- 🔄 Manipulation du **DOM** pour générer des éléments dynamiques  
- 🎛️ Utilisation de **localStorage** pour sauvegarder les données persistantes  
