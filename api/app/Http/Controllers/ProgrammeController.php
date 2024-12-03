<?php

namespace App\Http\Controllers;

use App\Services\ApiResponseService;
use App\Http\Requests\CreateProgrammeRequest;
use App\Http\Requests\UpdateProgrammeRequest;
use App\Http\Resources\ProgrammeResource;
use App\Interfaces\ProgrammeRepositoryInterface;
use Illuminate\Http\JsonResponse;

class ProgrammeController extends Controller
{
    private ProgrammeRepositoryInterface $programmeRepository;

    public function __construct(ProgrammeRepositoryInterface $programmeRepository)
    {
        $this->programmeRepository = $programmeRepository;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        $data = $this->programmeRepository->index();

        return ApiResponseService::sendResponse(ProgrammeResource::collection($data));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function create(CreateProgrammeRequest $request): ?JsonResponse
    {
        $details =[
            'name' => $request->name,
            'genre' => $request->genre,
            'rating' => (int) $request->rating,
            'comments' => $request->comments
        ];
        try{
            $programme = $this->programmeRepository->create($details);

            return ApiResponseService::sendResponse(
                new ProgrammeResource($programme),
                201
            );
        }catch(\Exception $ex){
            return ApiResponseService::sendResponse('Create operation failed.', 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function read($id): ?JsonResponse
    {
        $programme = $this->programmeRepository->getById($id);

        return ApiResponseService::sendResponse(new ProgrammeResource($programme));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProgrammeRequest $request): ?JsonResponse
    {
        $updateDetails =[
            'name' => $request->name,
            'genre' => $request->genre,
            'rating' => $request->rating,
            'comments' => $request->comments
        ];
        try{
            $this->programmeRepository->update($updateDetails, $request->id);
            return ApiResponseService::sendResponse('Programme updated successfully', 204);
        } catch (\Exception $e){
            return ApiResponseService::sendResponse('Update operation failed.', 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function delete($id): ?JsonResponse
    {
        $this->programmeRepository->delete($id);

        return ApiResponseService::sendResponse('Programme deleted successfully',204);
    }
}
