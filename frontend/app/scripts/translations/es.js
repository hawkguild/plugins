'use strict';

angular
   .module('frontendApp')
   .config(function($translateProvider) {
      $translateProvider
         .translations('es', {
            ON: "sur",
            SLOGAN: "Extender GLPI con plugins",
            TRENDING: "Tendencias",
            TRENDING_SUB: "Beaucoup téléchargés ce mois-ci",
            NEW: "Nuevos",
            NEW_SUB: "Les plus récents",
            POPULAR: "Superior",
            POPULAR_SUB: "Les mieux notés",
            UPDATED: "Actualizado",
            UPDATED_SUB: "Derniers mis à jours",
            TAGS: "Tags",
            TAGS_SUB: "Aux plugins les plus nombreux",
            AUTHORS: "Autores",
            AUTHORS_SUB: "Plus gros contributeurs",
            NAV_FEATURED: "Featured",
            NAV_ALLPLUGINS: "All plugins",
            NAV_SEARCH: "Buscar",
            NAV_SUBMIT_A_PLUGIN: "Añadir su plugin",
            NAV_CONTACT: "Contáctenos",
            SEARCHBAR_PLACEHOLDER: "Buscar",
            VERSION: "Version",
            COMPATIBLE_WITH: "Compatible con",
            HOMEPAGE: "Sitio web",
            ADDED: "Añadido",
            BY: "Par",
            CONTRIBUTED_TO: "contributed to",
            PLUGIN_CONTRIBUTED_TO: "à contribué/travaillé sur ces plugins",
            TAGGED_WITH: "tagged on",
            PLUGIN_TAGGED_WITH: "Plugins taggés avec",
            QUESTION_SUGGESTION_PROBLEM: "Una pregunta, una sugerencia, un problema?",
            PLEASE_SEND_US_A_MESSAGE: "Please, send us a message.",
            PLEASE_USE_SUGGESTION_TRACKER: "If your message is a feature request for the GLPI software, you are strongly encouraged to use our suggestion tracker at",
            FIRSTNAME: "Prénom",
            LASTNAME: "Nom de famille",
            EMAIL: "Email",
            SUBJECT: "Sujet",
            YOUR_MESSAGE: "Votre message",
            SUBMIT: "Envoyer",
            SUBMIT_YOUR_PLUGIN: "Ajouter votre plugin!",
            SUB_SUBMIT_YOUR_PLUGIN: "Veuillez fournir une URL vers le fichier xml décrivant votre plugin",
            GLPI_PLUGIN_CREATORS: "GLPI Plugin Creators",
            PAGINATION_RESULTS: "Results",
            PAGINATION_TO: "to",
            PAGINATION_ON: "over",
            PAGINATION_ELEMENTS: "elements",
            NO_RESULTS: "No result",
            NEVER_UPDATED: "never updated since first publication",
            LOADING: "Loading",
            NEVER_UPDATED: "never updated since first publication",
            LOGIN: "Connexion",
            USER_PANEL: "Réglages Profil",
            DISCONNECT: "Déconnexion",
            SIGNIN: "Connexion",
            SIGNUP: "S'enregistrer",
            INVALID_CREDENTIALS: "Wrong credentials supplied. If you're not sure about the password please click 'I forgot my password'"
         });
   });