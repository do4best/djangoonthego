<?php 
if (isset($_POST['name'], $_POST['email'])) {
    echo "Thank You {$_POST['name']} . I will email you at the {$_POST['email']}";
}
?>
<a href="basicform.php">back</a>