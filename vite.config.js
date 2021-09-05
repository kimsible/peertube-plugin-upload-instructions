export default {
  build: {
    lib: {
      entry: 'client/common-client-plugin.js',
      name: 'upload-instructions',
      formats: ['es'],
      fileName: () => 'common-client-plugin.js'
    }
  }
}
