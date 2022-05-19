# 10-librairie-ui

**React Native Element** est une trousse à outils multi-plateforme pour créer des UI en "React Native" : https://reactnativeelements.com/

Celle-ci contient donc des éléments "open source personnalisables" facile à utiliser.

Installation : https://reactnativeelements.com/docs/ 

**Tips / Astuce**
Tester le code dans l'interface playground prévu à cet effet : https://react-native-elements.js.org/#/

**Création d'une gestion de contacts spécial La Manu**

Interface simple et basique : Une liste d'éléments. 

Un Header avec un menu burger + un titre : https://reactnativeelements.com/docs/components/header

Une SearchBar pour rechercher un apprenant sans avoir à scroller : https://reactnativeelements.com/docs/searchbar

Une LisItem : https://reactnativeelements.com/docs/listitem.
- Avatar.
- Le prénom + nom.
- Nom de la PROMO « ex. Appli Mobile ».
- Une flèche vers la droite pour afficher les détails de l'apprenant. 

-------

Installation react Native Element

Créer le projet vierge avec Expo CLI et React Native Elements : https://reactnativeelements.com/docs/installation#using-expo

  $ expo init 10-librairie-ui

Installer react Native Element : https://reactnativeelements.com/docs/installation

  $ npm install @rneui/themed @rneui/base

Installer au minimum ces composants : https://reactnativeelements.com/docs/installation

  $ npm install react-native-vector-icons
  
  $ npm install react-native-safe-area-context
  
s'il y a des problème de version avec react-native-safe-area-context, il faut exécuter la commande pour réparer les version :

  $ expo doctor --fix-dependencies
