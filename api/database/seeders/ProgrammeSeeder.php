<?php

namespace Database\Seeders;

use App\Models\Programme;
use Illuminate\Database\Seeder;

class ProgrammeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = \Faker\Factory::create();
        for ($i = 0; $i < 10; $i++) {
            Programme::create([
                'name' => $faker->word,
                'genre' => $faker->word,
                'rating' => $faker->numberBetween(1, 5),
                'comments' => $faker->text,
            ]);
        }
    }
}
