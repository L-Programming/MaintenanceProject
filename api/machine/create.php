<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// get database connection
include_once '../config/database.php';
 
// instantiate machine object
include_once '../objects/machine.php';
 
$database = new Database();
$db = $database->getConnection();
 
$machine = new Machine($db);
 
// get posted data
$data = json_decode(file_get_contents("php://input"));
 
// set machine property values
$machine->Name = $data->Name;
$machine->Description = $data->Description;


// create the machine
if($machine->create()){
    echo '{';
        echo '"message": "machine was created."';
    echo '}';
}
 
// if unable to create the user, tell the user
else{
    echo '{';
        echo '"message": "Unable to create machine."';
    echo '}';
}
?>