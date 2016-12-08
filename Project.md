# Explication du rôle de chaque fichier et dossiers pour l' API

/models/

Les models pour les livres (books.js) et pour les utilisateurs (users)

/routes 

  authenticate.js
  
    Contient les routes d'authentifaction pour l'applications Liby'B
    
  books.js
  
    Contient les routes d'ajout/visualisation/suppression/MAJ des livres
    
  middleware.js
    
    Le middleware verifiant pour chaque route si le token fournis est valide.
    
  user.js
  
    Contient les routes d'ajout/visualisation/suppression/MAJ des utilisateurs
