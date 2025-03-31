# API de Magasin en Ligne

Ce projet est une **API** permettant de gérer un magasin en ligne simple avec les fonctionnalités suivantes :

- **CRUD** (Créer, Lire, Mettre à jour, Supprimer) des produits en vente
- Authentification pour sécuriser l'accès à l'API
- Téléchargement d'images pour les produits via un système de gestion de fichiers

## Fonctionnalités

### 1. Gestion des produits :
- **Créer** un produit : Permet d'ajouter un produit avec un titre, une description, un prix et une image.
- **Lire** les produits : Permet de lister tous les produits disponibles ou un produit spécifique via son ID.
- **Mettre à jour** un produit : Permet de modifier les informations d'un produit existant.
- **Supprimer** un produit : Permet de supprimer un produit du magasin.

### 2. Authentification :
- **Inscription** et **connexion** des utilisateurs pour accéder aux fonctionnalités protégées de l'API (CRUD des produits).
- Sécurisation des routes avec **JWT** (JSON Web Token).

### 3. Gestion des images :
- Permet aux utilisateurs de télécharger une image pour chaque produit, et de récupérer l'URL de l'image. Cela inclut la configuration de l'upload des fichiers (par exemple, via **Multer**)

## Prérequis

- **Node.js** : La version recommandée est la dernière version stable de Node.js.
- **MongoDB** : Base de données pour stocker les informations des produits et des utilisateurs.

## Installation

1. Clonez ce repository :
   ```bash
   git clone https://github.com/codeurluce/Node-js.git
