<?php

use App\Http\Resources\EmployeeResource;
use App\Models\Employees;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/employees',function(){
    return EmployeeResource::collection(Employees::all());
});
Route::get('/employee/{employees}',function($id){
    return new EmployeeResource(Employees::findOrFail($id));
});
Route::post('/employees-store','\App\Http\Controllers\API\EmployeeController@store');
Route::put('/employees-update/{employees}','\App\Http\Controllers\API\EmployeeController@update');
Route::delete('/employees-delete/{employees}','\App\Http\Controllers\API\EmployeeController@destroy');

// Route::get('/employees-send-email/{employees}','\App\Http\Controllers\API\EmployeeController@sendMail');
Route::post('/employees-send-email','\App\Http\Controllers\API\EmployeeController@sendMail');

// Route::put('/employees-send-email/{employees}','\App\Http\Controllers\API\EmployeeController@sendMail');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
