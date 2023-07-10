import copy from 'rollup-plugin-copy';
import { screepsConfig } from './screeps.config.js';

export default {
    build: {
        minify: false,
        sourcemap: true,
        lib: {
            entry: 'src/main.ts',
            name: 'main',
            fileName: 'main',
            formats: ['cjs'],
        },
        rollupOptions: {
            output: {
                format: 'cjs', // 输出格式为 CommonJS
                entryFileNames: '[name].js', // 入口文件的命名
                chunkFileNames: 'js/[name].js', // 代码块的命名
            },
            plugins: [
                copy({
                    targets: [
                        {
                            src: screepsConfig.sourceDir,
                            dest: screepsConfig.targetDir,
                        },
                    ],
                }),
            ],
        },

    },
    include: ['**/*.*'],
    exclude: [],
};
