Les étapes importantes : 
  Côté API : 
  - Mise en place de express
  - Mise en place de mongoDb (utilisation de mongoose et robomongo) 
  - Mise en place des schemas et models mongoose
  - Creation token (jsonwebtoken)
  - Mise en place d'un middleware (il faut être identifié pour accèder à certaines routes)
  - Mise en place du cors 
  - Deploiement sur Mongolab 
  - Deploiement sur heroku (https://apirestwebapp.herokuapp.com/)
             
  Côté IONIC : 
  -Installation Ionic 2
  - Création des pages books,users et login
  - Création des providers : auth , user-service,book-service avec utilisation des routes de l'API
  - Recupération et stockage du token dans la variable storage
  - Gestion du token
  - Gestion de la navigation entre les pages
  - Récupération des données depuis l'API 
  - Mise en place du plugin BarcodeScanner pour le scan isbn
  - Mise en place d'un fake scan (isbn entré en dur) qui récupère les informations d'un livre via l'API isbnDb
  -Travail sur le design de l'application
               
  Problèmes rencontrées :
  
    - Une faible documentation due aux récentes évolutions de Ionic.
    - Des difficultés pour les requêtes http avec les Headers (besoin d'installer un package sur l'API...)
    - La structure de la base de données avec mongoDB, sans aucunes relations, nous a contraint a changer nos habitudes sur l'élaboration de nos tables et liasons.
    
