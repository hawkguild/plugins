<?php

namespace App\Http\Middleware;

use Closure;

class AuthorizationMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        var_dump($request->route()->getName());
        exit('kay');
        return $next($request);
    }
}
