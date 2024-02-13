import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import { join } from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const { VITE_BASE_URL, VITE_SERVER_PORT, VITE_PREVIEW_PORT } = env

  // https://vitejs.dev/guide/static-deploy
  // If you are deploying to https://<USERNAME>.github.io/<REPO>/
  // (eg. your repository is at https://github.com/<USERNAME>/<REPO>)
  // then set base to '/<REPO>/'

  return {
    base: VITE_BASE_URL,
    plugins: [react()],
    resolve: {
      alias: [{ find: /^src\/(.*)$/, replacement: join(process.cwd(), 'src/$1') }],
    },
    server: {
      port: Number(VITE_SERVER_PORT),
    },
    preview: {
      port: Number(VITE_PREVIEW_PORT),
    },
  }
})
