<?php
class Item{
 
    // database connection and table name
    private $conn;
    private $table_name = "checkitems";
 
    // object properties
    public $ID;
    public $Name;
    public $Description;
    public $Unit_of_measure;
    public $Machine_ID;
    
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }


    // read item
    function read(){
    
        // select all query
        $query = "SELECT *  FROM " . $this->table_name;
    
        // prepare query statement
        $stmt = $this->conn->prepare($query);
    
        // execute query
        $stmt->execute();
    
        return $stmt;
    }

    // create item
function create(){
 
    // query to insert record
    $query = "INSERT INTO
               " . $this->table_name . " SET  Machine_ID=:Machine_ID , Name=:Name, Description=:Description, Unit_of_measure=:Unit_of_measure";
 
    // prepare query
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->Machine_ID=htmlspecialchars(strip_tags($this->Machine_ID));
    $this->Name=htmlspecialchars(strip_tags($this->Name));
    $this->Description=htmlspecialchars(strip_tags($this->Description));
    $this->Unit_of_measure=htmlspecialchars(strip_tags($this->Unit_of_measure));
   
 
    // bind values
    $stmt->bindParam(":Machine_ID", $this->Machine_ID);
    $stmt->bindParam(":Name", $this->Name);
    $stmt->bindParam(":Description", $this->Description);
    $stmt->bindParam(":Unit_of_measure", $this->Unit_of_measure);
 

 
    // execute query
    if($stmt->execute()){
        return true;
    }
 
    return false;
} 


}

