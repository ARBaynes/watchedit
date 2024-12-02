<?php

namespace App\Repositories;

use App\Interfaces\ProgrammeRepositoryInterface;
use App\Models\Programme;
use Illuminate\Database\Eloquent\Collection;

class ProgrammeRepository implements ProgrammeRepositoryInterface
{
    public function index(): Collection
    {
        return Programme::all();
    }

    public function getById($id): ?Programme
    {
        return Programme::findOrFail($id);
    }

    public function create(array $data): Programme
    {
        return Programme::create($data);
    }

    public function update(array $data,$id): bool
    {
        return Programme::whereId($id)->update($data);
    }

    public function delete($id)
    {
        Programme::destroy($id);
    }
}
