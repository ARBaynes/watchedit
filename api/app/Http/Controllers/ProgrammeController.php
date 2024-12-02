<?php

namespace App\Http\Controllers;

use App\Classes\ApiResponseClass;
use App\Http\Requests\CreateProgrammeRequest;
use App\Http\Requests\UpdateProgrammeRequest;
use App\Http\Resources\ProgrammeResource;
use App\Interfaces\ProgrammeRepositoryInterface;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

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

        return ApiResponseClass::sendResponse(ProgrammeResource::collection($data));
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
        DB::beginTransaction();
        try{
            $programme = $this->programmeRepository->create($details);

            DB::commit();
            return ApiResponseClass::sendResponse(
                new ProgrammeResource($programme),
                'Programme created successfully',
                201
            );

        }catch(\Exception $ex){
            return ApiResponseClass::rollback($ex);
        }
    }

    /**
     * Display the specified resource.
     */
    public function read($id): ?JsonResponse
    {
        $programme = $this->programmeRepository->getById($id);

        return ApiResponseClass::sendResponse(new ProgrammeResource($programme));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProgrammeRequest $request, $id): ?JsonResponse
    {
        $updateDetails =[
            'name' => $request->name,
            'genre' => $request->genre,
            'rating' => $request->rating,
            'comments' => $request->comments
        ];
        DB::beginTransaction();
        try{
            $programme = $this->programmeRepository->update($updateDetails,$id);

            DB::commit();
            return ApiResponseClass::sendResponse($programme, 'Programme updated successfully');

        } catch (\Exception $e){
            return ApiResponseClass::rollback($e);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function delete($id): ?JsonResponse
    {
        $this->programmeRepository->delete($id);

        return ApiResponseClass::sendResponse('Programme deleted successfully',204);
    }
}
