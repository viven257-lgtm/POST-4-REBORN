import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/customer-tracker/', // 這裡填入你的 Repository 名稱
})
