# API de Magasin en Ligne 🛍️

Cette **API** permet de gérer un magasin en ligne simple, avec des fonctionnalités de gestion de produits, d'authentification des utilisateurs, et de téléchargement d'images pour les produits.

---

## 📸 Aperçu

![Aperçu du site](ecom_img.png) 

---

## Fonctionnalités 🚀

### 1. **Gestion des Produits** 🏷️ :

* **Créer un produit** : Ajouter un produit avec un titre, une description, un prix et une image.
* **Lire les produits** : Afficher la liste de tous les produits ou un produit spécifique en utilisant son ID.
* **Mettre à jour un produit** : Modifier les informations d'un produit existant (titre, description, prix, image).
* **Supprimer un produit** : Supprimer un produit du magasin.

### 2. **Authentification** 🔑 :

* **Inscription** et **connexion** des utilisateurs pour sécuriser l'accès à l'API.
* **JWT (JSON Web Token)** : Sécurisation des routes de l'API avec des tokens JWT. Seuls les utilisateurs authentifiés peuvent accéder aux fonctionnalités de gestion des produits.

### 3. **Gestion des Images** 🖼️ :

* Permet aux utilisateurs de télécharger une image pour chaque produit.
* Utilisation de **Multer** pour gérer l'upload des fichiers et obtenir l'URL de l'image pour chaque produit.

---

## Technologies utilisées ⚙️

* **Node.js** 💻
* **Express.js** 🚀
* **MongoDB** 🗄️
* **JWT (JSON Web Token)** 🔐
* **Multer** (pour le téléchargement d'images) 🖼️

---

## Objectifs d'apprentissage
- créer un serveur web simple avec Express ;
- créer une **API REST** avec **Node**, **Express** et **MongoDB** ;
- mettre en place un système d'authentification sur une application Express ;
- gérer des fichiers utilisateur sur une application Express.

---

## Installation ⚙️

1. Clonez ce repository :

   ```bash
   git clone https://github.com/codeurluce/E-com_API_Nodejs
   ```

2. Accédez au répertoire du projet :

   ```bash
   cd Node-js
   ```

3. Installez les dépendances :

   ```bash
   npm install
   ```

4. Créez un fichier `.env` à la racine du projet pour stocker vos variables d'environnement :

   ```plaintext
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

   Remplacez `your_mongodb_connection_string` par l'URL de connexion de votre base de données MongoDB et `your_secret_key` par une clé secrète pour signer les tokens JWT.

5. Lancez le serveur :

   ```bash
   npm start
   ```

   Par défaut, l'API sera accessible à `http://localhost:3000`.

## Routes de l'API 📡

### 1. **Gestion des Produits** 🏷️ :

* **GET /products** : Liste tous les produits.
* **GET /products/\:id** : Récupère un produit spécifique par son ID.
* **POST /products** : Crée un nouveau produit.
* **PUT /products/\:id** : Met à jour un produit existant par son ID.
* **DELETE /products/\:id** : Supprime un produit par son ID.

### 2. **Authentification** 🔑 :

* **POST /auth/register** : Inscription d'un utilisateur (avec email et mot de passe).
* **POST /auth/login** : Connexion d'un utilisateur pour obtenir un token JWT.

### 3. **Gestion des Images** 🖼️ :

---
