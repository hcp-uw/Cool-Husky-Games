# Cool Husky Games

## Uploading your game files to the website

1. Run pygbag to compile your pygame-ce file and assets for the website. When done, the output folder should look like [this](https://drive.google.com/drive/folders/15yVl406Rvm_zXHZ0qWUeB_uFUsEN8hYQ?usp=drive_link).

2. Find the compiled files at `/[game-name]/build/web`. In the pong example, this would be `index.html`, `favicon.png`, `pong.apk`, and `pong.html`.

3. Create a branch in this repository with a name that signifies the changes you're trying to make, e.g. `add-snake-game`. Then, create folder in this branch under `/public/uploads/[game-name]/`. Go ahead and copy the files from step 2 into this folder.

4. When you're ready, go ahead and commit the changes. When all your changes are done, go ahead and open a pull request to the main branch from your bramch on GitHub. Ping me or one of the admins to look at the commits!

Our preview link is at <https://cool-husky-games-vite.pages.dev>. Every commit to main will be deployed and pushed to there after 2-3 minutes, so once your
pull request gets merged, feel free to go ahead and check it out to see your updates!

## Technical Details

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
