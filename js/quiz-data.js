 const QUIZ_QUESTIONS = [
  {
    id: 1,
    difficulté: 'facile',
    catégorie: 'Mots de passe',
    question: 'Quelle est la longueur minimale recommandée pour un mot de passe sécurisé ?',
    réponses: [
      { text: '4 caractères', correct: false },
      { text: '6 caractères', correct: false },
      { text: '12 caractères', correct: true },
      { text: '8 caractères', correct: false }
    ],
    explication: 'Un mot de passe d\'au moins 12 caractères est recommandé par l\'ANSSI. En dessous, il peut être cassé par force brute en quelques heures.',
    points: 100
  },
  {
    id: 2,
    difficulté: 'facile',
    catégorie: 'Phishing',
    question: 'Qu\'est-ce que le phishing ?',
    réponses: [
      { text: 'Un virus qui détruit les fichiers', correct: false },
      { text: 'Une technique d\'escroquerie par email pour voler des informations', correct: true },
      { text: 'Un logiciel de surveillance', correct: false },
      { text: 'Une attaque sur les réseaux Wi-Fi', correct: false }
    ],
    explication: 'Le phishing (hameçonnage) consiste à envoyer de false emails imitant des organisations légitimes pour voler identifiants, mots de passe ou données bancaires.',
    points: 100
  },
  {
    id: 3,
    difficulté: 'facile',
    catégorie: 'Bonnes pratiques',
    question: 'Que signifie le cadenas vert/gris dans la barre d\'adresse de votre navigateur ?',
    réponses: [
      { text: 'Le site est gratuit', correct: false },
      { text: 'La connexion est chiffrée (HTTPS)', correct: true },
      { text: 'Le site est certifié fiable par Google', correct: false },
      { text: 'Votre antivirus est actif', correct: false }
    ],
    explication: 'Le cadenas indique que la connexion utilise HTTPS (TLS/SSL). Cela chiffre les données échangées, mais ne garantit PAS que le site est légitime.',
    points: 100
  },
  {
    id: 4,
    difficulté: 'facile',
    catégorie: 'Malwares',
    question: 'Qu\'est-ce qu\'un ransomware ?',
    réponses: [
      { text: 'Un logiciel qui améliore les performances', correct: false },
      { text: 'Un virus qui s\'envoie automatiquement par email', correct: false },
      { text: 'Un logiciel malveillant qui chiffre vos fichiers et demande une rançon', correct: true },
      { text: 'Un outil de surveillance réseau', correct: false }
    ],
    explication: 'Le ransomware chiffre les fichiers de la victime. Les cybercriminels demandent ensuite une rançon (souvent en Bitcoin) pour fournir la clé de déchiffrement.',
    points: 100
  },
  {
    id: 5,
    difficulté: 'facile',
    catégorie: 'Authentification',
    question: 'Qu\'est-ce que l\'authentification à deux facteurs (2FA) ?',
    réponses: [
      { text: 'Utiliser deux mots de passe différents', correct: false },
      { text: 'Une vérification en deux étapes combinant mot de passe et second élément', correct: true },
      { text: 'Se connecter depuis deux appareils simultanément', correct: false },
      { text: 'Changer son mot de passe deux fois par an', correct: false }
    ],
    explication: 'Le 2FA ajoute une couche de sécurité : même si votre mot de passe est volé, l\'attaquant a besoin du second facteur (SMS, application d\'authentification, clé physique).',
    points: 100
  },
  {
    id: 6,
    difficulté: 'facile',
    catégorie: 'Bonnes pratiques',
    question: 'Que devriez-vous faire avant d\'ouvrir une pièce jointe d\'email inconnue ?',
    réponses: [
      { text: 'L\'ouvrir rapidement pour voir ce que c\'est', correct: false },
      { text: 'Vérifier l\'expéditeur, l\'objet, et analyser avec un antivirus', correct: true },
      { text: 'La transférer à vos collègues', correct: false },
      { text: 'Répondre à l\'email pour demander des informations', correct: false }
    ],
    explication: 'Les pièces jointes sont un vecteur d\'attaque majeur. Vérifiez toujours l\'expéditeur, méfiez-vous des urgences, et analysez les fichiers avant ouverture.',
    points: 100
  },
  {
    id: 7,
    difficulté: 'facile',
    catégorie: 'Réseaux',
    question: 'Est-il risqué de se connecter à un Wi-Fi public sans protection ?',
    réponses: [
      { text: 'Non, les Wi-Fi publics sont sécurisés par défaut', correct: false },
      { text: 'Oui, un attaquant peut intercepter vos communications', correct: true },
      { text: 'Seulement si vous visitez des sites HTTP', correct: false },
      { text: 'Non, les téléphones modernes sont protégés', correct: false }
    ],
    explication: 'Sur un Wi-Fi public non sécurisé, une attaque "Man-in-the-Middle" peut intercepter vos communications. L\'utilisation d\'un VPN est recommandée.',
    points: 100
  },
  {
    id: 8,
    difficulté: 'facile',
    catégorie: 'Mots de passe',
    question: 'Qu\'est-ce qu\'un gestionnaire de mots de passe ?',
    réponses: [
      { text: 'Un carnet où noter ses mots de passe', correct: false },
      { text: 'Un logiciel qui génère et stocke vos mots de passe de façon sécurisée', correct: true },
      { text: 'La fonction "mémoriser" du navigateur', correct: false },
      { text: 'Un service gouvernemental de gestion d\'identité', correct: false }
    ],
    explication: 'Un gestionnaire de mots de passe (Bitwarden, 1Password, KeePass) génère des mots de passe forts uniques pour chaque site et les stocke de façon chiffrée.',
    points: 100
  },
  {
    id: 26,
    difficulté: 'facile',
    catégorie: 'Mots de passe',
    question: 'Lequel de ces mots de passe est le plus sécurisé ?',
    réponses: [
      { text: 'password123', correct: false },
      { text: 'P@ssw0rd', correct: false },
      { text: 'Tr0ubad0ur!Soleil#42', correct: true },
      { text: '12345678', correct: false }
    ],
    explication: 'Un bon mot de passe combine longueur (16+ caractères), majuscules, minuscules, chiffres et symboles. "password123" et "P@ssw0rd" sont dans tous les dictionnaires d\'attaque.',
    points: 100
  },
  {
    id: 27,
    difficulté: 'facile',
    catégorie: 'Bonnes pratiques',
    question: 'Que faut-il faire lorsque vous quittez votre poste de travail au bureau ?',
    réponses: [
      { text: 'Laisser la session ouverte, vous revenez vite', correct: false },
      { text: 'Éteindre l\'ordinateur', correct: false },
      { text: 'Verrouiller la session (Win+L ou Ctrl+Cmd+Q)', correct: true },
      { text: 'Fermer uniquement les fenêtres sensibles', correct: false }
    ],
    explication: 'Verrouiller sa session empêche toute personne de passage d\'accéder à vos données ou d\'agir en votre nom. C\'est un réflexe simple et indispensable.',
    points: 100
  },
  {
    id: 28,
    difficulté: 'facile',
    catégorie: 'Phishing',
    question: 'Vous recevez un email de votre banque vous demandant de "valider votre compte sous 24h". Que faites-vous ?',
    réponses: [
      { text: 'Cliquer sur le lien et renseigner vos identifiants', correct: false },
      { text: 'Appeler directement votre banque via son numéro officiel', correct: true },
      { text: 'Répondre à l\'email pour confirmer vos informations', correct: false },
      { text: 'Transférer l\'email à vos contacts pour les prévenir', correct: false }
    ],
    explication: 'L\'urgence est une technique de manipulation classique. Ne cliquez jamais sur un lien reçu par email. Contactez toujours votre banque via son site officiel ou son numéro de téléphone.',
    points: 100
  },
  {
    id: 29,
    difficulté: 'facile',
    catégorie: 'Réseaux',
    question: 'Qu\'est-ce qu\'un VPN ?',
    réponses: [
      { text: 'Un antivirus pour les connexions réseau', correct: false },
      { text: 'Un tunnel chiffré qui protège votre trafic internet', correct: true },
      { text: 'Un bloqueur de publicités', correct: false },
      { text: 'Un service de messagerie sécurisée', correct: false }
    ],
    explication: 'Un VPN (Virtual Private Network) chiffre votre connexion et masque votre adresse IP. Utile sur les Wi-Fi publics ou pour accéder à un réseau d\'entreprise à distance.',
    points: 100
  },
  {
    id: 30,
    difficulté: 'facile',
    catégorie: 'Malwares',
    question: 'Comment un virus informatique se propage-t-il principalement ?',
    réponses: [
      { text: 'Par l\'alimentation électrique', correct: false },
      { text: 'Via des fichiers infectés, emails ou sites web malveillants', correct: true },
      { text: 'Par la connexion Bluetooth uniquement', correct: false },
      { text: 'Par le réseau Wi-Fi sans action de l\'utilisateur', correct: false }
    ],
    explication: 'Les virus se propagent via des pièces jointes, téléchargements, clés USB infectées ou sites malveillants. L\'action de l\'utilisateur (clic, ouverture) est souvent nécessaire.',
    points: 100
  },
  {
    id: 31,
    difficulté: 'facile',
    catégorie: 'Bonnes pratiques',
    question: 'À qui ne devez-vous JAMAIS communiquer votre mot de passe ?',
    réponses: [
      { text: 'À votre supérieur hiérarchique si nécessaire', correct: false },
      { text: 'Au service informatique de votre entreprise', correct: false },
      { text: 'À personne, même à votre service informatique', correct: true },
      { text: 'Uniquement à votre responsable direct', correct: false }
    ],
    explication: 'Un true service informatique n\'a jamais besoin de votre mot de passe. Il dispose d\'outils d\'administration. Toute demande de mot de passe est suspecte, même si l\'interlocuteur semble légitime.',
    points: 100
  },
  {
    id: 32,
    difficulté: 'facile',
    catégorie: 'Authentification',
    question: 'Parmi ces seconds facteurs d\'authentification, lequel est le plus sécurisé ?',
    réponses: [
      { text: 'Un code reçu par SMS', correct: false },
      { text: 'Une question secrète (nom de votre animal)', correct: false },
      { text: 'Une clé de sécurité physique (type YubiKey)', correct: true },
      { text: 'Un code envoyé par email', correct: false }
    ],
    explication: 'Les clés physiques (FIDO2/WebAuthn) sont immunisées contre le phishing car elles vérifient cryptographiquement le domaine du site. Le SMS est vulnérable au SIM swapping.',
    points: 100
  },
  {
    id: 33,
    difficulté: 'facile',
    catégorie: 'Bonnes pratiques',
    question: 'Que signifie "faire une sauvegarde" (backup) ?',
    réponses: [
      { text: 'Copier ses fichiers dans un autre dossier du même disque', correct: false },
      { text: 'Synchroniser ses fichiers sur un service cloud uniquement', correct: false },
      { text: 'Conserver des copies sur des supports ou emplacements distincts', correct: true },
      { text: 'Archiver ses emails dans un dossier local', correct: false }
    ],
    explication: 'La règle 3-2-1 : 3 copies, sur 2 supports différents, dont 1 hors site. Une copie sur le même disque ou une synchro cloud seule ne protège pas contre le ransomware.',
    points: 100
  },
  {
    id: 34,
    difficulté: 'facile',
    catégorie: 'Phishing',
    question: 'Quel indice suggère qu\'un email est une tentative de phishing ?',
    réponses: [
      { text: 'L\'email contient votre nom complet', correct: false },
      { text: 'L\'adresse de l\'expéditeur ressemble à "support@amaz0n-service.com"', correct: true },
      { text: 'L\'email est rédigé en français correct', correct: false },
      { text: 'L\'email provient d\'une adresse Gmail', correct: false }
    ],
    explication: 'Les domaines frauduleux imitent les vrais : chiffres remplaçant des lettres, tirets supplémentaires, sous-domaines trompeurs. Vérifiez toujours l\'adresse de l\'expéditeur en entier.',
    points: 100
  },
  {
    id: 35,
    difficulté: 'facile',
    catégorie: 'Réseaux',
    question: 'Que devriez-vous faire après avoir utilisé un ordinateur public (bibliothèque, cybercafé) ?',
    réponses: [
      { text: 'Rien, la session se ferme automatiquement', correct: false },
      { text: 'Se déconnecter de tous les comptes et effacer l\'historique', correct: true },
      { text: 'Changer les paramètres du navigateur', correct: false },
      { text: 'Installer un antivirus sur cet ordinateur', correct: false }
    ],
    explication: 'Sur un ordinateur public : déconnectez-vous de chaque compte, effacez les mots de passe mémorisés, l\'historique et les cookies. Évitez d\'y saisir des données bancaires.',
    points: 100
  },
  {
    id: 9,
    difficulté: 'moyen',
    catégorie: 'Cryptographie',
    question: 'Que signifie "chiffrement de bout en bout" (end-to-end encryption) ?',
    réponses: [
      { text: 'Le message est chiffré seulement en transit', correct: false },
      { text: 'Seuls l\'expéditeur et le destinataire peuvent lire le message', correct: true },
      { text: 'Le serveur chiffre les messages pour vous', correct: false },
      { text: 'Les messages sont supprimés après lecture', correct: false }
    ],
    explication: 'Avec le chiffrement E2E (Signal, WhatsApp), les clés sont uniquement chez les utilisateurs. Même le fournisseur de service ne peut pas lire les messages.',
    points: 200
  },
  {
    id: 10,
    difficulté: 'moyen',
    catégorie: 'Attaques',
    question: 'Qu\'est-ce qu\'une attaque par injection SQL ?',
    réponses: [
      { text: 'Une attaque sur les bases de données via des entrées mal validées', correct: true },
      { text: 'Un virus qui infecte les serveurs SQL', correct: false },
      { text: 'Une technique de brute force sur les mots de passe', correct: false },
      { text: 'Un DoS ciblant les bases de données', correct: false }
    ],
    explication: 'L\'injection SQL exploite une mauvaise validation des entrées utilisateur pour exécuter des commandes SQL arbitraires, pouvant exposer ou modifier toute la base de données.',
    points: 200
  },
  {
    id: 11,
    difficulté: 'moyen',
    catégorie: 'Réseaux',
    question: 'Qu\'est-ce qu\'un pare-feu (firewall) ?',
    réponses: [
      { text: 'Un antivirus amélioré', correct: false },
      { text: 'Un système qui filtre le trafic réseau selon des règles définies', correct: true },
      { text: 'Un VPN d\'entreprise', correct: false },
      { text: 'Un logiciel de chiffrement des disques durs', correct: false }
    ],
    explication: 'Un pare-feu contrôle le trafic réseau entrant et sortant selon des règles prédéfinies. Il peut être matériel (routeur) ou logiciel (Windows Defender Firewall).',
    points: 200
  },
  {
    id: 12,
    difficulté: 'moyen',
    catégorie: 'Mots de passe',
    question: 'Qu\'est-ce qu\'une attaque par dictionnaire ?',
    réponses: [
      { text: 'Une attaque qui essaie toutes les combinaisons possibles', correct: false },
      { text: 'Une attaque qui utilise une liste de mots courants pour deviner les mots de passe', correct: true },
      { text: 'Un vol de base de données', correct: false },
      { text: 'Une attaque sur les dictionnaires en ligne', correct: false }
    ],
    explication: 'Contrairement à la force brute (toutes les combinaisons), l\'attaque par dictionnaire utilise des listes de mots courants, de fuites précédentes et de variations courantes.',
    points: 200
  },
  {
    id: 13,
    difficulté: 'moyen',
    catégorie: 'Malwares',
    question: 'Qu\'est-ce qu\'un cheval de Troie (Trojan Horse) ?',
    réponses: [
      { text: 'Un virus qui se propage par email', correct: false },
      { text: 'Un logiciel malveillant qui se déguise en programme légitime', correct: true },
      { text: 'Un ransomware ciblant les entreprises', correct: false },
      { text: 'Un script automatisé pour les attaques DDoS', correct: false }
    ],
    explication: 'Un cheval de Troie se présente comme un logiciel légitime (jeu, outil utilitaire) mais contient du code malveillant qui s\'exécute à l\'insu de l\'utilisateur.',
    points: 200
  },
  {
    id: 14,
    difficulté: 'moyen',
    catégorie: 'Bonnes pratiques',
    question: 'À quelle fréquence devriez-vous mettre à jour vos logiciels ?',
    réponses: [
      { text: 'Une fois par an', correct: false },
      { text: 'Uniquement quand il y a un problème', correct: false },
      { text: 'Dès que les mises à jour de sécurité sont disponibles', correct: true },
      { text: 'Tous les 6 mois', correct: false }
    ],
    explication: 'Les mises à jour de sécurité corrigent des vulnérabilités connues. WannaCry (2017) a infecté 200 000 machines en exploitant une faille pour laquelle un patch existait depuis 2 mois.',
    points: 200
  },
  {
    id: 15,
    difficulté: 'moyen',
    catégorie: 'Phishing',
    question: 'Qu\'est-ce que le spear phishing ?',
    réponses: [
      { text: 'Un phishing envoyé en masse à des millions de personnes', correct: false },
      { text: 'Un phishing ciblé et personnalisé visant une personne ou organisation spécifique', correct: true },
      { text: 'Une attaque sur les serveurs de messagerie', correct: false },
      { text: 'Un phishing via les réseaux sociaux uniquement', correct: false }
    ],
    explication: 'Le spear phishing utilise des informations personnelles (nom, poste, collègues) pour rendre l\'email crédible. Il est beaucoup plus efficace que le phishing générique.',
    points: 200
  },
  {
    id: 16,
    difficulté: 'moyen',
    catégorie: 'Cryptographie',
    question: 'Quel est le principe du hachage (hash) d\'un mot de passe ?',
    réponses: [
      { text: 'Chiffrer le mot de passe pour pouvoir le déchiffrer plus tard', correct: false },
      { text: 'Transformer le mot de passe en empreinte irréversible', correct: true },
      { text: 'Stocker le mot de passe dans un format encodé', correct: false },
      { text: 'Diviser le mot de passe en plusieurs parties', correct: false }
    ],
    explication: 'Le hash (SHA-256, bcrypt) est une fonction à sens unique : à partir du hash, impossible de retrouver le mot de passe original. Les serveurs stockent les hash, jamais les mots de passe en clair.',
    points: 200
  },
  {
    id: 36,
    difficulté: 'moyen',
    catégorie: 'Attaques',
    question: 'Qu\'est-ce que le "social engineering" (ingénierie sociale) ?',
    réponses: [
      { text: 'Une technique de programmation collaborative', correct: false },
      { text: 'La manipulation psychologique pour obtenir des informations ou accès', correct: true },
      { text: 'Une méthode de test de pénétration automatisée', correct: false },
      { text: 'L\'analyse comportementale des utilisateurs sur un réseau', correct: false }
    ],
    explication: 'L\'ingénierie sociale exploite la confiance, la peur ou l\'urgence plutôt que des failles techniques. C\'est le vecteur d\'attaque le plus efficace : 98% des cyberattaques utilisent le social engineering.',
    points: 200
  },
  {
    id: 37,
    difficulté: 'moyen',
    catégorie: 'Réseaux',
    question: 'Que signifie le terme "DMZ" dans le contexte de la sécurité réseau ?',
    réponses: [
      { text: 'Un outil de détection de malwares', correct: false },
      { text: 'Une zone réseau isolée exposant des services publics sans accès au réseau interne', correct: true },
      { text: 'Un protocole de chiffrement des échanges réseau', correct: false },
      { text: 'Un système de journalisation des connexions', correct: false }
    ],
    explication: 'La DMZ (Zone DéMilitarisée) héberge les serveurs accessibles depuis Internet (web, mail) en les isolant du réseau interne. Si un serveur DMZ est compromis, l\'attaquant n\'accède pas directement au réseau interne.',
    points: 200
  },
  {
    id: 38,
    difficulté: 'moyen',
    catégorie: 'Bonnes pratiques',
    question: 'Qu\'est-ce qu\'un test de pénétration (pentest) ?',
    réponses: [
      { text: 'Un audit automatique des mises à jour logicielles', correct: false },
      { text: 'Une simulation d\'attaque autorisée pour identifier les vulnérabilités d\'un système', correct: true },
      { text: 'Un test de résistance des serveurs sous forte charge', correct: false },
      { text: 'Un scan antivirus complet du système', correct: false }
    ],
    explication: 'Un pentest est réalisé par des hackers éthiques mandatés pour tenter de pénétrer un système. Les résultats permettent de corriger les failles avant qu\'un true attaquant ne les exploite.',
    points: 200
  },
  {
    id: 39,
    difficulté: 'moyen',
    catégorie: 'Malwares',
    question: 'Qu\'est-ce qu\'un logiciel espion (spyware) ?',
    réponses: [
      { text: 'Un programme de surveillance parental légal', correct: false },
      { text: 'Un malware qui collecte discrètement des informations sur l\'utilisateur', correct: true },
      { text: 'Un outil d\'administration réseau', correct: false },
      { text: 'Un antivirus qui surveille les comportements suspects', correct: false }
    ],
    explication: 'Un spyware s\'installe discrètement et collecte frappes clavier, captures d\'écran, historique web, mots de passe. Pegasus en est un exemple sophistiqué ciblant les smartphones.',
    points: 200
  },
  {
    id: 40,
    difficulté: 'moyen',
    catégorie: 'Cryptographie',
    question: 'Quelle est la différence entre chiffrement symétrique et asymétrique ?',
    réponses: [
      { text: 'Le symétrique est plus récent et plus sûr', correct: false },
      { text: 'Le symétrique utilise une clé partagée ; l\'asymétrique utilise une paire clé publique/privée', correct: true },
      { text: 'L\'asymétrique ne peut chiffrer que de petits fichiers', correct: false },
      { text: 'Le symétrique utilise deux clés différentes', correct: false }
    ],
    explication: 'Symétrique (AES) : même clé pour chiffrer/déchiffrer, rapide mais problème de partage. Asymétrique (RSA) : clé publique pour chiffrer, privée pour déchiffrer. TLS combine les deux : asymétrique pour échanger une clé symétrique.',
    points: 200
  },
  {
    id: 41,
    difficulté: 'moyen',
    catégorie: 'Réglementation',
    question: 'Qu\'est-ce que le RGPD impose en cas de violation de données personnelles ?',
    réponses: [
      { text: 'Aucune obligation si les données sont chiffrées', correct: false },
      { text: 'Notifier la CNIL sous 72 heures et les personnes concernées si risque élevé', correct: true },
      { text: 'Publier un communiqué de presse dans les 30 jours', correct: false },
      { text: 'Contacter Interpol uniquement pour les attaques internationales', correct: false }
    ],
    explication: 'Le RGPD impose de notifier l\'autorité de contrôle (CNIL en France) dans les 72h suivant la découverte. Si le risque pour les personnes est élevé, elles doivent aussi être informées directement.',
    points: 200
  },
  {
    id: 42,
    difficulté: 'moyen',
    catégorie: 'Attaques',
    question: 'Qu\'est-ce qu\'une attaque par force brute ?',
    réponses: [
      { text: 'Une attaque physique sur les équipements informatiques', correct: false },
      { text: 'Un test systématique de toutes les combinaisons possibles jusqu\'à trouver le bon mot de passe', correct: true },
      { text: 'Une surcharge de serveur par des requêtes massives', correct: false },
      { text: 'Une attaque exploitant une faille de sécurité spécifique', correct: false }
    ],
    explication: 'La force brute essaie toutes les combinaisons possibles. Un mot de passe de 8 caractères alphanumériques peut être cassé en quelques heures. À 12 caractères avec symboles : des siècles seraient nécessaires.',
    points: 200
  },
  {
    id: 43,
    difficulté: 'moyen',
    catégorie: 'Réseaux',
    question: 'Qu\'est-ce que le protocole HTTPS apporte par rapport à HTTP ?',
    réponses: [
      { text: 'Des pages web qui se chargent plus vite', correct: false },
      { text: 'Un chiffrement TLS des données échangées et une authentification du serveur', correct: true },
      { text: 'Une protection contre les malwares', correct: false },
      { text: 'Un accès réservé aux sites officiels', correct: false }
    ],
    explication: 'HTTPS = HTTP + TLS. Il garantit : (1) confidentialité (les données sont chiffrées), (2) intégrité (les données ne sont pas modifiées), (3) authentification (le certificat prouve l\'identité du serveur).',
    points: 200
  },
  {
    id: 44,
    difficulté: 'moyen',
    catégorie: 'Bonnes pratiques',
    question: 'Qu\'est-ce que le principe du "moindre privilège" ?',
    réponses: [
      { text: 'Donner le minimum de droits d\'accès nécessaires à chaque utilisateur', correct: true },
      { text: 'Interdire l\'accès administrateur à tous les employés', correct: false },
      { text: 'Limiter la bande passante des utilisateurs', correct: false },
      { text: 'Restreindre l\'accès internet en entreprise', correct: false }
    ],
    explication: 'Le principe du moindre privilège limite les dommages en cas de compromission d\'un compte : un employé compromis ne peut accéder qu\'aux ressources dont il a besoin pour son travail, pas à tout le système.',
    points: 200
  },
  {
    id: 45,
    difficulté: 'moyen',
    catégorie: 'Phishing',
    question: 'Qu\'est-ce que le "vishing" ?',
    réponses: [
      { text: 'Un phishing par SMS', correct: false },
      { text: 'Un phishing par appel téléphonique', correct: true },
      { text: 'Un phishing via les réseaux sociaux', correct: false },
      { text: 'Un phishing par code QR', correct: false }
    ],
    explication: 'Le vishing (voice phishing) utilise des appels téléphoniques. L\'attaquant se fait passer pour votre banque, les impôts ou le support technique Microsoft. Les arnaqueurs utilisent parfois de truees informations pour paraître crédibles.',
    points: 200
  },

  {
    id: 17,
    difficulté: 'difficile',
    catégorie: 'Attaques',
    question: 'Qu\'est-ce qu\'une attaque Man-in-the-Middle (MitM) ?',
    réponses: [
      { text: 'Une attaque où un tiers intercepte et peut modifier les communications', correct: true },
      { text: 'Un accès non autorisé au milieu d\'une base de données', correct: false },
      { text: 'Une attaque sur le serveur DNS', correct: false },
      { text: 'Un type de ransomware', correct: false }
    ],
    explication: 'Dans une attaque MitM, l\'attaquant se positionne entre deux parties communicantes. Il peut écouter, modifier ou injecter des données. Le SSL/TLS avec vérification des certificats prévient ce type d\'attaque.',
    points: 300
  },
  {
    id: 18,
    difficulté: 'difficile',
    catégorie: 'Réseaux',
    question: 'Qu\'est-ce qu\'une attaque DDoS (Distributed Denial of Service) ?',
    réponses: [
      { text: 'Un vol de données distribué sur plusieurs serveurs', correct: false },
      { text: 'Une attaque qui sature un serveur avec des requêtes depuis de nombreuses sources', correct: true },
      { text: 'Un malware qui se distribue automatiquement', correct: false },
      { text: 'Un scan de vulnérabilités distribué', correct: false }
    ],
    explication: 'Le DDoS utilise un botnet (réseau de machines compromises) pour envoyer des millions de requêtes simultanées, rendant le service indisponible. Mitigation : CDN, rate limiting, WAF.',
    points: 300
  },
  {
    id: 19,
    difficulté: 'difficile',
    catégorie: 'Cryptographie',
    question: 'Que signifie "Zero-Day vulnerability" ?',
    réponses: [
      { text: 'Une faille découverte le jour de la publication d\'un logiciel', correct: false },
      { text: 'Une vulnérabilité inconnue du vendeur, sans patch disponible', correct: true },
      { text: 'Une faille qui dure moins de 24 heures', correct: false },
      { text: 'Une vulnérabilité de niveau critique (CVSS 10)', correct: false }
    ],
    explication: 'Une zero-day est une faille inconnue du vendeur (0 jours pour corriger). Très dangereuses, elles sont vendues sur des marchés spécialisés pour des millions de dollars.',
    points: 300
  },
  {
    id: 20,
    difficulté: 'difficile',
    catégorie: 'Attaques',
    question: 'Qu\'est-ce que le "privilege escalation" ?',
    réponses: [
      { text: 'Augmenter les droits d\'un compte utilisateur légitimement', correct: false },
      { text: 'Exploiter une faille pour obtenir des privilèges supérieurs à ceux accordés', correct: true },
      { text: 'Un type d\'attaque sur Active Directory', correct: false },
      { text: 'Une technique de social engineering', correct: false }
    ],
    explication: 'L\'élévation de privilèges permet à un attaquant d\'obtenir des droits administrateur à partir d\'un compte limité. Deux types : horizontal (autre compte même niveau) et vertical (niveau supérieur).',
    points: 300
  },
  {
    id: 21,
    difficulté: 'difficile',
    catégorie: 'Réglementation',
    question: 'Que risque une entreprise qui ne respecte pas le RGPD en cas de violation de données ?',
    réponses: [
      { text: 'Un avertissement uniquement', correct: false },
      { text: 'Jusqu\'à 4% du chiffre d\'affaires mondial ou 20 millions d\'euros', correct: true },
      { text: 'Une amende fixe de 10 000 euros', correct: false },
      { text: 'La fermeture obligatoire de l\'entreprise', correct: false }
    ],
    explication: 'Le RGPD prévoit des amendes pouvant atteindre 4% du CA mondial annuel ou 20 millions d\'euros (le montant le plus élevé). Meta a écopé d\'une amende de 1,2 milliard d\'euros en 2023.',
    points: 300
  },
  {
    id: 22,
    difficulté: 'difficile',
    catégorie: 'Malwares',
    question: 'Qu\'est-ce qu\'un rootkit ?',
    réponses: [
      { text: 'Un virus qui infecte le secteur de démarrage', correct: false },
      { text: 'Un malware qui se cache au niveau du système d\'exploitation pour persister', correct: true },
      { text: 'Un outil d\'administration à distance légitime', correct: false },
      { text: 'Un script d\'exploitation de failles web', correct: false }
    ],
    explication: 'Un rootkit modifie le système d\'exploitation pour dissimuler sa présence. Il peut masquer des fichiers, processus et connexions réseau, rendant sa détection très difficile.',
    points: 300
  },
  {
    id: 23,
    difficulté: 'difficile',
    catégorie: 'Attaques',
    question: 'Qu\'est-ce qu\'une attaque par XSS (Cross-Site Scripting) ?',
    réponses: [
      { text: 'Une injection de scripts malveillants dans des pages web vues par d\'autres utilisateurs', correct: true },
      { text: 'Un vol de cookies par interception réseau', correct: false },
      { text: 'Une attaque sur les certificats SSL', correct: false },
      { text: 'Un script qui cible plusieurs sites simultanément', correct: false }
    ],
    explication: 'XSS injecte du JavaScript malveillant dans une page web. Quand d\'autres utilisateurs la visitent, le script s\'exécute dans leur navigateur et peut voler leurs cookies de session.',
    points: 300
  },
  {
    id: 24,
    difficulté: 'difficile',
    catégorie: 'Cryptographie',
    question: 'Qu\'est-ce qu\'une PKI (Public Key Infrastructure) ?',
    réponses: [
      { text: 'Un système de stockage sécurisé des mots de passe', correct: false },
      { text: 'Une infrastructure de gestion des certificats et clés publiques', correct: true },
      { text: 'Un protocole de chiffrement symétrique', correct: false },
      { text: 'Un standard de hachage des mots de passe', correct: false }
    ],
    explication: 'La PKI gère les certificats numériques et clés publiques. Elle permet l\'authentification et le chiffrement sur internet via les autorités de certification (CA) comme Let\'s Encrypt.',
    points: 300
  },
  {
    id: 25,
    difficulté: 'difficile',
    catégorie: 'Réseaux',
    question: 'Qu\'est-ce que le "DNS poisoning" (empoisonnement DNS) ?',
    réponses: [
      { text: 'Une attaque DDoS sur les serveurs DNS', correct: false },
      { text: 'La corruption du cache DNS pour rediriger les utilisateurs vers de false sites', correct: true },
      { text: 'Un blocage des requêtes DNS par un pare-feu', correct: false },
      { text: 'Une faille dans le protocole DNSSEC', correct: false }
    ],
    explication: 'L\'empoisonnement DNS injecte de fausses entrées dans le cache DNS. Les utilisateurs sont redirigés vers des serveurs malveillants croyant visiter un site légitime (banque, gouvernement...)',
    points: 300
  },
  {
    id: 46,
    difficulté: 'difficile',
    catégorie: 'Attaques',
    question: 'Qu\'est-ce qu\'une attaque "supply chain" (chaîne d\'approvisionnement) ?',
    réponses: [
      { text: 'Une attaque ciblant les systèmes de livraison e-commerce', correct: false },
      { text: 'Une compromission via un fournisseur ou logiciel tiers de confiance', correct: true },
      { text: 'Un vol de données lors de la fabrication du matériel', correct: false },
      { text: 'Une attaque sur les systèmes de gestion de stock', correct: false }
    ],
    explication: 'SolarWinds (2020) est l\'exemple emblématique : les pirates ont injecté du code malveillant dans une mise à jour légitime, infectant 18 000 organisations dont des agences gouvernementales américaines.',
    points: 300
  },
  {
    id: 47,
    difficulté: 'difficile',
    catégorie: 'Cryptographie',
    question: 'Qu\'est-ce que le "perfect forward secrecy" (PFS) ?',
    réponses: [
      { text: 'Un chiffrement qui ne peut jamais être cassé', correct: false },
      { text: 'Un mécanisme générant des clés de session éphémères pour chaque connexion', correct: true },
      { text: 'Un protocole de vérification d\'intégrité des messages', correct: false },
      { text: 'Un standard de stockage des clés privées', correct: false }
    ],
    explication: 'Avec le PFS (Diffie-Hellman éphémère), même si la clé privée du serveur est compromise, les sessions passées restent chiffrées : chaque session utilisait une clé unique détruite après usage.',
    points: 300
  },
  {
    id: 48,
    difficulté: 'difficile',
    catégorie: 'Réseaux',
    question: 'Qu\'est-ce qu\'une attaque par "ARP spoofing" ?',
    réponses: [
      { text: 'Un empoisonnement du protocole DNS', correct: false },
      { text: 'Une falsification des tables ARP pour intercepter le trafic réseau local', correct: true },
      { text: 'Une attaque par déni de service sur le protocole ARP', correct: false },
      { text: 'Un scan de ports utilisant le protocole ARP', correct: false }
    ],
    explication: 'L\'ARP spoofing associe l\'adresse MAC de l\'attaquant à une adresse IP légitime sur le réseau local. Tout le trafic destiné à cette IP passe par l\'attaquant — classique pour les attaques MitM en réseau local.',
    points: 300
  },
  {
    id: 49,
    difficulté: 'difficile',
    catégorie: 'Malwares',
    question: 'Qu\'est-ce qu\'un malware "fileless" (sans fichier) ?',
    réponses: [
      { text: 'Un malware stocké dans un fichier système caché', correct: false },
      { text: 'Un malware qui s\'exécute uniquement en mémoire vive sans écrire sur le disque', correct: true },
      { text: 'Un virus qui efface ses propres fichiers après exécution', correct: false },
      { text: 'Un ransomware qui ne chiffre pas les fichiers', correct: false }
    ],
    explication: 'Les malwares fileless utilisent des processus légitimes (PowerShell, WMI) pour s\'exécuter en RAM. Ils ne laissent aucune trace sur le disque, ce qui les rend quasi invisibles aux antivirus traditionnels.',
    points: 300
  },
  {
    id: 50,
    difficulté: 'difficile',
    catégorie: 'Attaques',
    question: 'Qu\'est-ce qu\'une attaque CSRF (Cross-Site Request Forgery) ?',
    réponses: [
      { text: 'Une injection de scripts dans une page web', correct: false },
      { text: 'Une attaque forçant un utilisateur authentifié à exécuter des actions non souhaitées', correct: true },
      { text: 'Un vol de session par interception de cookies', correct: false },
      { text: 'Une falsification de l\'identité du serveur web', correct: false }
    ],
    explication: 'CSRF exploite la confiance d\'un site envers le navigateur. Si vous êtes connecté à votre banque, un site malveillant peut déclencher un virement en votre nom. Les tokens CSRF aléatoires protègent contre cette attaque.',
    points: 300
  },
  {
    id: 51,
    difficulté: 'difficile',
    catégorie: 'Réglementation',
    question: 'Que désigne la directive NIS 2 (Network and Information Security 2) ?',
    réponses: [
      { text: 'Un standard de chiffrement européen pour les communications gouvernementales', correct: false },
      { text: 'Une directive européenne renforçant les obligations de cybersécurité pour les entités critiques', correct: true },
      { text: 'Un protocole réseau sécurisé développé par l\'UE', correct: false },
      { text: 'Un label de certification pour les logiciels de sécurité', correct: false }
    ],
    explication: 'NIS 2 (transposée en 2024) élargit les secteurs concernés (énergie, santé, eau, numérique...) et renforce les obligations : mesures de sécurité, déclaration d\'incidents, responsabilité des dirigeants.',
    points: 300
  },
  {
    id: 52,
    difficulté: 'difficile',
    catégorie: 'Cryptographie',
    question: 'Qu\'est-ce qu\'une attaque par "timing side-channel" ?',
    réponses: [
      { text: 'Une attaque exploitant les variations de temps d\'exécution pour extraire des secrets cryptographiques', correct: true },
      { text: 'Une attaque utilisant plusieurs serveurs simultanément pour casser un chiffrement', correct: false },
      { text: 'Une technique forçant un algorithme à utiliser un mode de chiffrement faible', correct: false },
      { text: 'Un exploit visant les serveurs NTP de synchronisation temporelle', correct: false }
    ],
    explication: 'Les attaques "side-channel" n\'attaquent pas l\'algorithme mais son implémentation. En mesurant le temps de réponse, la consommation électrique ou les émissions EM, un attaquant peut déduire une clé privée.',
    points: 300
  },
  {
    id: 53,
    difficulté: 'difficile',
    catégorie: 'Attaques',
    question: 'Qu\'est-ce que le "living off the land" (LotL) dans le contexte d\'une cyberattaque ?',
    réponses: [
      { text: 'Une attaque ciblant les systèmes agricoles industriels', correct: false },
      { text: 'L\'utilisation d\'outils légitimes du système pour mener une attaque', correct: true },
      { text: 'Une technique de camouflage des malwares dans des images', correct: false },
      { text: 'Une attaque qui se propage via les mises à jour du système d\'exploitation', correct: false }
    ],
    explication: 'LotL utilise des binaires Windows natifs (PowerShell, WMI, certutil, mshta) pour ses actions malveillantes. Ces outils sont whitelistés par les solutions de sécurité — l\'attaquant passe inaperçu car il n\'installe rien.',
    points: 300
  },
  {
    id: 54,
    difficulté: 'difficile',
    catégorie: 'Réseaux',
    question: 'Qu\'est-ce qu\'un IDS (Intrusion Detection System) par rapport à un IPS ?',
    réponses: [
      { text: 'L\'IDS bloque les attaques ; l\'IPS les détecte uniquement', correct: false },
      { text: 'L\'IDS détecte et alerte ; l\'IPS détecte et bloque automatiquement', correct: true },
      { text: 'Ce sont deux noms différents pour le même outil', correct: false },
      { text: 'L\'IDS analyse le trafic chiffré ; l\'IPS ne le peut pas', correct: false }
    ],
    explication: 'L\'IDS (passif) analyse le trafic et génère des alertes. L\'IPS (actif) peut bloquer automatiquement le trafic suspect en temps réel. Le risque de l\'IPS : les false positifs peuvent bloquer du trafic légitime.',
    points: 300
  },
  {
    id: 55,
    difficulté: 'difficile',
    catégorie: 'Malwares',
    question: 'Qu\'est-ce qu\'un botnet ?',
    réponses: [
      { text: 'Un réseau de serveurs dédiés à la cybersécurité', correct: false },
      { text: 'Un ensemble de machines compromises contrôlées à distance par un attaquant', correct: true },
      { text: 'Un logiciel de simulation d\'attaques pour les tests', correct: false },
      { text: 'Un réseau de honeypots pour attirer les cybercriminels', correct: false }
    ],
    explication: 'Un botnet est un réseau de "zombies" (machines infectées) contrôlées via un C&C (Command & Control). Utilisé pour envoyer du spam, mener des attaques DDoS ou miner des cryptomonnaies. Mirai (2016) a mobilisé 600 000 objets connectés.',
    points: 300
  },
];