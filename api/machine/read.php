<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// include database and object files
include_once '../config/database.php';
include_once '../objects/machine.php';
 
// instantiate database and machine object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$machine = new Machine($db);
 
// query machine
$stmt = $machine->read();
 
// check if more than 0 record found
if($stmt->rowCount()>0){
 
    // machine array
    $machine_arr=array();
    $machine_arr["Machines"]=array();
 
    // retrieve our table contents
    // fetch() is faster than fetchAll()

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
        
        $machine_item=array(
            "id" => $ID,
            "Name" => $Name,
            "Description" => $Description
            );
 
        array_push($machine_arr["Machines"], $machine_item);
    }
 
    echo json_encode($machine_arr);
}
 
else{
    echo json_encode(
        array("message" => "No users found.")
    );
}
?>