<?php
require('./header.php');
$token = $_SERVER['HTTP_TOKEN'];

if ($token && $token == 'f3dbf9a7-a101-40fd-8f70-ef1012c80852') {
    $movies = [
        ['name' => "Thor",'url'=>'https://picsum.photos/200/300'],
        ['name' => "Iron Man",'url'=>'https://picsum.photos/200/300'],
        ['name' => "Spider Man",'url'=>'https://picsum.photos/200/300'],
        ['name' => "Doctor Stenge",'url'=>'https://picsum.photos/200/300'],
        ['name' => "Captain America",'url'=>'https://picsum.photos/200/300'],
        ['name' => "Captain Marvel",'url'=>'https://picsum.photos/200/300'],
        ['name' => "Avenger",'url'=>'https://picsum.photos/200/300'],
        ['name' => "hulk",'url'=>'https://picsum.photos/200/300'],
    ];
    echo json_encode([
        'error' => true,
        'code' => 200,
        'data' => array_values($movies) 
    ]);
} else {
    //if(http_response_code()){
       // $code = http_response_code();
         // if($code == 200){
        //  echo "<<<<<<<<<<<<<";    print_r(($code));exit;
 
        //  }
   // }
    echo json_encode([
        'error' => true,
        'code' => 401,
        'message' => 'invalid token'
    ]);

//    var_dump( http_response_code());
   
}
