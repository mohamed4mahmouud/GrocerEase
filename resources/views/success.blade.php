<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Payment Success</title>
    <!-- Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="antialiased">
<div class="container mt-5">
    <div class="alert alert-success" role="alert">
        <strong>Payment Done Successfully!</strong> You will be redirected shortly.
    </div>
</div>

<!-- JavaScript to redirect after 3 seconds -->
<script>
    setTimeout(function(){
        window.location.href = 'http://localhost:3000/'; // Change this URL to your desired redirect URL
    }, 3000); // 3000 milliseconds = 3 seconds
</script>

<!-- Bootstrap JS (optional, only if you need JS functionalities from Bootstrap) -->
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
