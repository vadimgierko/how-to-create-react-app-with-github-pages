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
                "Create the App you want to build in your cleared create-react-app template"
            ]
        },
        {
            title: "Publish your App with GitHub Pages deployment",
            content: [
                ""
            ]
        }
    ]
}

export default CONTENT;