<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// include database and object files
include_once '../config/database.php';
include_once '../objects/user.php';
 
// instantiate database and user object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$user = new User($db);
 
// query users
$stmt = $user->read();
 
// check if more than 0 record found
if($stmt->rowCount()>0){
 
    // users array
    $users_arr=array();
    $users_arr["Users"]=array();
 
    // retrieve our table contents
    // fetch() is faster than fetchAll()

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
        
        $user_item=array(
            "id" => $ID,
            "Ime" => $Ime,
            "Prezime" => $Prezime,
            "UserName" => $UserName,
            "Email" => $Email
            );
 
        array_push($users_arr["Users"], $user_item);
    }
 
    echo json_encode($users_arr);
}
 
else{
    echo json_encode(
        array("message" => "No users found.")
    );
}
?>