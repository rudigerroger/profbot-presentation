# 🤖 Profbot - Professeur de Mathématiques IA (Niveau 3ème)

> **Note :** Ce projet a été développé dans le cadre d'un projet personnel. Il sert d'exploration et de démonstration technique pour la création d'une interface conversationnelle connectée à une intelligence artificielle.

Profbot est une application web moderne et interactive qui simule un professeur de mathématiques spécialement conçu pour accompagner les élèves de la classe de 3ème. L'application utilise l'API de Hugging Face pour générer des réponses pédagogiques, structurées et adaptées au programme de collège, avec un support complet pour les formules mathématiques.

## ✨ Fonctionnalités

- **Interface de Chat Intuitive** : Une interface fluide et réactive inspirée des messageries modernes, avec mode sombre intégré (Glassmorphism).
- **Spécialisation 3ème** : Le bot est configuré (via un System Prompt strict) pour ne répondre qu'aux questions mathématiques du niveau 3ème (Théorème de Pythagore, Thalès, fonctions, probabilités, etc.) et refuse poliment les autres sujets.
- **Rendu Mathématique** : Support complet et natif du langage LaTeX pour l'affichage élégant des formules mathématiques grâce à `react-markdown` et `rehype-katex`.
- **Design Moderne** : Animations fluides, interface responsive (adaptée aux mobiles et PC), et un design soigné pour offrir une expérience utilisateur premium.

## 🛠️ Technologies Utilisées

- **Frontend** : React.js (avec Vite)
- **Style** : CSS Vanilla (Design System personnalisé, Flexbox, CSS Variables)
- **IA & API** : Modèle de langage (LLM) Qwen via l'API d'inférence de **Hugging Face** (`@huggingface/inference`)
- **Utilitaires** : `react-markdown`, `remark-math`, `rehype-katex` pour le formatage des mathématiques.

## 🚀 Installation Locale (Pour les développeurs)

Si vous souhaitez faire tourner ce projet sur votre propre machine, suivez ces étapes :

### 1. Cloner le projet

```bash
git clone https://github.com/rudigerroger/profbot-presentation.git
cd profbot-presentation
```

### 2. Installer les dépendances

Assurez-vous d'avoir Node.js installé, puis lancez :

```bash
npm install
```

### 3. Configurer la clé API Hugging Face

Le bot a besoin d'une clé API pour réfléchir et générer des réponses.
- Créez un compte gratuit sur [Hugging Face](https://huggingface.co/).
- Allez dans les paramètres de votre compte pour créer un "Access Token" (avec les droits de lecture / Read).
- À la racine du projet, créez un fichier nommé `.env`.
- Ajoutez-y votre clé de cette manière :

```env
VITE_HF_API_KEY=hf_votre_cle_api_secrete_ici
```
*(Note : Le fichier `.env` est ignoré par Git pour des raisons de sécurité, votre clé ne sera donc jamais publiée sur GitHub).*

### 4. Lancer le serveur de développement

```bash
npm run dev
```

Ouvrez votre navigateur à l'adresse indiquée (généralement `http://localhost:5173`) pour découvrir Profbot !

---
*Projet personnel créé par **Roger***
