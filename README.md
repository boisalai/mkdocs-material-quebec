# Gabarit MkDocs Material 

Le présent dépôt GitHub propose un gabarit MkDocs Material respectant (le plus possible)
le [système de design du gouvernement du Québec](https://design.quebec.ca/apercu/systeme).

![](docs/assets/fig1.png)

[MkDocs](https://www.mkdocs.org/) est un générateur de site statique rapide, simple et attrayant, 
conçu spécialement pour la création de documentation de projet.

Les fichiers source de la documentation sont rédigés en [Markdown](https://www.markdownguide.org/) 
et configurés à l'aide d'un seul fichier de configuration YAML.

[mkdocs-material](https://squidfunk.github.io/mkdocs-material/) est un thème pour le générateur de documentation MkDocs
prévoyant un ensemble de principes et de directives de conception qui permettent 
de créer des interfaces utilisateur modernes, attrayantes et cohérentes.

## Utilisation

Les instructions ci-dessous supposent que l'utilisateur n'a aucun droit d'administration sur son ordinateur,
n'a pas accès à la fenêtre du terminal, et n'a pas python. 

**Étape 1**: Téléchargez le gabarit MkDocs

Téléchargez le présent dépôt GitHub en format compressé ZIP. Pour ce faire, cliquez sur le bouton **Code** 
et sélectionnez **Download ZIP**. 

![](docs/assets/fig2.png)

Ensuite, décompressez ce fichier ZIP (`mkdocs-material-quebec-main.zip`). Vous pouvez déplacer 
le répertoire `mkdocs-material-quebec-main` ailleurs sur votre ordinateur ou votre réseau local.

Voici la structure de ce répertoire.

```txt
.
├── README.md
├── docs
│   ├── assets
│   │   ├── favicon-32x32.png
│   │   ├── fig1.png
│   │   ├── fig2.png
│   │   ├── fig3.png
│   │   └── signature-PIV.svg
│   ├── home
│   │   ├── Markdown-Cheatsheet.md
│   │   ├── about.md
│   │   ├── index.md
│   │   └── markdown-folder
│   │       ├── assets
│   │       │   └── 3.png
│   │       └── markdown.md
│   ├── part1
│   │   ├── page1.md
│   │   └── page2.md
│   ├── part2
│   │   ├── page1.md
│   │   └── page2.md
│   └── stylesheets
│       └── extra.css
├── git.sh        
└── mkdocs.yml
``` 

Vous pouvez supprimer les fichiers `README.md` et `git.sh`.

Le fichier `mkdocs.yml` est un fichier de configuration.

Le répertoire `docs/assets/` contient les images utiles (ex. logo du gouvernement du Québec). 

Les répertoires `docs/home`, `docs/part1` et `docs/part2` contiennent des pages de documentation sous la forme de fichiers en format markdown.

**Étape 2**: Ajoutez et/ou modifiez les pages de documentation.

Rédigez votre documentation dans des fichiers en format markdown (avec l'extension `.md`) 
à l'intérieur du répertoire `docs`. 

Vous pouvez créer et modifier des fichiers markdown avec Visual Studio Code (VS Code). 
Uilisez VS Code directement dans un navigateur web, sans avoir à installer 
l'application sur votre ordinateur. Il suffit d'aller sur [https://vscode.dev/](https://vscode.dev/).

![](docs/assets/fig3.png)

**Étape 3**: Modifiez le fichier de configuration `mkdocs.yml`.

Changez la ligne `site_name:` par le nom de votre documentation.

Ajustez l'arboresence débutant 
par `nav:` pour qu'elle corresponde à votre structure de documentation.

```yaml
site_name: Direction XYZ
[...]
nav:
  - Accueil:
    - home/index.md
    - home/markdown-folder/markdown.md
    - home/Markdown-Cheatsheet.md
    - home/about.md
  - Section 1:
    - part1/page1.md
    - part1/page2.md
  - Section 2:
    - part2/page1.md
    - part2/page2.md
```

**Étape 4**: Générez votre documentation sous la forme d'un site statique

Compressez le répertoire `mkdocs-material-quebec-main` afin de créer le fichier `mkdocs-material-quebec-main.zip`.

Ouvrez ce [fichier Google Colab](https://colab.research.google.com/drive/17bBL-oIsmS3bYaSN3tf6FhZ1EA9KFEJG?usp=sharing).

Google Colab est une plateforme de développement et d'exécution de code en ligne, gratuit, principalement 
utilisée pour le langage de programmation Python. 

Exécutez la cellule en cliquant sur le symbol <img src="docs/assets/bouton-jouer.png" size="50">.

Colab va vous demander de sélectionner le fichier à charger sur le serveur. Sélectionnez le 
le fichier `mkdocs-material-quebec.zip`. 
Ensuite, Colad générera une nouvelle version du site statique
et téléchargement automatiquement sur votre ordinateur le fichier compressé 
 `site.zip`. Décompressez-le
pour accéder à documentation mise à jour.









