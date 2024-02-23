# React, Typescript, Vite + Node, Koa. Yarn Workspaces

## Clone Repository

```bash
git clone [[https://github.com/pixeluga/CardsApp](https://github.com/pixeluga/react-ts-vite-node-koa-yarn-workspaces.git)](https://github.com/pixeluga/react-ts-vite-node-koa-yarn-workspaces.git)
cd react-ts-vite-node-koa-yarn-workspaces
```

## Install Node Modules

```bash
yarn install
```

## Run Project (Frontend and Backend together)

```bash
yarn start
```

This will start a development server for you.

## Eslint & Prettier

Use linter to format the code:

```bash
yarn lint:client
yarn yarn lint:fix:client

yarn prettier:client
yarn format:client
```

```bash
yarn lint:server
yarn yarn lint:fix:server

yarn prettier:server
yarn format:server
```

Or directly in `client` or `server` folders:

```bash
cd client or cd server

yarn lint
yarn yarn lint:fix

yarn prettier
yarn format
```
