import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver, VueUseComponentsResolver } from 'unplugin-vue-components/resolvers'
import WindiCSS from 'vite-plugin-windicss'
import Markdown from 'vite-plugin-md'
import Pages from 'vite-plugin-pages'
import Prism from 'markdown-it-prism'

const defaultClasses = 'prose prose-sm m-auto text-left'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  console.log(process.env.VITE_BASE_PUBLIC_PATH, env.VITE_BASE_PUBLIC_PATH, env,mode,process.cwd())
  process.env.VITE_BASE_PUBLIC_PATH = process.env.VITE_BASE_PUBLIC_PATH || env.VITE_BASE_PUBLIC_PATH
  return {
    base: env.VITE_BASE_PUBLIC_PATH,
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    plugins: [
      vue({ include: [/\.vue$/, /\.md$/] }),
      AutoImport({
        dts: './auto-imports.d.ts',
        // include: [/\.vue$/, /\.md$/],
        imports: ['vue', 'vue-router', 'vue-i18n']
      }),
      Components({
        dts: './components.d.ts',
        extensions: ['vue', 'md'],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        dirs: ['src/components/', 'src/views'],
        resolvers: [NaiveUiResolver(), VueUseComponentsResolver()]
      }),
      WindiCSS({
        safelist: defaultClasses
      }),
      Markdown({
        wrapperClasses: defaultClasses,
        headEnabled: false,
        markdownItSetup (md) {
          https:// prismjs.com/
          md.use(Prism)
        // 为 md 中的所有链接设置为 新页面跳转
        // md.use(LinkAttributes, {
        //   matcher: (link: string) => /^https?:\/\//.test(link),
        //   attrs: {
        //     target: '_blank',
        //     rel: 'noopener',
        //   },
        // });
        }
      }),
      Pages({
        dirs: [{ dir: 'src/views', baseRoute: process.env.VITE_BASE_PUBLIC_PATH }],

        extensions: ['vue', 'md'],
        exclude: ['**/__*__.vue']
      })]
  }
})
