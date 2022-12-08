<!DOCTYPE html>
<html>
<head>
    <title>Send Mail</title>
</head>
<body>
    <h1>{{ $mailData['title'] }}</h1>
    <p>Hii {{ $mailData['EmployeeName'] }} ,</p>
    <p> Here is profile link,  </p>
    <p><a type="button" class="btn" href="http://localhost:4200/profile/{{ $mailData['EmployeeId'] }}" target="_blank" >http://Employee/{{ $mailData['EmployeeName'] }}</a></p>



    <p> Thank You</p>
</body>
</html>
