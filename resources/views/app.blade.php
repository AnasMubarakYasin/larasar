<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('larasar.name', 'Laravel') }}</title>

        @vite(['resources/vendor/larasar/js/init.js', "resources/js/Pages/{$page['component']}.vue"])
        @inertiaHead
    </head>
    <body>
        <div id="splash-screen"></div>
        @inertia
    </body>
</html>
