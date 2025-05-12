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

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.


# Mise en place du projet : 
on utilise cette doc : 

https://reactnative.dev/docs/getting-started-without-a-framework

on installe nvm et node

```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

$ nvm install node

node -v 
v24.0.1

nvm -v
0.40.3
```

on rentre la commande pour installer React Native Cli : 

```bash
$ npx @react-native-community/cli@latest init appliDbzCda
```

on ouvre le projet dans vscode

app.tsx point d’entrée

pour demarrer le projet en android  on : npm run android

on a des erreurs donc on  : npx react-native doctor

ce doctor nous montre ce qu’il manque a setup.

on ouvre android studio on installe android 16,15,14,13 et les tools suivants ( android sdk build-tools 38, ndk ( side by side ), CMake, AndroidEmulator, Android SDK Platform-Tools ) 

on ouvre le fichier android de notre projet dans android studio afin de mettre a jour les chemins, créer les dossiers et le build. 

on va préparer un émulateur, on installe api 36 avec google play, on installe un autre en api 35 au cas ou et peutetre même un api 34 pour mon android 14

on va telecharger les jdk java

dans cmd : cd ~

ls -a

Windows : bash ou powershell (a verifier )

sur linux : open . et ouvrir bashrc dans vscode

on check si java jdk est installé : java —version = openjdk 17.0.15 2025-04-15

sinon donwload java : https://www.linode.com/docs/guides/how-to-install-openjdk-ubuntu-22-04/

maintenant dans le .bashrc on rajoute nos variables d’env de android

```markdown
export ANDROID_HOME="$HOME/Android/Sdk"
export PATH="$PATH:$ANDROID_HOME/emulator"
export PATH="$PATH:$ANDROID_HOME/platforms-tools"
```

on source afin de mettre a jour le bashrc : $ source ~/.bashrc

 on reteste un doctor : npx react-native doctor

il nous manque  :  ✖ Android Studio - Required for building and installing your app on Android

pour résoudre ce probléme nous, ajoutons le path du [studio.sh](http://studio.sh) 

```markdown
# installé via Snap, utilisez le lien 'current' pour toujours cibler la dernière version
export ANDROID_STUDIO_HOME="/snap/android-studio/current"
# Ajout du binaire studio.sh au PATH
export PATH="$PATH:$ANDROID_STUDIO_HOME/bin"

```

puis source ~/.bashrc

probléme toujours la !
on tente de créer un wrapper pour le test du doctor, le doctor va tester un 

mais au final c’est seulement une erreur non problematique

enfait il fallait juste 

npm start

npm run android 

l’emulateur dans android studio ouvre la page Welcome to React Native

ensuite on commence l’architecture

Architecture :

- on va installer les librairies dont on a besoin
- architecturer notre dossier ( components, … )
- mettre en place le routeur
- mettre en place le store pour gérer les data

on va ouvrir une page internet ( React Navigation ) 

https://reactnavigation.org/docs/getting-started

- npm install @react-navigation/native
- npm install react-native-screens react-native-safe-area-context
- si probléme d’installation run : npm uninstall

suite a l’installation il faut ajouter react-native-screens dans le MainActivity.kt de src/main.java

puis on ajoute l’import

import android.os.Bundle

```kotlin
/**
for react-native-screens
*/
override fun onCreate(savedInstanceState: Bundle?) {
super.onCreate(null)
}
```

il faut aussi ajouter les extensions reacvt native dans vscode

- **ES7+ React/Redux/React-Native snippets**

maintenant on va installer redux :

pour gerer les données recuperée depuis l’api

- npm i react-redux @reduxjs/toolkit

on va installer une derniére librairie : 

- npm i axios

nouveau dossier src a la racine 

- assets ( fonts, images )
- components
- constants ( constantes )
- navigations
- screens ( ecrans de la navigation )
- store ( gerer data )
- types

absents : hooks, services, …

pour l’api que nou allons utiliser, il faut

- swagger : https://dragonball-api.com/api-docs#/Characters/CharactersController_findAll
- accueil : https://web.dragonball-api.com/

on telecharge les assets et fonts et on les mets dans notre dossier assets

pour le swagger , on recupere l’url : 

`https://dragonball-api.com/api/`

dans le dossier constants nouveau fichier apiConstant.Ts

on ajoute un :  export const API_URL = 'https://dragonball-api.com/api/';

nouveau fichier dans constantsw pour les couleurs pour la charte graphique

export const ORANGE = '#EA9F2A';
export const YELLOW = '#FFZ21B';
export const RED = '#CE1029';

dans app.tsx CTRL A + DELETE ALL

- rnfe

rnfe =
