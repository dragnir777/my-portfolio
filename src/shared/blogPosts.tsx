import React from 'react';

export type BlogPost = {
  slug: string;
  title: string;
  categoryId: 'developpement-web' | 'design-ui-ux' | 'cybersecurite';
  categoryName: string;
  excerpt: string;
  content: string;
  rendered: React.ReactNode;
  image: string;
  date: string;
  dateFormatted: string;
  readTime: string;
  tags: string[];
  seoTitle: string;
  seoDescription: string;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
}

const posts: BlogPost[] = [
  {
    slug: 'concevoir-application-web-securisee-node-react',
    title: 'Concevoir une application web sécurisée de bout en bout avec Node.js et React.js',
    categoryId: 'developpement-web',
    categoryName: 'Développement Web',
    image: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: '2025-01-05',
    dateFormatted: formatDate('2025-01-05'),
    readTime: '12 min',
    tags: ['Node.js', 'Express', 'React', 'JWT', 'OWASP'],
    excerpt: "Architecture, authentification JWT, validation, gestion des secrets, logs, CI/CD et surveillance : un guide concret pour livrer une app sûre.",
    seoTitle: 'App web sécurisée avec Node.js et React.js – Guide complet',
    seoDescription: "Guide complet pour concevoir une application web sécurisée de bout en bout avec Node.js et React.js (auth, validation, CI/CD, logs, OWASP).",
    content: '',
    rendered: (
      <div>
        <h2>Pourquoi une sécurité de bout en bout</h2>
        <p>La sécurité n’est pas un module annexe. Elle se conçoit à chaque couche : frontend, backend, base de données, pipeline et opérations.</p>
        <h3>1. Architecture et séparation des responsabilités</h3>
        <ul>
          <li>Front React isolé (Vite/CRA) derrière un CDN; backend Node/Express derrière un WAF/Reverse-proxy.</li>
          <li>Secrets hors code (variables d’environnement, vault), accès minimal par service.</li>
          <li>Base de données avec rôles dédiés, <strong>principes du moindre privilège</strong>.</li>
        </ul>
        <h3>2. Authentification et autorisation</h3>
        <ul>
          <li>JWT courts, <em>refresh tokens</em> HttpOnly/SameSite=strict, rotation, liste de révocation.</li>
          <li>RBAC/ABAC pour les permissions sensibles.</li>
        </ul>
        <h3>3. Validation et hygiène des données</h3>
        <ul>
          <li>Valider toutes les entrées avec Zod/Yup côté front et back.</li>
          <li>Échapper/sérialiser les sorties; utiliser des ORM préparés (Prisma/Knex) contre l’injection.</li>
        </ul>
        <h3>4. Défense OWASP</h3>
        <ol>
          <li>XSS: CSP stricte, React par défaut, librairies d’assainissement lors de rendu HTML.</li>
          <li>CSRF: cookies SameSite, tokens synchronisés pour endpoints sensibles.</li>
          <li>Rate limiting, captcha adaptatif, anti-bruteforce.</li>
          <li>Gestion des identifiants: hashing Argon2/bcrypt, MFA optionnel.</li>
        </ol>
        <h3>5. Observabilité et journalisation</h3>
        <ul>
          <li>Logs structurés (pino/winston) + corrélation de requêtes; alerte sur anomalies.</li>
          <li>Traçage (OpenTelemetry) et métriques (Prometheus/Grafana).</li>
        </ul>
        <h3>6. CI/CD sécurisé</h3>
        <ul>
          <li>Scan SAST/DAST, analyse de dépendances, <em>Infrastructure as Code</em> revue.</li>
          <li>Déploiement blue/green, rollback rapide, secrets fournis à l’exécution.</li>
        </ul>
        <blockquote>
          Le but n’est pas le « risque zéro », mais une posture défensive mesurée et vérifiable.
        </blockquote>
        <h3>Exemple minimal d’API Express sécurisée</h3>
        <pre><code>{`import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

const app = express();
app.use(helmet());
app.use(express.json({ limit: '100kb' }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

app.get('/health', (_req, res) => res.json({ ok: true }));

app.listen(3000);`}</code></pre>
      </div>
    )
  },
  {
    slug: 'importance-design-ui-ux-applications-critiques',
    title: 'L’importance du design UI/UX dans les applications critiques',
    categoryId: 'design-ui-ux',
    categoryName: 'Design UI/UX',
    image: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: '2025-01-08',
    dateFormatted: formatDate('2025-01-08'),
    readTime: '10 min',
    tags: ['Accessibilité', 'Hiérarchie visuelle', 'Réactivité', 'UX Research'],
    excerpt: "Clarté, hiérarchie, accessibilité, réactivité : comment un design exigeant sécurise les usages dans les contextes critiques (cas Myredlwili).",
    seoTitle: 'UI/UX pour applications critiques – Pourquoi c’est vital',
    seoDescription: "Pourquoi le design UI/UX est essentiel dans les apps critiques : clarté, hiérarchie, accessibilité, réactivité, cas Myredlwili.",
    content: '',
    rendered: (
      <div>
        <h2>Clarté d’abord</h2>
        <p>Dans les systèmes critiques, la charge cognitive doit être minimale. Un libellé clair vaut mieux qu’une icône ambiguë.</p>
        <h3>Hiérarchie visuelle</h3>
        <ul>
          <li>Contraste suffisant, tailles adaptées, regroupement sémantique.</li>
          <li>Feedback immédiat: states de chargement/erreur visibles.</li>
        </ul>
        <h3>Accessibilité by design</h3>
        <ul>
          <li>Respect WCAG 2.2 AA: contrastes, focus visible, navigation clavier.</li>
          <li>ARIA uniquement si nécessaire, labels explicites.</li>
        </ul>
        <h3>Réactivité et robustesse</h3>
        <ul>
          <li>Responsive et performance perçue (squelettes, prefetch, cache).</li>
          <li>États hors ligne et reprise: éviter la perte de saisie.</li>
        </ul>
        <h3>Cas concret: Myredlwili</h3>
        <p>En re-pensant la navigation, la hiérarchie et les formulaires, le temps de réalisation des tâches critiques a chuté de 32%.</p>
        <blockquote>
          Un design exigeant n’est pas cosmétique : c’est une réduction de risque opérationnel.
        </blockquote>
      </div>
    )
  },
  {
    slug: 'securiser-application-2025-7-bonnes-pratiques',
    title: 'Sécuriser une application web en 2025 : 7 bonnes pratiques essentielles',
    categoryId: 'cybersecurite',
    categoryName: 'Cybersécurité',
    image: 'https://images.pexels.com/photos/5380643/pexels-photo-5380643.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: '2025-01-10',
    dateFormatted: formatDate('2025-01-10'),
    readTime: '9 min',
    tags: ['OWASP', 'Zero Trust', 'Secrets', 'Monitoring', 'CI/CD'],
    excerpt: "Sept pratiques concrètes avec exemples Postemoney et GCOB pour élever significativement votre posture de sécurité en 2025.",
    seoTitle: 'Sécuriser une application en 2025 – 7 pratiques essentielles',
    seoDescription: "Les 7 bonnes pratiques pour sécuriser une app en 2025 : Zero Trust, secrets, durcissement, surveillance, exemples Postemoney et GCOB.",
    content: '',
    rendered: (
      <div>
        <h2>Les essentiels à mettre en place</h2>
        <ol>
          <li><strong>Zero Trust</strong>: ne jamais présumer la confiance, vérifier systématiquement.</li>
          <li><strong>Gestion des secrets</strong>: vaults, rotation, accès minimaux.</li>
          <li><strong>Durcissement</strong>: headers, CSP, patching, dépendances saines.</li>
          <li><strong>Authentification moderne</strong>: MFA, WebAuthn, détection d’anomalies.</li>
          <li><strong>Chiffrement</strong>: TLS à jour, chiffrement des données sensibles au repos.</li>
          <li><strong>Surveillance</strong>: logs corrélés, alertes, tests de pénétration réguliers.</li>
          <li><strong>CI/CD sécurisé</strong>: scans automatiques, revue, artefacts signés.</li>
        </ol>
        <h3>Exemples</h3>
        <ul>
          <li>Postemoney: renforcement des flux d’authentification et monitoring des anomalies.</li>
          <li>GCOB: mise en place de rate limiting et séparation stricte des rôles DB.</li>
        </ul>
        <blockquote>
          La sécurité efficace est un processus continu, pas un livrable unique.
        </blockquote>
      </div>
    )
  }
];

export default posts;