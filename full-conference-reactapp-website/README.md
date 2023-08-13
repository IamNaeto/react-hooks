# Installations
- Firstly create a folder and cd into it

- Initializing the package manager, run `npm init -y` This will create a package.json file.

- Adding react, react-dom and next to our package.json file, run `npm install react react-dom next`. This also download node_modules with our dependencies in it.

- To run our app create with npm we add some lines in the script portion of the package section. 
` "dev": "next",
    "build": "next build",
    "start": "next start" `

- Create an empty pages folder where we build our react website pages, run `mkdir pages`

- Build app by running `npm run build`