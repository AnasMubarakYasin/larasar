<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Tightenco\Ziggy\Ziggy;

Route::get('ziggy', fn () => response()->json(new Ziggy));

Route::withoutMiddleware('api')->middleware(['session', 'api'])->group(function () {
    Route::post('/entry/signin', 'Authc\UserController@api_signin')->name('api.entry.signin');
    Route::post('/entry/signup', 'Authc\UserController@api_signup')->name('api.entry.signup');
    Route::post('/entry/signout', 'Authc\UserController@api_signout')->name('api.entry.signout');
});
