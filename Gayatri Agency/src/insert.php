<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
//$res_ar = array("foo"=> $_REQUEST['body']);
$num=json_encode($request->num);
$prods=json_encode($request->prods);
$sql = "INSERT INTO TestTable(ID,Name) VALUES ($num,$prods)";
// if($conn->query($sql) === TRUE) {
//   echo "inserted";
// }else{
//   echo "error";
// }
if($conn->query($sql)){
  $myArr->result="Inserted";
}else{
  $myArr->result="ERROR";
}

$myJSON = json_encode($myArr);
echo $myJSON;
