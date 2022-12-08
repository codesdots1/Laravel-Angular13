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
        Schema::create('employees', function (Blueprint $table) {
            $table->increments('id');
            $table->string('employee_name')->nullable();
            $table->string('employee_address')->nullable();
            $table->string('employee_contact')->nullable();
            $table->string('employee_email')->nullable();
            $table->string('gender')->nullable();
            $table->string('employee_expersion')->nullable();
            $table->string('employee_designation')->nullable();
            $table->string('employee_salary')->nullable();
            $table->string('employee_education')->nullable();
            $table->string('employee_technical_skill')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employees');
    }
};
