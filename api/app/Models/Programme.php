<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Programme extends Model
{
    protected $table = "programme";

    /*
    * With time, I would imagine these would have to be seperated out into
    * Programme and Review objects/models, though for now I am doing an MVP
    * following the established Programme model.
    */
    protected $fillable = ['name','genre','rating','comments'];
}
