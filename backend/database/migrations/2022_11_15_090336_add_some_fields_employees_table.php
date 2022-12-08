<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('employees', function (Blueprint $table) {
            $table->date('date_of_birth')->nullable();
            $table->string('employee_profile')->nullable();
            $table->string('company_name')->nullable();
            $table->date('experience_start_date')->nullable();
            $table->date('experience_end_date')->nullable();
            $table->string('expersion_location')->nullable();
            $table->string('employee_degree')->nullable();
            $table->string('employee_field_study')->nullable();
            $table->date('education_start_date')->nullable();
            $table->date('education_end_date')->nullable();
            $table->string('education_grade')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
