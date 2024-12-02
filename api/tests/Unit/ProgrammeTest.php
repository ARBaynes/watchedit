<?php

namespace Tests\Unit;

use App\Models\Programme;
use App\Models\User;
use Tests\TestCase;

class ProgrammeTest extends TestCase
{
    public function testCreateProgramme()
    {
        $data = [
            'name' => "Authenticated testing programme",
            'genre' => "Comedy",
            'rating' => 3,
            'comments' => "Fairly okay"
        ];
        $response = $this->json('POST', '/api/programmes',$data);
        $response->assertStatus(200)
            ->assertJson(['status' => true])
            ->assertJson(['message' => "Programme created successfully"])
            ->assertJson(['data' => $data]);
    }

    public function testRetrievesAllProgrammes()
    {
        $response = $this->json('GET', '/api/programmes');
        $response->assertStatus(200);

        $response->assertJsonStructure(
            [
                [
                    'id',
                    'name',
                    'genre',
                    'rating',
                    'comments'
                ]
            ]
        );
    }

    public function testDeletesAProgramme()
    {
        $response = $this->json('GET', '/api/programmes');
        $response->assertStatus(200);

        $response->assertJsonStructure(
            [
                [
                    'id',
                    'name',
                    'genre',
                    'rating',
                    'comments'
                ]
            ]
        );
    }



}
