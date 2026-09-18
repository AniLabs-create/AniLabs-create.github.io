# Nizamuddin — Portfolio

My personal portfolio, built with Vite and React 19, leveraging Material UI and Bootstrap 5. Adapted from the open-source [Gazi-V2](https://github.com/gazijarin/Gazi-V2) design.

## 🛠 set-up

1. Install the dependencies

   ```sh
   npm install
   ```

2. Start the dev server

   ```sh
   npm run dev
   ```

3. Build for production

   ```sh
   npm run build
   ```

## ✏️ customizing

- All content lives in `src/components/` (Intro, About, JobList, Projects, Books).
- The ASCII portrait in the hero is generated from `public/profile.png` by `extract_ascii.cjs`:

   ```sh
   node extract_ascii.cjs
   ```

- The theme palette is defined once in `src/styles/Global.css`.
