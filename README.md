This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```



If everything is set up correctly, you should see your new app running in the Android Emulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).

#
#
#
#
#

# Mise en place du projet **React Native** 

> Documentation de référence : <https://reactnative.dev/docs/getting-started-without-a-framework>

---

## 1 · Installer **nvm** & **Node.js**

```bash
# Installer nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# Installer la dernière version LTS de Node.js
nvm install node

# Vérifications
node -v   # v24.0.1
nvm  -v   # 0.40.3
```

---

## 2 · Créer le projet React Native (CLI)

```bash
npx @react-native-community/cli@latest init appliDbzCda
```

*Ouvrez le dossier dans **VS Code** — le point d’entrée est `App.tsx`.*

---

## 3 · Premier lancement Android

```bash
npm run android          # construit et déploie l’app
# En cas d’erreurs :
npx react-native doctor  # liste les éléments manquants
```

---

## 4 · Configurer **Android Studio**

1. Installez les API 16, 15, 14, 13  
2. Ajoutez :
   - **Build‑Tools 38**
   - **NDK (Side by Side)**
   - **CMake**
   - **Android Emulator**
   - **Android SDK Platform‑Tools**
3. Ouvrez le dossier `android/` du projet pour mettre à jour les chemins et générer le build.

### Créer des émulateurs

- **API 36** (Google Play)  
- **API 35**  
- *(optionnel)* **API 34** (Android 14)

---

## 5 · Installer le **JDK**

```bash
java --version   # doit renvoyer openjdk 17.0.15 (ou équivalent)
```

> Absent ? Suivez : <https://www.linode.com/docs/guides/how-to-install-openjdk-ubuntu-22-04/>

---

## 6 · Variables d’environnement Android

Ajoutez dans `~/.bashrc` :

```bash
export ANDROID_HOME="$HOME/Android/Sdk"
export PATH="$PATH:$ANDROID_HOME/emulator"
export PATH="$PATH:$ANDROID_HOME/platform-tools"

# Si Android Studio est installé via Snap :
export ANDROID_STUDIO_HOME="/snap/android-studio/current"
export PATH="$PATH:$ANDROID_STUDIO_HOME/bin"
```

Puis rechargez :

```bash
source ~/.bashrc
```

Le *doctor* peut encore afficher « ✖ Android Studio », mais ce n’est pas bloquant si le build passe.

---

## 7 · Lancer l’application

```bash
npm start         # démarre Metro
npm run android   # compile & déploie
```

L’émulateur affiche **Welcome to React Native**.

---

# Organisation du code

- Installer les librairies nécessaires  
- Structurer le dossier (`components`, …)  
- Mettre en place le routeur  
- Mettre en place le store (données)

## Arborescence recommandée

```
src/
 ├─ assets/         # fonts, images
 ├─ components/
 ├─ constants/
 ├─ navigations/
 ├─ screens/
 ├─ store/
 └─ types/
```

---

## Dépendances principales

```bash
# Navigation
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/stack @react-navigation/bottom-tabs
npm install @react-navigation/native-stack
npm install react-native-gesture-handler

# State management
npm install react-redux @reduxjs/toolkit

# HTTP
npm install axios

# Icônes
npm install react-native-vector-icons
npm i --save-dev @types/react-native-vector-icons
```

### `react-native-screens` — ajout dans **MainActivity.kt**

```kotlin
import android.os.Bundle

override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)   // nécessaire pour react-native-screens
}
```

---

## Constantes

`src/constants/apiConstant.ts`

```ts
export const API_URL = 'https://dragonball-api.com/api/';
```

`src/constants/colors.ts`

```ts
export const ORANGE = '#EA9F2A';
export const YELLOW = '#FFZ21B';
export const RED    = '#CE1029';
```

---

## API Dragon Ball

- Swagger : <https://dragonball-api.com/api-docs#/Characters/CharactersController_findAll>  
- Base URL : `https://dragonball-api.com/api/`

---

## Nettoyer `App.tsx` (snippet **rnfe**)

```tsx
import React from 'react';
import { View, Text } from 'react-native';

const App = () => (
  <View>
    <Text>App</Text>
  </View>
);

export default App;
```

---

## Typage — `src/types/character.ts`

```ts
export interface Character {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  deletedAt: string | null;
  originPlanet?: Planet;
  transformations?: Transformation[];
}

export interface Planet {
  id: number;
  name: string;
  isDestroyed: boolean;
  description: string;
  image: string;
  deletedAt: string | null;
}

export interface Transformation {
  id: number;
  name: string;
  image: string;
  ki: string;
  deletedAt: string | null;
}

export interface CharacterResponse {
  items: Character[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
  links: {
    first: string;
    previous: string;
    next: string;
    last: string;
  };
}
```

---

## Écrans à créer

- `Home.tsx`
- `Detail.tsx`
- `Search.tsx`

---

## Navigation

### `src/navigations/MainNavigation.tsx`

```tsx
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';

const Stack = createStackNavigator();

export const MainNavigation = () => (
  <Stack.Navigator initialRouteName="TabHome">
    <Stack.Screen
      name="TabHome"
      component={Home}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
```

### `index.js`

```js
import 'react-native-gesture-handler';
```

### `App.tsx`

```tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from './src/navigations/MainNavigation';

const App = () => (
  <NavigationContainer>
    <MainNavigation />
  </NavigationContainer>
);

export default App;
```

---

**Votre base de projet est prête !**  
Poursuivez avec l’implémentation des écrans et la consommation de l’API Dragon Ball.



Pour ajouter un filtre par race sur la vue détail j'ai fait : 
trois étapes clés, en restant simple et DRY :

    Extension du slice Redux

        Tu as ajouté dans le CharactersState un champ CharacterByRace (initialisé à null) et une action setCharacterByRace pour stocker le tableau des personnages récupérés par race.

        Tu as créé un thunk fetchCharacterByRace(race) qui déclenche setLoading, appelle l’API GET /characters?race=…, puis dispatch setCharacterByRace(response.data) (ou setError en cas d’échec).

    Composants UI autonomes

        RaceCard : une carte réutilisable affichant image, nom, race et affiliation, avec un onPress pour naviguer vers le détail.

        DetailRace : un carousel horizontal qui mappe CharacterByRace en RaceCard, et dispatch l’action setSelectedCharacterId + navigation vers l’écran Detail.

    Intégration dans l’écran Detail

        Dans Detail.tsx, tu récupères via useSelector à la fois characterDetail, CharacterByRace, loading et error.

        Premier useEffect pour fetcher le détail (fetchCharacterDetail(characterId)), second pour lancer fetchCharacterByRace(characterDetail.race) dès que characterDetail est disponible.

        Enfin, tu conditionnes l’affichage de <DetailRace characters={CharacterByRace} /> seulement si le tableau existe et n’est pas vide.


on va utiliser le localstorage, et simuler des combats entre les personnages
on ajoute : npm i @react-native-async-storage/async-storage
Creation new folder: services, new file StorageService.ts
