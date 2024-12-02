<?php

namespace Tests\Unit;

use App\Models\Programme;
use App\Models\User;
use Tests\TestCase;

class ProgrammeTest extends TestCase
{
    public function testDoesNotCreateProductWithAuth()
    {
        $data = [
            'name' => "Unauthenticated testing programme",
            'genre' => "Action",
            'rating' => 5,
            'comments' => "Fantastic!"
        ];

        $response = $this->json('POST', '/api/programmes',$data);
        $response->assertStatus(401);
        $response->assertJson(['message' => "Unauthenticated."]);
    }

    public function testCreateProductWithAuth()
    {
        $data = [
            'name' => "Authenticated testing programme",
            'genre' => "Comedy",
            'rating' => 3,
            'comments' => "Fairly okay"
        ];
        $user = User::factory()->create();
        $response = $this->actingAs($user)->json('POST', '/api/programmes',$data);
        $response->assertStatus(200)
            ->assertJson(['status' => true])
            ->assertJson(['message' => "Programme created successfully"])
            ->assertJson(['data' => $data]);
    }

    public function testRetrievesAllProducts()
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
