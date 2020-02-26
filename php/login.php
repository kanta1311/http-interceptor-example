<?php
require('./header.php');
$username = $_POST['username'];
$password = $_POST['password'];

if (!$username || !$password) {
    echo json_encode(['error' => true, 'message' => 'username or password is missing']);
} else if ($username == 'Arvind' && $password == '123456') {
    echo json_encode([
        'error' => false,
        'message' => 'login success',
        'data' => ['token' => 'f3dbf9a7-a101-40fd-8f70-ef1012c80852']
    ]);
} else {
    echo json_encode(['error' => true, 'message' => 'username or password is wrong']);
}
