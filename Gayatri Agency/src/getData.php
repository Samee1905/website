<?php
include_once("database.php");
$sql = "SELECT * FROM TestTable";
$result = $conn->query($sql);
$myArr = array();
if ($result->num_rows > 0) {
// output data of each row
while($row = $result->fetch_assoc()) {
$myArr[] = $row;
}
} else {
echo "Sameer";
}

$myJSON = json_encode($myArr);
echo $myJSON;
