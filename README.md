# Portfolio Axison BAYALA

## Configuration EmailJS

Pour que le formulaire de contact fonctionne, vous devez configurer EmailJS :

### 1. Créer un compte EmailJS
1. Allez sur [EmailJS](https://www.emailjs.com/)
2. Créez un compte gratuit
3. Connectez votre service email (Gmail, Outlook, etc.)

### 2. Configuration du service
1. Dans votre dashboard EmailJS, créez un nouveau service
2. Choisissez votre fournisseur email (Gmail, Outlook, etc.)
3. Notez le **Service ID** généré

### 3. Créer un template
1. Créez un nouveau template avec ce contenu :

```
Nouveau message depuis votre portfolio

De: {{from_name}} ({{from_email}})
Sujet: {{subject}}

Message:
{{message}}

---
Envoyé depuis votre portfolio
```

2. Notez le **Template ID** généré

### 4. Obtenir la clé publique
1. Allez dans Account > API Keys
2. Copiez votre **Public Key**

### 5. Mettre à jour le code
Dans `src/components/Contact.tsx`, remplacez :
- `'service_portfolio'` par votre Service ID
- `'template_contact'` par votre Template ID  
- `'your_public_key'` par votre Public Key

### 6. Test
Le formulaire enverra maintenant les messages à `bayalaaxison@hotmail.com`

## Alternative simple
Si vous préférez une solution plus simple, vous pouvez utiliser Formspree :
1. Allez sur [Formspree](https://formspree.io/)
2. Créez un formulaire gratuit
3. Remplacez le code d'envoi par l'endpoint Formspree

## Développement

```bash
npm install
npm run dev
```

## Déploiement

```bash
npm run build
```