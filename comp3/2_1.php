<?php
$servername = "localhost";
$username = "root";
$password = "";
$db = "employees";

$conn = new mysqli($servername,$username, $password, $db);

if ($conn->connect_error){
  die("Connection failed: " . $conn->connect_error);
}
echo "Success";

$sql = "SELECT first_name, last_name FROM employees ORDER BY last_name DESC";
$result = mysqli_query($conn, $sql);

if (mysql_num_rows($result) > 0){
  while($row = mysqli_fetch_assoc($result)){
    echo "First name: " . $row["first_name"]. "Last name: " . $row["last_name"]. "<br>";
  }

} else {
  echo "No results";
}

 ?>
