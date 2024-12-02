<?php

use App\Http\Controllers\ProgrammeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Index
Route::get('/programmes', [ProgrammeController::class, 'index']);
// Create
Route::post('/programmes', [ProgrammeController::class, 'create']);
// Read
Route::get('/programmes/{id}', [ProgrammeController::class, 'read']);
// Update
Route::put('/programmes/{id}', [ProgrammeController::class, 'update']);
// Delete
Route::delete('/programmes/{id}', [ProgrammeController::class, 'delete']);
