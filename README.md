# Redux Side Effects with Thunk Video Course Starter Project

This starter code is intended for use with the Redux Side Effects with Thunk Video Course on WintellectNOW.

Note: To refer to the terminal on Mac and Linux as well as the Windows Command Prompt on Windows, the word **terminal** is used.

## Getting Started

**Step 1.** Ensure you have Node.js installed (version 8 or later). Node.js can be downloaded from [http://www.nodejs.org](http://www.nodejs.org).

To verify you Node.js version, open a terminal window and run the following command:

```bash
node -v
```

The version number should be 8 or higher. At the time of video recording the latest Node.js version was 10.9.0.

**Step 2.** There are two ways to download this repository, via Git Clone and a Zip file archive. For this course, I recommend the Zip file archive as your changes will not be submitted as pull requests for enhances to respository as a whole.

To download the zip file, click the green button labeled "Clone or download" near the upper right-hand part of this web page. A small pane will appear with the words "Download ZIP" towards the button. Click the link "Download ZIP" to download the archive. Once downloaded, extract the zip archive on your computer. Be sure to remember where you unzip it so you can find it in the next step. Generally, I recommend extracting the archive in the usual place where you manage project files on your system.

**Step 3.** Once extracted, open a terminal window and change to the folder where you extracted the archive. In the folder there should be a **package.json** file. From that folder run the following command:

```bash
npm install

```

This will install all of the NPM packages needed to run the project (an Internet connection is required).

**Step 4.** To run the project, type the following command from the terminal window:

```bash
npm start
```

The web page located at [http://localhost:3000](http://localhost:3000) should load in your default web browser. If it does not (or you wish to use another browser), open the browser you desire to use and navigate to the link.

**Step 5.** Open the editor of your choice to begin editing the files in the folder to follow along with the video. For the course, I recommend Visual Studio Code ([http://code.visualstudio.com](http://code.visualstudio.com)) but any editor may be used. Editors with support for JSX syntax as well as include a built-in file tree and a terminal window are preferred.

## Troubleshooting

- On some computers the port 3000 is already in use by another application. To change this application to another port, edit the **PORT** value specified in the **start** entry in the **scripts** section of the **package.json** file. Try port values such as 4000, 5000, 3030, 4040 and 5050. Keep it simple.

- Many times students will assume their Node.js version is sufficient and not check the version installed or install a newer version. If you have problems with any of the above "Getting Started" steps, please double check the Node.js version as described above.

- On work computers many students are required to use an older version of Node.js for current/legacy development and are hesitant to upgrade their Node.js version. To solve this problem, there are tools which support the installation of multiple Node.js versions and provide convenient commands for switching between the different versions. I personally use NVM on Linux with great success. Also, I have used NVM on macOS and it works great too. I have not used the one for Windows. While these are great tools, use them at your own risk.

 - Mac & Linux: [https://github.com/creationix/nvm](https://github.com/creationix/nvm)
 - Windows: [https://github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)


