<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Employees;
use Illuminate\Http\Request;
use Mail;
use App\Mail\ProfileMailSend;

class EmployeeController extends Controller
{
    public function index()
    {
        $employees = Employees::all();
        return response()->json($employees);
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $employees = Employees::create($data);

        if($request->hasFile('employee_profile')){
            $path = $request->file('employee_profile')->store('employee_profile', 'public');
            $employees->update(
                ['employee_profile' => $path]
            );
        }
    }

    public function show($id)
    {
        return Employees::find($id);
    }

    public function update(Request $request,Employees $employees)
    {
        $employees->update($request->all());
        return response()->json('Employee Updated.');
    }

    public function destroy(Request $request,Employees $employees)
    {
        $employees->delete();
        return response()->json('Employee Deleted.');
    }

    public function sendMail(Request $request)
    {
        $data = $request->all();
        $id = $data['id'];
        $name = $data['employee_name'];
        $email = $data['employee_email'];

        $mailData = [
            'title' => 'Visit profile',
            'EmployeeId' => $id,
            'EmployeeName' => $name
        ];
        Mail::to($email)->send(new ProfileMailSend($mailData));

        return response()->json($data);
    }
}
