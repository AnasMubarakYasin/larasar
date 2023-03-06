# Larasar

## requirement

- tailwind
- vue
- pinia
- ziggy
- quasar

## instalation

### local instalation

```json
"repositories": [
    {
        "type": "path",
        "url": "../bladerlaiga/larasar"
    }
],
```
then
```bash
composer require bladerlaiga/larasar
```

### inertiajs 
```
composer require inertiajs/inertia-laravel tightenco/ziggy
```
```
npm install @inertiajs/vue3 ziggy-js
```
### tailwind
```
npm install -D tailwindcss postcss autoprefixer
```
### vue
```
npm install @vitejs/plugin-vue @vue/server-renderer vue pinia
```
### quasar
```
npm install @quasar/vite-plugin quasar @quasar/extras sass
```
## config
```
php artisan vendor:publish --tag=larasar-config
```
```
php artisan vendor:publish --tag=larasar-middlewares
```
```
php artisan vendor:publish --tag=larasar-resources
```
```
php artisan vendor:publish --tag=larasar-views
```
```
php artisan vendor:publish --tag=larasar-tailwind
```
```
php artisan vendor:publish --tag=larasar-jsconfig
```
```
php artisan vendor:publish --tag=larasar-vite
```
## extra
```bash
php artisan cache:table
php artisan notifications:table
php artisan queue:batches-table
php artisan queue:failed-table
php artisan queue:table
php artisan session:table
php artisan storage:link
php artisan migrate
```
```bash
php artisan vendor:publish --tag=larasar-template-app --existing
php artisan vendor:publish --tag=larasar-template-public --existing
php artisan vendor:publish --tag=larasar-template-page --existing
php artisan vendor:publish --tag=larasar-template-route --existing
php artisan vendor:publish --tag=larasar-resources --existing
```

## feature

- [x] Entry
- [x] Panel
- [ ] Resources
