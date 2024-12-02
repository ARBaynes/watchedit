<?php

namespace App\Classes;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Facades\Log;

class ApiResponseClass
{
    public static function rollback(\Exception $e, string $message ="Process not completed, Db rolling back...")
    {
        DB::rollBack();
        self::throw($e, $message);
    }

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
