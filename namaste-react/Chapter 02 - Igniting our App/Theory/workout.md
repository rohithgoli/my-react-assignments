### What is NPM ?
##### NPM is a package manager for javascript programming language

### What is pnpm ?
##### An improved state of npm package manager in terms of Speed, Efficiency

### What is Parcel/Webpack ? Why do we need it ?
##### These are called **Bundlers**
Bundler is a tool which helps in managing & organizing JavaScript code & its dependencies by
* combining multiple files into a single file
* Some modern bundlers like Parcel can also perform Minification, Caching, Compression, Cleaning to make code Production ready

### What is .parcel-cache ?
##### Parcel , a Bundler performs certain tasks among which Caching is one in order to provide faster builds. 
Those are stored in .parcel-cache

### What is npx ?
##### npx command performs execution
In pnpm, it is similar to --> pnpm exec

### What is difference between dependencies vs devDependencies ?
##### **devDependencies** are used only for development build purpose whereas **dependencies** are used for development and production build

### What is Tree Shaking ?
##### Bundlers remove unused code while generating final bundled files. This is called Tree Shaking

### What is Hot Module Replacement ?
##### Upon making changes and saving during Development, build is generated immediately with File watching algorithm & reloading so that changes are provided immediately.
This is called HMR (Hot Module Replacement), a feature provided by Bundlers

### Mention 5 Favorite superpowers of Parcel & describe 3
#####
* Local Server
* Code Splitting
* Error Handling
* Image Optimization
* Different Dev and Prod bundles

### What is .gitignore ? What should we add and not add into it ?
##### We do not want certain files or folders to be added to git & into github repository
Those are specified in a file called .gitignore such that git ignores them for consideration

Any file or folder that can be re-generated (node_modules etc..) can be added into .gitignore & Files which can't be re-generated (package.json, package-lock.json etc..) should not be added

### What is the difference between package.json and package-lock.json
##### **package.json** is the configuration file which contains list of all the depedencies, the project uses along with approximate versions (versions with ~ or ^)
##### **package-lock.json** contains the exact versions & integrity for each of the dependencies & also the transitive dependencies

### Why should I not modify package-lock.json ?
##### package.json contains versions with ^ and ~, and package-lock.json contains exact versions with integrity (sha token) which are generated
It is not advisable to modify package-lock.json

### What is node_modules ? Is it a good idea to push that on git ?
##### Source of all the dependencies(packages) which are specified in package-lock.json in the exact version are available inside node_modules folder

### What is the dist folder ?
##### Final bundled files are generated and placed in a folder, which is dist folder. It can be re-generated as and when build is generated

### What is browserlists ?
##### A npm package which provides information regarding browsers usage & also by mentioning its configuration in app configuration file (package.json), we can provide browser support to our application as desired