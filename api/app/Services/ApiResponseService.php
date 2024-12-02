<?php

namespace App\Services;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Facades\Log;

class ApiResponseService
{
    public static function throw(\Exception $e, ?string $message)
    {
        Log::info($e);
        throw new HttpResponseException(response()->json(["message"=> ($message||$e->getMessage())], 500));
    }

    public static function sendResponse(mixed $result, int $code = 200): JsonResponse
    {
        return response()->json($result)->setStatusCode($code);
    }

}
