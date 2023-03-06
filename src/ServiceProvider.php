<?php

declare(strict_types=1);

namespace Bladerlaiga\Larasar;

use Illuminate\Support\ServiceProvider as LaravelServiceProvider;

final class ServiceProvider extends LaravelServiceProvider
{
    public function boot(): void
    {        
        $this->publishes([
            __DIR__ . '/../config/larasar.php' => config_path('larasar.php'),
        ], "larasar-config");
        $this->publishes([
            __DIR__ . '/../app/Http/Middleware/LarasarInertia.php' => app_path('Http/Middleware/LarasarInertia.php'),
        ], "larasar-middlewares");
        $this->publishes([
            __DIR__ . '/../resources' => resource_path('vendor/larasar'),
        ], "larasar-resources");
        $this->publishes([
            __DIR__ . '/../resources/views' => resource_path('views/vendor/larasar'),
        ], "larasar-views");

        $this->publishes([
            __DIR__ . '/../tailwind.config.js' => base_path('/tailwind.config.js'),
            __DIR__ . '/../postcss.config.js' => base_path('/postcss.config.js'),
        ], "larasar-tailwind");
        $this->publishes([
            __DIR__ . '/../jsconfig.json' => base_path('/jsconfig.json'),
            __DIR__ . '/../tsconfig.json' => base_path('/tsconfig.json'),
        ], "larasar-jsconfig");
        $this->publishes([
            __DIR__ . '/../vite.config.js' => base_path('/vite.config.js'),
        ], "larasar-vite");

        // extra

        $this->publishes([
            __DIR__ . '/../app' => app_path(),
        ], "larasar-template-app");
        $this->publishes([
            __DIR__ . '/../public' => public_path(),
        ], "larasar-template-public");
        $this->publishes([
            __DIR__ . '/Pages' => resource_path('js/Pages'),
        ], "larasar-template-page");
        $this->publishes([
            __DIR__ . '/routes/api.php' => base_path('routes/api.php'),
            __DIR__ . '/routes/web.php' => base_path('routes/web.php'),
        ], "larasar-template-route");
    }
    public function register(): void
    {
    }
}
