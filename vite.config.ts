import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver, VueUseComponentsResolver } from 'unplugin-vue-components/resolvers'
import WindiCSS from 'vite-plugin-windicss'
import Markdown from 'vite-plugin-md'
import code from '@yankeeinlondon/code-builder'
import link from '@yankeeinlondon/link-builder'
import meta from '@yankeeinlondon/meta-builder'
import Pages from 'vite-plugin-pages'
import Prism from 'markdown-it-prism'
// import Latex from 'markdown-it-latex'
// import Katex from 'markdown-it-katex'
import Katex from './src/plugin/markdown-it-katex'

const defaultClasses = 'prose prose-sm m-auto text-left'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd())
    console.log(
        process.env.VITE_BASE_PUBLIC_PATH,
        env.VITE_BASE_PUBLIC_PATH,
        env,
        mode,
        process.cwd()
    )
    process.env.VITE_BASE_PUBLIC_PATH =
        process.env.VITE_BASE_PUBLIC_PATH || env.VITE_BASE_PUBLIC_PATH
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
                imports: [
                    'vue',
                    'vue-router',
                    'vue-i18n',
                    // custom
                    {
                        '@vueuse/core': [
                            // named imports
                            'useMouse', // import { useMouse } from '@vueuse/core',
                            // alias
                            ['useFetch', 'useMyFetch'] // import { useFetch as useMyFetch } from '@vueuse/core',
                        ],
                        axios: [
                            // default imports
                            ['default', 'axios'] // import { default as axios } from 'axios',
                        ]
                        // '[package-name]': [
                        //     '[import-names]',
                        //     // alias
                        //     ['[from]', '[alias]']
                        // ]
                    }
                ],
                eslintrc: {
                    enabled: false, // Default `false`
                    filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
                    globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
                }
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
                // frontmatterDefaults: {
                // requireAuth: false
                // },
                // style: {
                //     baseStyle: 'github'
                // },
                markdownItOptions: {
                    html: true,
                    linkify: true,
                    typographer: true
                },
                // markdownItUses: [Prism, Latex]
                markdownItSetup(md) {
                    // prismjs.com/
                    // md.use(require('markdown-it-prism'))
                    // md.use(require('markdown-it-latex'))
                    md.use(Prism)
                    md.use(require('markdown-it-anchor'))
                    // console.log(Object.keys(md),md.helpers,md.renderer,md.options)
                    // md.use(Latex)
                    md.use(Katex)
                    // md.use(Latex2Img)
                    // 为 md 中的所有链接设置为 新页面跳转
                    // md.use(LinkAttributes, {
                    //   matcher: (link: string) => /^https?:\/\//.test(link),
                    //   attrs: {
                    //     target: '_blank',
                    //     rel: 'noopener',
                    //   },
                    // });
                }
                // builders: [
                //     meta(),
                //     link(),
                //     code({
                //         theme: 'base'
                //     })
                // ]
            }),
            Pages({
                dirs: [
                    {
                        dir: 'src/views',
                        // baseRoute: process.env.VITE_BASE_PUBLIC_PATH
                        baseRoute: ''
                    }
                ],
                // extendRoute (route, parent) {
                //   console.log(route, parent)
                //   return { ...route, label: route.name }
                // },
                extensions: ['vue', 'md'],
                exclude: ['**/__*__.vue']
            })
        ],
        // 服务设置
        server: {
            host: true, // host设置为true才可以使用network的形式，以ip访问项目
            port: 8080, // 端口号
            open: true, // 自动打开浏览器
            cors: true, // 跨域设置允许
            strictPort: true, // 如果端口已占用直接退出
            // 接口代理
            proxy: {
                '/api': {
                    // 本地 8000 前端代码的接口 代理到 8888 的服务端口
                    target: 'http://localhost:8888/',
                    changeOrigin: true, // 允许跨域
                    rewrite: (path) => path.replace('/api/', '/')
                }
            },
            hmr: {
                overlay: false
            }
        },
        build: {
            brotliSize: false,
            // 消除打包大小超过500kb警告
            chunkSizeWarningLimit: 2000,
            // 在生产环境移除console.log
            terserOptions: {
                compress: {
                    drop_console: true,
                    drop_debugger: true
                }
            },
            assetsDir: 'static/assets',
            // 静态资源打包到dist下的不同目录
            rollupOptions: {
                output: {
                    chunkFileNames: 'static/js/[name]-[hash].js',
                    entryFileNames: 'static/js/[name]-[hash].js',
                    assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
                }
            }
        }
    }
})
