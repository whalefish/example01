import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import WebpackIconfontPluginNodejs from 'webpack-iconfont-plugin-nodejs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
        new WebpackIconfontPluginNodejs({
            cssPrefix: 'icon',
            svgs: path.join(__dirname, 'src/assets/icons/*.svg'),
            fontsOutput: path.join(__dirname, 'src/assets/icon-fonts/'),
            cssOutput: path.join(__dirname, 'src/assets/icon-fonts/icon-font.css'),
            formats: ['woff', 'woff2']
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/styles/_var.scss";'
            }
        },
        devSourcemap: true
    }
})
