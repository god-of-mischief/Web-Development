# Node.js Set-up

## Install Hyper

### Installation Steps : 

1. Goto [hyper.is](https://hyper.is/).
2. Download hyper.
3. Run the hyper.exe file that downloaded in the above step.
4. Now, goto [git-scm.com](https://git-scm.com/).
5. Click on Downloads, click on windows, it will automatically start downloading git.
6. Double click in the downloaded file and go through all the installation steps. 
7. **Restart your computer**
8. Now open [this](https://gist.github.com/coco-napky/404220405435b3d0373e37ec43e54a23). Copy all the contents.
9. Open Hyper and click on the three lines on top left corner -> Edit -> Prefernces. It will open up configuration file.
10. Delete the contents already present in that file and paste the recently copied content into that file. Save the file and close the file.
11. Configuration will update automatically. **Close the hyper and reopen it**.

## Install Node.js

### Installation Steps :

1. Download the **LTS version** from [***Node.js Website***](https://nodejs.org/en/).
2. Run the installer, the .msi file downloded in the previous step.
3. Follow the prompts in the installer (Accept the license agreement, click the NEXT button a few times.
4. **Restart your computer**.
5. Open Hyper terminal and type the command `node --version`.
6. You should see the version of the node you just installed.

## npm - Node package manager

- **npm** is the world's largest Software Library.
- The registry contains over 800,000 **code packages**.
- All **npm** packages are defined in files called `package.json`.

## Example

- Open Hyper.
- Create a directory at your choice, like: `$ cd Desktop/` then `$ mkdir node` then `$ cd node/`
- Create a file in the folder. index.js, like: `$ touch index.js`
- In the node folder, first we should initialise npm by writing the command
  ```
  npm init
  ```
- Hit Enter. It will go through a utility.
- Make sure the entry point is **index.js**.
- All the above utility data will be written into *package.json* in the node folder.
- Headover to [npmjs.com](https://www.npmjs.com/).
- Search for a package you want to use. For example search superheros.
- Now, you can see a short documentation on how to use that package and the methods related to that package.
- To install the package, open hyper and type the command,
  ```
  $ npm install superheroes
  ```
- Hit enter, you will find the dependecies in the package.json file.
- The package has a function .random(), produces random superhero names.
- In index.js file,
  ``` js
  var superheroes=require("superheroes");
  var supervillains = require('supervillains');
  var mySuperHeroName=superheroes.random();
  var mySuperVillainName=supervillains.random();
  console.log(mySuperHeroName+' vs '+mySuperVillainName);
  ```
- To run the above code,
  `$ node index.js`
- The output will produce,
  `Sentinel vs The Amoeba Boys`
