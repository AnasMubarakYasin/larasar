<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LarasarGuest
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next,  ...$params)
    {
        if (count($params) < 2) {
            $redirect = route('web.panel.index');
        } else {
            $redirect = route(array_pop($params));
        }
        $guards = $params;
        foreach ($guards as $guard) {
            if (Auth::guard($guard)->check()) {
                return redirect($redirect);
            }
            Auth::shouldUse($guard);
        }

        return $next($request);
    }
}
