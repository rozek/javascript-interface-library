import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/javascript-interface-library.ts'),
      formats: ['es'],
      fileName: () => 'javascript-interface-library.esm.js',
    },
    outDir: 'dist',
    sourcemap: true,
  },
  plugins: [
    dts({
      rollupTypes: true,
      exclude: ['src/**/*.test.ts'],
      beforeWriteFile: (filePath, content) => ({
        filePath: filePath.replace(
          'javascript-interface-library.esm.d.ts',
          'javascript-interface-library.d.ts'
        ),
        content
      })
    }),
  ],
})
