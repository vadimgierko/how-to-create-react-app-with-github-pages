const CONTENT = {
    title: "How to create a React App with create-react-app & publish it with GitHub Pages",
    steps: [
        {
            title: "Create a new app with create-react-app",
            content: [
                "Open Windows PowerShell",
                "Create a new directory => cd .\\Desktop\\ & press Enter",
                "Create a create-react-app => npx create-react-app name-of-your-app & press Enter",
                "Wait until you see `Happy hacking!`"
            ]
        },
        {
            title: "Clear create-react-app template code",
            content: [
                "Open name-of-your-app folder in Visual Code Studio",
                "Delete all files in public Folder except index.html file",
                "Delete everything you don't need in index.html file & change the <title>",
                "Delete all files in src folder except App.js, index.css, index.js",
                "Write something in App.js main div to check if everything works, so...",
                "Open a New Terminal & write: npm start & press Enter",
                "Wait until your app shows in a new browser window. If you see the text you wrote in div, the app works correctly!"
            ]
        },
        {
            title: "Create the App you want to build",
            content: [
                "Create the App you want to build in your cleared create-react-app template & when it will be ready to publish..."
            ]
        },
        {
            title: "Publish your App with GitHub Pages deployment",
            content: [
                `Open your package.json and add a homepage field for your project: "homepage": "https://myusername.github.io/my-app",`,
                `Run "npm install --save gh-pages" in your Visual Code Studio Terminal`,
                `Add the following scripts in your package.json "scripts": "predeploy": "npm run build" & "deploy": "gh-pages -d build"`,
                "Publish your repository (or commit changes in existing repository)",
                `Run: "npm run deploy" in your Visual Code Studio Terminal`,
            ]
        },
        {
            title: "Check gh-pages deployment in your GitHub App repository",
            content: [
                "Check if there is a gh-pages branch in your App repository",
                "Click github-pages of your repository (you'll see it near the rocket icon on the right) and then...",
                `Click "View Deployment" & check if everything renders correctly`,
                "Celebrate!"
            ]
        },
        {
            title: "PS. Adding Bootstrap & Bootstrap Icons into project",
            content: [
                `Run: "npm install --save bootstrap" in your Visual Code Studio Terminal`,
                `Import Bootstrap CSS in the beginning of your src/index.js file: "import 'bootstrap/dist/css/bootstrap.css';"`,
                `Run: "npm i bootstrap-icons" in your Visual Code Studio Terminal`,
                `Import Bootstrap Icons CSS in the beginning of your src/index.js file: 'import "bootstrap-icons/font/bootstrap-icons.css";'`
            ]
        }
    ]
}

/*
https://create-react-app.dev/docs/deployment/
https://create-react-app.dev/docs/adding-bootstrap/
https://www.npmjs.com/package/bootstrap-icons
*/

export default CONTENT;