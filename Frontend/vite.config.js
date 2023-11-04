import { defineConfig, loadEnv  } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), 'VITE_')
  
  return {
      
      plugins: [react()],
      server: {
        proxy: {
          "/api": {
            target: `http://localhost:${(env.VITE_PORT ? env.VITE_PORT : 8000).toString()}`,
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ""),
          },
        },
      },
    
  }
});
