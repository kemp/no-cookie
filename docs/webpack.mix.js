let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix
    .js('src/app.js', 'dist/')
    .sass('src/app.scss', 'dist/')
    .copy('src/index.html', 'dist/')
    .copy('src/img/', 'dist')
    .setPublicPath('dist');
