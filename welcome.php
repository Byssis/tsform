<html>
<body>

Welcome <?php echo $_POST["fullName"]; ?><br>
Your email address is: <?php 
$email = $_POST["email"];
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	echo "Invalid email format"; 
}
else {
	echo $email; 
}

?>

</body>
</html>