# Project Brief — Site « Homelith »

## Contexte et objectif

Reproduire le plus fidèlement possible le site web **Homelith**, un studio d'architecture et d'intérieur européen fictif spécialisé dans les maisons privées modernes. Les captures d'écran fournies sont la **référence principale et unique** : il s'agit d'une reproduction fidèle, pas d'une réinterprétation, pas d'une inspiration libre. N'inventer aucune page, section ou composant absent des captures.

## Règle de priorité

1. Les captures d'écran jointes sont la source de vérité principale.
2. Le présent brief aide à interpréter et organiser les captures.
3. En cas de contradiction entre une capture et une description écrite, reproduire ce qui est visible dans la capture.
4. Ne pas inventer les éléments qui ne sont visibles ni dans les captures ni dans le brief.
5. Reproduire le texte visible dans les captures lorsqu'il est lisible. Lorsqu'il est illisible, utiliser un contenu de longueur et de structure équivalentes sans ajouter d'informations importantes absentes de la référence.

---

## 1. Identité visuelle globale

### Palette (stricte, 4 couleurs uniquement)

| Nom | HEX | Usage |
|---|---|---|
| Noir | `#030304` | Fond de toutes les pages |
| Bleu électrique | `#18339C` | Labels, liens actifs, hover, chiffres clés, titres de cartes, éléments sélectionnés |
| Gris moyen | `#949494` | Textes secondaires, mots atténués dans les titres, « LET'S » du titre contact |
| Blanc cassé | `#FFFFFF` | Titres, textes principaux, bordures fines, wireframes |

Aucune autre couleur. Aucun dégradé. Photographies en couleur naturelle (architecture blanche, ciels bleus) ou en noir et blanc.

### Typographie (une seule famille)

- **Inter Tight** — graisses : Regular (corps de texte), Medium et Medium Italic (labels, navigation, métadonnées), SemiBold (titres, logo, boutons).
- Hiérarchie approximative desktop :
  - Titres héros géants (DESIGNED HOUSES, ABOUT US, LET'S talk) : 90–140 px, capitales, SemiBold, interlettrage légèrement serré, interligne ~0.95.
  - Titres de section (phrases bicolores) : 28–42 px.
  - Titres de catégorie (HOUSE DESIGN, WORKS) : 18–24 px, capitales.
  - Corps de texte : 13–15 px, gris `#949494`, souvent justifié en colonnes étroites (280–360 px).
  - Labels, navigation, métadonnées : 11–12 px, capitales ou italique.
- Motif récurrent : titres bicolores mêlant blanc SemiBold et gris Regular dans une même phrase (ex. « Homelith is an architectural studio » en blanc + suite en gris).
- Exception : sur la page de détail projet, le grand numéro « 021 » utilise une fonte display technique de type monospace/digital (chiffres à contreformes carrées) — si indisponible, utiliser une monospace géométrique proche.

### Éléments graphiques récurrents

- Labels de section entre crochets, italique, bleu `#18339C` : `[ABOUT]`, `[SERVICES]`, `[POPULAR PROJECTS]`… Parfois scindés aux deux bords de la page : « [OUR » à gauche, « VISION] » à droite.
- Fines lignes de grille (hairlines ~1 px, blanc à ~10–15 % d'opacité) traversant les pages verticalement et horizontalement, comme un plan technique — très visibles sur la page About.
- Flèche diagonale ↗ sur tous les liens et boutons d'action.
- Boutons : rectangles à bordure blanche 1 px, fond transparent, texte blanc 12–13 px, avec un petit carré séparé contenant la flèche ↗ (ex. « Send Request », « Next », « Calculate the project », « Read More »).
- Badges circulaires à bordure fine 1 px contenant 1–2 lettres (CP, H, BR, CN, DS, RS) sur la page de détail projet.
- Listes à lignes séparatrices hairline (services, projets populaires, métadonnées).
- Dessins d'architecture isométriques en wireframe blanc fin sur fond noir.
- Photographies : architecture minimaliste blanche (villas, patios, piscines), intérieurs épurés, quelques images N&B (bureau, main tenant une maquette).

### Marges et espacements

- Contenu centré dans un conteneur ~1100–1200 px, marges latérales généreuses sur fond noir débordant.
- Espacement vertical important entre sections : 120–180 px desktop.
- Compositions aérées, beaucoup de vide noir assumé.

---

## 2. Header et footer (communs à toutes les pages)

**Header** : barre fine délimitée par une hairline inférieure. Gauche : logo « HOMELITH » (capitales, SemiBold, ~16 px). Centre : navigation HOME / ABOUT / SERVICES / PROJECTS / CONTACT (capitales, 11–12 px, blanc ; page active en bleu `#18339C`). Droite : « START THE PROJECT » (capitales, blanc ou bleu selon la page). Mobile : logo à gauche + icône burger (deux traits) à droite.

**Footer** : logo HOMELITH + navigation répétée sur une ligne + « START THE PROJECT » en bleu. En dessous, grand titre bicolore : « Contact us to discuss your project and advise you on the best way to start. » Puis trois colonnes avec labels gris et valeurs blanches : Address (Friedrichstraße 68, 10969 Berlin, Germany) / E-mail (cont@homelith.design) / Phone (+49 30 9456 2174). Barre inférieure : « ©2026 homelith. All rights reserved » à gauche, liens « Privacy policy / Cookie policy / Offer » à droite (petits, gris). Ne pas créer les pages correspondant à ces liens.

---

## 3. Pages (dans cet ordre)

### Page 1 : Home

1. **Hero** : sur fond noir, dessin wireframe blanc d'une maison moderne en axonométrie occupant le centre-droit. Par-dessus, titre géant sur deux lignes : « DESIGNED » (aligné gauche) / « HOUSES » (décalé à droite, chevauchant le dessin). Sous « DESIGNED » : « [architecture & build] » en italique blanc entre crochets ; sur « HOUSES » : « modern house design & construction » en bleu, petite taille. Bas gauche : court paragraphe blanc « We handle everything from concept to keys in hand. » Bas droite : bouton bordé « Calculate the project ↗ ».
2. **Section About** : label `[ABOUT]` bleu à gauche. Titre centré bicolore (~30 px) : « Homelith is an architectural studio » (blanc SemiBold) « that creates modern homes from the » (gris) « first sketch to the complete construction project. » (blanc). En dessous : deux photos côte à côte (un intérieur, une maison blanche) ; à droite, colonne étroite de texte gris justifié (2 courts paragraphes : projets de catalogue adaptables + contenu de chaque projet : architecture, zoning, visualisations 3D, plans détaillés) ; bouton « Read More ↗ ».
3. **Bannière projet** : image pleine largeur (villa blanche avec piscine à débordement, ciel bleu). Haut gauche : titre italique « Concrete & Timber House T3 » + description de 2 lignes en petit blanc. Bas droite : bouton « See examples of projects ↗ ».
4. **Popular projects** : label `[POPULAR PROJECTS]`. Titre bicolore : « Our projects » (blanc) « are thoughtful work with space, lifestyle and » (gris) « comfort. » (blanc). Gauche : photo d'une villa avec piscine. Droite : liste verticale de 5 lignes séparées par hairlines, chacune avec nom + flèche ↗ : Errace Line Villa / Split-Level House / Courtyard House / Pavilion House / Atrium Townhouse.
5. **Interior fit-out projects** : label `[INTERIOR FIT-OUT PROJECTS]` à gauche, lien « See all ↗ » à droite. Gauche : bloc texte « Minimalist living room » (titre), métadonnées petites (« Living room in 'Soft Line' · Germany »), paragraphe descriptif gris (~4 lignes), deux flèches de carrousel ← →. Droite : grande photo d'intérieur minimaliste gris avec arches.
6. **Grande image** : photo pleine largeur d'une maison moderniste blanche à étages sur colline, avec une petite version N&B superposée en bas au centre (effet collage).
7. **Footer** complet.

### Page 2 : About Us

Toute la page est traversée par de fines lignes de grille verticales et horizontales (hairlines blanches très discrètes) formant des cellules.

1. **Hero** : titre géant « ABOUT US » blanc centré, partiellement recouvert par un fin bandeau horizontal noir bordé de hairlines contenant en petit bleu : « Contemporary design with clarity and character ». Sous le titre : photo N&B centrée d'un bureau d'architecte. Labels bleus aux bords : « [ABOUT » à gauche, « US] » à droite.
2. **Bloc manifeste** : grand titre centré « Modern Design for Homes & Interiors » — le mot « for » est traversé par un bandeau fin contenant en bleu « Modern homes and interiors for daily life ». Paragraphe centré blanc (~4 lignes) sur l'architecture, les intérieurs et la lumière travaillant ensemble. À droite : colonne étroite de texte gris justifié (~15 lignes) décrivant le studio (approche systémique, du croquis aux plans, documentation transmise aux constructeurs). Deux photos de maisons en hiver (une petite, une plus grande). Labels « [OUR » gauche / « EDGE] » droite. Texte blanc : « Discover the core principles that define homelith's approach to designing modern homes and interiors ».
3. **Statistiques** : bande horizontale de 4 chiffres en bleu `#18339C`, très grands (~56 px) : « 80+ » (Projects) / « 10 » (Countries) / « 8 YRS » (Practice) / « 20 » (Partners), labels en petit blanc.
4. **Vision** : paragraphe blanc (~6 lignes) : concevoir des maisons qui vont au-delà du style visuel — espaces calmes soutenant les routines quotidiennes et exprimant la personnalité des habitants. Labels « [OUR » / « VISION] ».
5. **Trois cartes** en ligne : chacune = photo (feuille de papier courbée / maquette blanche / plan dessiné) + titre italique bleu capitales (LASTING DESIGN / SENSE OF PLACE / EVERYDAY EASE) + paragraphe gris de 2–3 lignes sur la durabilité, l'atmosphère et la praticité.

### Page 3 : Services

1. **Project approach** : label `[PROJECT APPROACH]` bleu à gauche. Titre bicolore : « Our approach to designing » (blanc) « modern homes and interiors that feel considered, » (gris) « functional and timeless » (blanc). Deux colonnes étroites de texte gris justifié (~10 lignes chacune) : partir des usages plutôt que des formes, concevoir architecture et intérieur ensemble ; process clair par étapes avec documentation transmissible.
2. **Services** : label `[SERVICES]`. Titre bicolore : « Homelith's services cover » (blanc) « the full cycle of work with private houses » (gris) « and their interiors » (blanc). Tableau à deux blocs :
   - Colonne gauche, catégorie « HOUSE DESIGN » (capitales SemiBold). Colonne droite, 6 lignes séparées par hairlines : Architectural concept for private houses / Floor plans and zoning / Facades and massing solutions / 3D exterior visualizations / Site and landscape concept / Adaptation of a catalogue project to your plot.
   - Catégorie « INTERIORS & PROJECT SUPPORT », 6 lignes : Interior planning and design / Selection of finishes, materials and colours / Kitchen and bathroom layouts / Lighting and electrical layouts / Drawings for construction and fit-out / Supervision during implementation.
   - **Interaction** : au survol, la ligne passe en bleu `#18339C`, souligne le texte et révèle à droite « from 1000 € » + flèche ↗.
3. Lien centré souligné bleu : « Learn more about services ».
4. **Section vidéo** : image pleine largeur (patio minimaliste blanc avec bassin, ombres nettes, ciel bleu) avec triangle de lecture en contour blanc + label « Architecture in context ». Un fin cadre rectangulaire blanc (prolongement de la grille) se superpose à l'image.

### Page 4 : Projects

1. **En-tête de page** : titre « WORKS » (capitales, ~22 px) à gauche, filtre « House ↓ » à droite d'un bloc souligné.
2. **Grille** de 9 projets sur 3 colonnes, style masonry avec tailles d'images alternées (grandes cartes ~2× plus hautes que les petites, positions variées pour créer un rythme décalé). Chaque carte : titre en crochets, italique, capitales, bleu (ex. `[RAVENCLIFF HOUSE]`) ; photo d'architecture blanche ; 3 lignes de métadonnées séparées par hairlines : « STATUS: » + valeur / « CLIENT: » + valeur / « COMPLETED: » + © année. Projets, ligne par ligne : Ravencliff House (grand), Skarsvik Villa, Oakridge House ; Marlow St. House, Seafront, Norden Park House (grand) ; Birchside Residence (grand), Arlund Hill House, Lynden House.
3. **Pagination** : chiffres 1 2 3 4 … 21 centrés (page courante en bleu) + bouton bordé « Next ↗ » à droite.

### Page 5 : Détail projet *(hypothèse : gabarit de fiche projet)*

Le header n'est pas visible dans la capture fournie. Ne pas en déduire automatiquement qu'il est absent de la page : conserver le header commun si cela est cohérent avec la navigation générale, sauf si la référence montre clairement une fiche immersive sans navigation.

Fond noir intégral. Haut gauche : numéro géant « 021 » (~180 px) en fonte display technique/monospace. En dessous : trois badges circulaires « CP » « H » « 1 » + label « PRJ » + nom « NORDEN COURTYARD HOUSE / 2025 » (blanc, capitales) + « Loc Copenhagen, Denmark » (gris). Haut droite : photo verticale de la maison avec « 021 » superposé en bas de l'image. Milieu gauche : label « SPCS » puis liste alignée à droite : Plaster / Aluminium Frame / Floor-To-Ceiling Glazing / Flat Roof / Inner Courtyard / Two Storeys / Family House. Centre-bas : grand dessin isométrique wireframe blanc de la maison (deux étages, vitrage toute hauteur, emprise au sol tracée). Bord droit : colonne de 4 badges circulaires « BR » « CN » « DS » « RS ».

### Page 6 : Contact

1. **Hero** : tagline centrée bleue capitales : « WE'D LOVE TO TALK ABOUT YOUR PROJECT ». Titre géant « LET'S talk » — « LET'S » en capitales gris `#949494`, « talk » en minuscules blanc, même corps (~110 px). Sous-titre capitales blanc sur deux lignes : « DESIGNING MODERN HOUSES AND INTERIORS ACROSS EUROPE. / TELL US A FEW DETAILS AND WE'LL REPLY WITH THE NEXT STEPS. »
2. **Formulaire** (colonne gauche ~60 %) : label `[LET'S START YOUR PROJECT]` italique bleu. Champ « Your name* » (label blanc SemiBold) : deux inputs côte à côte soulignés d'une simple ligne, placeholders gris « First » / « Last ». Champ « Contact details* » : deux inputs « E-mail address » / « Phone ». Question italique capitales : « DO YOU HAVE A PROJECT BUDGET? » puis 5 options italiques sur une ligne : < €50K / €50K–€100K / €100K–€250K / €250K–€500K / > €500K — l'option sélectionnée passe en bleu. Bouton « Send Request » bordé + carré séparé avec ↗.
3. **Colonne droite** : photo N&B verticale (main posant une maquette de maison sur un bureau).

---

## 4. Responsive

- **Desktop (≥ 1200 px)** : mises en page décrites ci-dessus.
- **Tablette (~768–1199 px, extrapolation)** : conserver la logique desktop en réduisant à 2 colonnes (grille projets, cartes About) et en réduisant les titres héros (~60–80 px).
- **Mobile (≤ 767 px, conforme aux captures mobiles fournies)** : header = logo + burger. Tout passe en une colonne, ordre du contenu conservé. Titres héros ~40–48 px, toujours en chevauchement avec bandeaux et images. Statistiques About en grille 2×2. Grille projets en 1 colonne. Formulaire contact : champs empilés pleine largeur, puces budget sur deux lignes. Les hairlines de grille restent visibles. Boutons pleine largeur.

---

## 5. Interactions et animations

**Observées (à reproduire)** :

- Navigation : lien de la page active en bleu.
- Lignes de services : survol → texte bleu souligné + affichage du prix « from 1000 € » et flèche ↗.
- Liens et boutons avec flèche ↗ ; léger changement d'état au survol.
- Carrousel « Interior fit-out projects » piloté par flèches ← →.
- Pagination et filtre déroulant sur la page Projects.
- Puces de budget sélectionnables (état actif bleu) sur Contact.

**Optionnelles (hypothèses, rester sobres)** : apparitions douces au scroll (fade/translate discrets), léger zoom des images au survol des cartes projets. Aucune animation spectaculaire.

---

## 6. Valeurs

Calme, clarté, précision technique, minimalisme haut de gamme, confort durable, rigueur européenne. Le site doit donner l'impression d'un document d'architecte : structuré, mesuré, sans effet superflu.

## 7. Références

Les captures d'écran fournies sont la seule référence. En cas de doute sur un détail, choisir l'option la plus sobre et la plus proche des captures.

## 8. Interdits

- Aucune couleur hors des 4 couleurs de la palette ; pas de dégradés, ombres portées colorées, glassmorphism ou néon.
- Aucune autre typographie qu'Inter Tight (sauf la fonte display des numéros de projet).
- Pas de coins arrondis marqués, pas de boutons pleins colorés, pas d'ombres douces « SaaS ».
- Pas d'illustrations cartoon, d'icônes décoratives ou d'emojis.
- Pas de fonds blancs pleine page : le site est sombre partout.
- Ne pas inventer de pages ou sections supplémentaires (pas de blog, témoignages, FAQ, équipe).
- Ne pas remplacer les photos d'architecture minimaliste par un autre style photographique.

## 9. Ton

Éditorial, précis, factuel, confiant, en anglais. Phrases courtes orientées bénéfices concrets (lumière, confort, durabilité). Vocabulaire technique assumé (zoning, massing, fit-out, drawings). Labels en capitales et crochets, métadonnées façon fiche technique. Aucune emphase marketing exagérée, aucun point d'exclamation.
