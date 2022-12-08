<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EmployeeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'                       => $this->id,
            'employee_name'            => $this->employee_name,
            'employee_address'         => $this->employee_address,
            'employee_contact'         => $this->employee_contact,
            'employee_email'           => $this->employee_email,
            'gender'                   => $this->gender,
            'employee_expersion'       => $this->employee_expersion,
            'employee_designation'     => $this->employee_designation,
            'employee_salary'          => $this->employee_salary,
            'employee_education'       => $this->employee_education,
            'employee_technical_skill' => $this->employee_technical_skill,
            'date_of_birth'            => $this->date_of_birth,
            'employee_profile'         => $this->employee_profile,
            'company_name'             => $this->company_name,
            'experience_start_date'    => $this->experience_start_date,
            'experience_end_date'      => $this->experience_end_date,
            'expersion_location'       => $this->expersion_location,
            'employee_degree'          => $this->employee_degree,
            'employee_field_study'     => $this->employee_field_study,
            'education_start_date'     => $this->education_start_date,
            'education_end_date'       => $this->education_end_date,
            'education_grade'          => $this->education_grade
        ];
    }
}
