<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Contracts\Auth\Factory as Auth;

class LarasarAuthc
{
    public function __construct(public Auth $auth)
    {
    }
    public function handle($request, Closure $next, ...$params)
    {
        if (count($params) < 2) {
            $redirect = route('web.entry.index');
        } else {
            $redirect = route(array_pop($params));
        }
        $guards = $params;
        $authecticated = $this->authenticate($guards);
        if (!$authecticated) {
            $this->unauthenticated($guards, $redirect);
        }

        return $next($request);
    }
    protected function authenticate(array $guards)
    {
        if (empty($guards)) {
            $guards = [null];
        }

        foreach ($guards as $guard) {
            if ($this->auth->guard($guard)->check()) {
                $this->auth->shouldUse($guard);
                return true;
            }
        }
        return false;
    }

    protected function unauthenticated(array $guards, string $redirect)
    {
        throw new AuthenticationException(
            'Unauthenticated.',
            $guards,
            $redirect
        );
    }
}
