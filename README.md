
<div align="center">
  <img src="https://raw.githubusercontent.com/remix-run/remix/main/.github/assets/remix-logo.svg" alt="Remix" width="60" style="margin:0 8px;" />
  <img src="https://raw.githubusercontent.com/github/explore/main/topics/react/react.png" alt="React" width="60" style="margin:0 8px;" />
  <img src="https://raw.githubusercontent.com/github/explore/main/topics/typescript/typescript.png" alt="TypeScript" width="60" style="margin:0 8px;" />
  <img src="https://raw.githubusercontent.com/github/explore/main/topics/nodejs/nodejs.png" alt="Node.js" width="60" style="margin:0 8px;" />
  <img src="https://raw.githubusercontent.com/github/explore/main/topics/tailwind/tailwind.png" alt="Tailwind CSS" width="60" style="margin:0 8px;" />
  <img src="https://raw.githubusercontent.com/github/explore/main/topics/mongodb/mongodb.png" alt="MongoDB" width="60" style="margin:0 8px;" />
  <img src="https://raw.githubusercontent.com/github/explore/main/topics/openai/openai.png" alt="OpenAI" width="60" style="margin:0 8px;" />
  
  <h1 style="margin-top: 16px; font-size: 2.5rem; font-family: 'Brush Script MT', cursive; color: #098d69ff;">Hyperion Chatbot</h1>
  <p><b>AI-powered chat app built with Remix, React, TypeScript, Tailwind, MongoDB, and OpenAI</b></p>
  <br>
  <a href="https://remix.run"><img src="https://img.shields.io/badge/Remix-2.16.7-blue?logo=remix" /></a>
  <a href="https://react.dev"><img src="https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.0.0-3178C6?logo=typescript" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/TailwindCSS-3.3.0-38B2AC?logo=tailwindcss" /></a>
  <a href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/MongoDB-6.0.0-47A248?logo=mongodb" /></a>
  <a href="https://platform.openai.com/docs"><img src="https://img.shields.io/badge/OpenAI-API-10A37F?logo=openai" /></a>
</div>

---

## 📖 Documentation

- [Remix docs](https://remix.run/docs)
- [Vite docs](https://vitejs.dev/guide/)
- [Tailwind docs](https://tailwindcss.com/docs)
- [OpenAI docs](https://platform.openai.com/docs)

---

## Development

Run the dev server:

```sh
npm run dev
```

## 🚀 Deployment

This app is deployed on **Vercel** and uses **GitHub** for CI/CD.

Every push to the GitHub repository automatically triggers a build and deployment on Vercel.

### Local Production Build

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

### Vercel Hosting

- Connect your GitHub repository to Vercel.
- Vercel will handle automatic builds and deployments for every commit.
- Manage environment variables, view logs, and roll back deployments in the Vercel dashboard.

### DIY Node Hosting

If you prefer manual deployment, the built-in Remix app server is production-ready.
Deploy the output of `npm run build`:
  - `build/server`
  - `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
