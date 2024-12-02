<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureRequestComesFromFrontEnd
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next)
    {
        if($request->getHost() !== 'localhost' && $request->getHost() !== '127.0.0.1')
        {
            return response('Unauthorised access to API detected.'.$request->getHost(), 403);
        }

        return $next($request);
    }
}
