export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/yo-ngx-lib.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng.YoNgxLib',
  globals: {
    '@angular/core': 'ng.core'
  }
}
