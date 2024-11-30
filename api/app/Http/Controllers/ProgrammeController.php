<?php

namespace App\Http\Controllers;

use App\Models\Programme;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProgrammeController extends Controller
{
    public function index(): JsonResponse
    {
        $programmes = Programme::all();
        return response()->json($programmes);
    }

    public function create(Request $request): JsonResponse
    {
        $programme = new Programme();
        $programme->name = $request->name;
        $programme->genre = $request->genre;
        $programme->rating = $request->rating;
        $programme->comments = $request->comments;
        $programme->save();
        return response()->json($programme.' created.', 201);
    }

    public function read(Programme $programme): JsonResponse
    {
        return response()->json($programme);
    }

    public function update(Request $request, Programme $programme): JsonResponse
    {
        return response()->json($programme, 200);
    }

    public function delete(Programme $programme): JsonResponse
    {
        return response()->json($programme, 200);
    }
}
