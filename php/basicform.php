<!DOCTYPE html>
<html lang="en">
<head>
   <?php
  $name = "";
  $email = "";
  $nameError = "";
  $emailError = "";
   if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST["name"] ?? "";  // Retain submitted value
    $email = $_POST["email"] ?? "";  // Retain submitted value
    
    if (empty($name)) {
      $nameError = "Name is required";
    }
    if (empty($email)) {
      $emailError = "Email is required";
    }
  }
  ?>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bootstrap Form Example</title>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container mt-5">
    <h2 class="mb-4">Basic Form</h2>
    <form action="function.php" method="post">
      <!-- Name Field -->
      <div class="mb-3">
        <label for="name" class="form-label">Full Name</label>
        <input name="name" type="text" class="form-control" id="name" placeholder="Enter your name">
       <?php if ($nameError): ?>  <!-- Only show if error exists -->
          <div class="alert alert-danger" role="alert">
            <?php echo $nameError; ?>
          </div>
           <?php endif; ?>
      </div>

      <!-- Email Field -->
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input name="email" type="email" class="form-control" id="email" placeholder="name@example.com">
        <?php if ($emailError): ?>  <!-- Only show if error exists -->
          <div class="alert alert-danger" role="alert">
            <?php echo $emailError; ?>
          </div>
        <?php endif; ?> </div>

     

      <!-- Submit Button -->
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>

  <!-- Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
