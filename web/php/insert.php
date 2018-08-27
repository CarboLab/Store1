<?php
$connection = mysqli_connect('localhost', 'rootAdmin', 'rootAdmin', 'dbase');
if ($_POST['email']) {
    $email = $_POST['email'];

    $q = "INSERT INTO user (email) VALUES ('$email')";

    $query = mysqli_query($connection, $q);

    if ($query) {
        echo json_encode("Data Inserted Successfully");
    } else {
        echo json_encode('problem');
    }
}
?>