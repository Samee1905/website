<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
//$res_ar = array("foo"=> $_REQUEST['body']);
$productName=json_encode($request->productName);
$stock=json_encode($request->stock);
$price=json_encode($request->price);
$sql = "INSERT INTO PRODUCTS(`Product_name`, `Product_Stock`, `Product_unit_price`)  VALUES ($productName,$stock,$price)";
if($conn->query($sql)){
  $myArr->result="Inserted";
}else{
  $myArr->result="ERROR";
}

$myJSON = json_encode($myArr);
echo $myJSON;
