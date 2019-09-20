<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// get database connection
include_once '../config/database.php';
 
// instantiate item object
include_once '../objects/item.php';
 
$database = new Database();
$db = $database->getConnection();
 
$item = new Item($db);
 
// get posted data
$data = json_decode(file_get_contents("php://input"));
 
// set item property values
$item->Machine_ID = $data->topic;
$item->Name = $data->Name;
$item->Description = $data->Description;
$item->Unit_of_measure = $data->Unit_of_measure;



// create the item
if($item->create()){
    echo '{';
        echo '"item": "item was created."';
    echo '}';
}
 
// if unable to create the item, tell the item
else{
    echo '{';
        echo '"message": "Unable to create item."';
    echo '}';
}


?>