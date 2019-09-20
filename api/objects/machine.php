<?php
class Machine{
 
    // database connection and table name
    private $conn;
    private $table_name = "machine";
 
    // object properties
    public $ID;
    public $Name;
    public $Description;
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }


    // read machine
    function read(){
    
        // select all query
        $query = "SELECT *  FROM " . $this->table_name;
    
        // prepare query statement
        $stmt = $this->conn->prepare($query);
    
        // execute query
        $stmt->execute();
    
        return $stmt;
    }

    // create machine
function create(){
 
    // query to insert record
    $query = "INSERT INTO
               " . $this->table_name . " SET Name=:Name, Description=:Description ";
 
    // prepare query
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->Name=htmlspecialchars(strip_tags($this->Name));
    $this->Description=htmlspecialchars(strip_tags($this->Description));
 
    // bind values
    $stmt->bindParam(":Name", $this->Name);
    $stmt->bindParam(":Description", $this->Description);

 
    // execute query
    if($stmt->execute()){
        return true;
    }
 
    return false;
} 
}

