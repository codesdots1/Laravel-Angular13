<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employees extends Model
{
    use HasFactory;

    protected $table = 'employees';

    protected $fillable = ['id','employee_name','employee_address','employee_contact','employee_email','gender','employee_expersion','employee_designation','employee_salary','employee_education','employee_technical_skill','date_of_birth','employee_profile','company_name','experience_start_date','experience_end_date','expersion_location','employee_degree','employee_field_study','education_start_date','education_end_date','education_grade'];


}


