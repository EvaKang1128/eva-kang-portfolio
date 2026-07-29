import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function resolveBase(): string {
  const repository = process.env.GITHUB_REPOSITORY

  if (!repository) return '/'

  const [owner, repositoryName] = repository.split('/')
  return repositoryName === `${owner}.github.io` ? '/' : `/${repositoryName}/`
}

export default defineConfig({
  plugins: [react()],
  base: resolveBase(),
})
