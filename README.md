# Node.js (React, Express) Project Starter ✅

A simple template repository with a React frontend and Express backend for quickly starting new full-stack projects.

# Notes for deploying to AWS
The <script> tags in the head of the `public/index.html` and `public/404.html` files need to be removed, as they are GitHub pages hack specific.

The router also assumes a `basepath` of `/cool-husky-games` in the `createRouter` function call in `src/index.js`. This works because of how GitHub Pages is set up, but on AWS the website will be
served from the root path and doesn't have the `/cool-husky-games` subpath, so that specific line will need to be removed as well.

In addition, the vite.config.js file has a basename of `/cool-husky-games` as well, and that line can be removed when deploying to AWS.

## Prerequisites ‼️

To use this template, you need to have the following installed on your machine:

- Node.js 
- npm 

## Getting Started ▶️

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Installation 💭

1. Clone the repository to your local machine:

```bash
git clone https://github.com/hcp-uw/project-starter-template.git
```

2. Change into the project's directory:

```bash
cd project-starter-template
```


3. Install the required dependencies for both the frontend and backend:

```bash
cd starter-frontend
npm i
cd ../starter-backend
npm i
```

## Development 💻

To start the development environment, follow these steps:

1. Start your server (from the root of the project):

```bash
cd starter-backend
npm start
```

2. In a new terminal window (starting from the root of your project):
```bash
cd starter-frontend
npm start
```


### Authors 📝

[Elijah Melton](https://github.com/elimelt)

### Contributing 🤝

If you have any feedback feel free to submit an issue/pull request! Contributions are more than welcome.

